<!-- TabPanel.vue -->
<template>
  <div class="w-full">
    <div 
      class="flex" 
      role="tablist"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :class="[
          'relative flex items-center gap-2 px-5 py-3 border-0 bg-transparent text-sm font-medium cursor-pointer transition-all duration-200 whitespace-nowrap min-w-fit',
          'hover:bg-gray-50',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'text-gray-500': activeTabIndex !== index,
            'text-rose-500 bg-white border-b-4 border-rose-300 -mb-0.5': activeTabIndex === index,
            'pointer-events-none': loadingTabs.has(tab.id)
          }
        ]"
        :aria-selected="activeTabIndex === index"
        :aria-controls="`tabpanel-${tab.id}`"
        :id="`tab-${tab.id}`"
        role="tab"
        @click="selectTab(index)"
        :disabled="tab.disabled"
        style="font-family: 'Roboto', sans-serif;"
      >
        <span>{{ tab.title }}</span>
        <div v-if="loadingTabs.has(tab.id)" class="flex items-center">
          <div class="w-3.5 h-3.5 border-2 border-gray-200 border-t-rose-600 rounded-full spinner"></div>
        </div>
      </button>
    </div>

    <!-- Tab Content -->
    <div class="bg-white min-h-[200px]">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.id"
        v-show="activeTabIndex === index"
        :id="`tabpanel-${tab.id}`"
        :aria-labelledby="`tab-${tab.id}`"
        role="tabpanel"
        class="tab-pane"
      >
        <div 
          v-if="loadingTabs.has(tab.id)" 
          class="flex flex-col items-center justify-center py-15 px-5 text-gray-500"
        >
          <div class="w-8 h-8 border-3 border-gray-200 border-t-rose-600 rounded-full loading-spinner mb-4"></div>
          <p class="text-sm m-0">{{ tab.loadingText || 'Loading...' }}</p>
        </div>

        <div v-else-if="loadedTabs.has(tab.id)" class="tab-content-wrapper">
          <slot :name="tab.id" :tab="tab" :isActive="activeTabIndex === index">
            <div v-html="tab.content"></div>
          </slot>
        </div>

        <div 
          v-else-if="errorTabs.has(tab.id)" 
          class="flex flex-col items-center justify-center py-15 px-5 text-red-600 text-center"
        >
          <div class="text-5xl mb-4">⚠️</div>
          <p class="text-sm m-0 mb-4 max-w-xs">{{ getTabError(tab.id) }}</p>
          <button 
            @click="retryLoadTab(tab.id)" 
            class="px-4 py-2 bg-blue-600 text-white border-0 rounded-md text-sm cursor-pointer transition-colors duration-200 hover:bg-blue-700"
          >
            Coba Lagi
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const props = defineProps({
  tabs: {
    type: Array,
    required: true,
    validator: (tabs) => {
      return tabs.every(tab => 
        tab.id && 
        tab.title && 
        (tab.content || tab.loader || tab.component || tab.useSlot)
      )
    }
  },
  defaultTab: {
    type: [String, Number],
    default: 0
  },
  lazy: {
    type: Boolean,
    default: true
  },
  preloadAdjacent: {
    type: Boolean,
    default: false
  },
  loadingDelay: {
    type: Number,
    default: 300
  }
})

const emit = defineEmits([
  'tab-change',
  'tab-load-start',
  'tab-load-end',
  'tab-load-error'
])

const activeTabIndex = ref(0)
const loadedTabs = ref(new Set())
const loadingTabs = ref(new Set())
const errorTabs = ref(new Set())
const tabErrors = ref(new Map())

const activeTab = computed(() => props.tabs[activeTabIndex.value])

const selectTab = async (index) => {
  if (index === activeTabIndex.value) return
  
  const previousIndex = activeTabIndex.value
  activeTabIndex.value = index
  
  const tab = props.tabs[index]
  
  emit('tab-change', {
    tab,
    index,
    previousIndex,
    previousTab: props.tabs[previousIndex]
  })
  
  if (props.lazy && !loadedTabs.value.has(tab.id)) {
    await loadTab(tab.id)
  }
  
  if (props.preloadAdjacent) {
    preloadAdjacentTabs(index)
  }
}

const loadTab = async (tabId) => {
  const tab = props.tabs.find(t => t.id === tabId)
  if (!tab || loadedTabs.value.has(tabId) || loadingTabs.value.has(tabId)) {
    return
  }
  
  try {
    loadingTabs.value.add(tabId)
    errorTabs.value.delete(tabId)
    
    emit('tab-load-start', { tab, tabId })
    
    const startTime = Date.now()
    
    if (tab.loader && typeof tab.loader === 'function') {
      await tab.loader()
    } else if (tab.asyncComponent) {
      await tab.asyncComponent()
    }
    
    const elapsedTime = Date.now() - startTime
    if (elapsedTime < props.loadingDelay) {
      await new Promise(resolve => 
        setTimeout(resolve, props.loadingDelay - elapsedTime)
      )
    }
    
    loadedTabs.value.add(tabId)
    emit('tab-load-end', { tab, tabId })
    
  } catch (error) {
    console.error(`Error loading tab ${tabId}:`, error)
    errorTabs.value.add(tabId)
    tabErrors.value.set(tabId, error.message || 'Gagal memuat konten')
    
    emit('tab-load-error', { tab, tabId, error })
  } finally {
    loadingTabs.value.delete(tabId)
  }
}

const retryLoadTab = (tabId) => {
  errorTabs.value.delete(tabId)
  tabErrors.value.delete(tabId)
  loadTab(tabId)
}

const getTabError = (tabId) => {
  return tabErrors.value.get(tabId) || 'Terjadi kesalahan'
}

const preloadAdjacentTabs = (currentIndex) => {
  const adjacentIndices = [currentIndex - 1, currentIndex + 1]
    .filter(index => index >= 0 && index < props.tabs.length)
  
  adjacentIndices.forEach(index => {
    const tab = props.tabs[index]
    if (!loadedTabs.value.has(tab.id)) {
      loadTab(tab.id)
    }
  })
}

const initializeDefaultTab = () => {
  let defaultIndex = 0
  
  if (typeof props.defaultTab === 'string') {
    const foundIndex = props.tabs.findIndex(tab => tab.id === props.defaultTab)
    if (foundIndex !== -1) {
      defaultIndex = foundIndex
    }
  } else if (typeof props.defaultTab === 'number') {
    if (props.defaultTab >= 0 && props.defaultTab < props.tabs.length) {
      defaultIndex = props.defaultTab
    }
  }
  
  activeTabIndex.value = defaultIndex
}

const activateTab = (tabIdOrIndex) => {
  let index
  if (typeof tabIdOrIndex === 'string') {
    index = props.tabs.findIndex(tab => tab.id === tabIdOrIndex)
  } else {
    index = tabIdOrIndex
  }
  
  if (index >= 0 && index < props.tabs.length) {
    selectTab(index)
  }
}

const preloadTab = (tabIdOrIndex) => {
  let tabId
  if (typeof tabIdOrIndex === 'string') {
    tabId = tabIdOrIndex
  } else {
    const tab = props.tabs[tabIdOrIndex]
    tabId = tab?.id
  }
  
  if (tabId) {
    loadTab(tabId)
  }
}

const isTabLoaded = (tabIdOrIndex) => {
  let tabId
  if (typeof tabIdOrIndex === 'string') {
    tabId = tabIdOrIndex
  } else {
    const tab = props.tabs[tabIdOrIndex]
    tabId = tab?.id
  }
  
  return tabId ? loadedTabs.value.has(tabId) : false
}

defineExpose({
  activateTab,
  preloadTab,
  isTabLoaded,
  activeTabIndex: computed(() => activeTabIndex.value),
  activeTab
})

onMounted(async () => {
  initializeDefaultTab()
  
  const initialTab = props.tabs[activeTabIndex.value]
  if (initialTab && (!props.lazy || activeTabIndex.value === 0)) {
    await loadTab(initialTab.id)
  }
})

watch(() => props.tabs, () => {
  loadedTabs.value.clear()
  loadingTabs.value.clear()
  errorTabs.value.clear()
  tabErrors.value.clear()
  
  // Reinitialize
  initializeDefaultTab()
}, { deep: true })
</script>

<style scoped>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.spinner {
  animation: spin 1s linear infinite;
}

.loading-spinner {
  animation: spin 1s linear infinite;
}

.tab-pane {
  animation: fadeIn 0.3s ease-in-out;
}

.tab-content-wrapper {
  animation: slideIn 0.3s ease-out;
}
</style>