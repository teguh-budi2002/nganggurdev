<template>
  <div>
    <nav 
      class="fixed top-0 w-full lg:h-20 h-fit py-4 lg:px-10 px-6 flex items-center justify-between transition-all bg-rose-100 dark:bg-slate-800 duration-500 ease-in-out z-50"
      :class="{ 'hide-navbar': isNavbarHidden }"
      
    >
      <div class="flex items-center justify-between xl:w-2/7 w-2/4">
        <img src="/assets/images/logo/logo-no-bg.webp" class="w-8 h-8 lg:block hidden" loading="eager" alt="logo">
        <!-- <div class="lg:block hidden"><p>NganggurDev</p></div> -->
        <div class="space-x-4 lg:block hidden">
          <Link :href="`/${locale}`" @click="resetState" class="font-['Roboto'] font-semibold hover:text-amber-600 dark:hover:text-white transition-colors duration-300 ease-in-out" :class="{ 'text-amber-600 dark:text-white' : page.component === 'Home', 'text-slate-600 dark:text-slate-400' : page.component !== 'Home' }">{{ $t('navigation.section.1') }}</Link>
          <Link :href="route('articles.index', { locale })" @click="resetState" class=" font-['Roboto'] font-semibold hover:text-amber-600 dark:hover:text-white transition-colors duration-300 ease-in-out" :class="{ 'text-amber-600 dark:text-white' : page.component === 'Article/Index', 'text-slate-600 dark:text-slate-400' : page.component !== 'Article/Index' }">{{ $t('navigation.section.2') }}</Link>
          <Link :href="route('about-us', { locale })" @click="resetState" class=" font-['Roboto'] font-semibold hover:text-amber-600 dark:hover:text-white transition-colors duration-300 ease-in-out" :class="{ 'text-amber-600 dark:text-white' : page.component === 'AboutUs', 'text-slate-600 dark:text-slate-400' : page.component !== 'AboutUs' }">{{ $t('navigation.section.9') }}</Link>
          <!-- <Link :href="route('shop', { locale })" @click="resetState" class="font-['Roboto'] font-semibold hover:text-amber-600 dark:hover:text-white transition-colors duration-300 ease-in-out" :class="{ 'text-amber-600 dark:text-white' : page.component === 'Product/Index', 'text-slate-600 dark:text-slate-400' : page.component !== 'Product/Index' }">{{ $t('navigation.section.5') }}</Link> -->
        </div>
        <!-- Button Nav Mobile -->
         <button class="lg:hidden block cursor-pointer" :class="{'hidden' : openSidebar}" @click.prevent="openSidebar = true" v-if="!openSearchModal" aria-label="Open Sidebar">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 dark:text-slate-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         </button>
         <button @click="openSearchModal = false" class="lg:hidden block cursor-pointer" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 dark:text-slate-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <!-- Logo Mobile Display -->
        <img src="/assets/images/logo/logo-no-bg.webp" class="w-8 h-8 lg:hidden block" :class="{ 'hidden': openSidebar }" loading="eager" alt="logo">
      </div>
      <div class="flex items-center space-x-3">
        <div class="flex items-center md:space-x-2 space-x-0 cursor-pointer" 
          @click="openedSearchModal">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-5 text-rose-600 dark:text-slate-100">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <div class="shadow-lg md:block hidden">
            <div class="p-1.5 bg-rose-500 dark:bg-slate-500 rounded-md shadow-md">
              <p class="font-['Bebas_Neue'] text-xs text-white">Ctrl + K</p>
            </div>
          </div>
        </div>
        <div class="cursor-pointer">
          <img  v-if="locale === 'id'" @click.prevent="switchLanguage('en')" src="/assets/images/icon/indonesian.svg" loading="eager" class="w-5 h-5" alt="flag country">
          <img  v-else-if="locale === 'en'" @click.prevent="switchLanguage('id')" loading="eager" src="/assets/images/icon/uk.svg" class="w-5 h-5" alt="flag country">
        </div>
        <button 
         type="button" 
         @click="toggleThemes" 
          class="cursor-pointer"
        >
          <img  
           :src="currentTheme === 'dark' ? '/assets/images/icon/sun.svg' : '/assets/images/icon/moon.svg'" 
           class="w-6 h-6"
           :alt="currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
          >
        </button>
      </div>
    </nav>
    <!-- Sidebar Mobile -->
    <Transition name="slide-fade-up" mode="out-in">
      <div class="lg:hidden fixed top-0 left-0 w-full h-full min-h-screen py-5 px-6 bg-rose-100 dark:bg-slate-800 z-999" v-show="openSidebar">
        <div class="flex items-center justify-between">
          <button @click="openSidebar = false" class="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 dark:text-slate-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-2 cursor-pointer" 
              @click="openedSearchModal">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-5 text-rose-600 dark:text-slate-100">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <div class="cursor-pointer">
                <img  v-if="locale === 'id'" @click.prevent="switchLanguage('en')" src="/assets/images/icon/indonesian.svg" class="w-5 h-5" alt="flag country">
                <img  v-else-if="locale === 'en'" @click.prevent="switchLanguage('id')" src="/assets/images/icon/uk.svg" class="w-5 h-5" alt="flag country">
            </div>
            <button 
            type="button" 
            @click="toggleThemes" 
              class="cursor-pointer"
            >
              <img  
              :src="currentTheme === 'dark' ? '/assets/images/icon/sun.svg' : '/assets/images/icon/moon.svg'" 
              class="w-6 h-6"
              :alt="currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
              >
            </button>
          </div>
        </div>
        <div class="w-full h-full flex flex-col items-center space-y-8 mt-12">
          <Link :href="`/${locale}`" @click="resetState" class="font-['Roboto'] font-semibold text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-slate-400 transition-colors duration-300 ease-in-out text-5xl">{{ $t('navigation.section.1') }}</Link>
          <Link :href="route('articles.index', { locale })" @click="resetState" class="font-['Roboto'] text-slate-600 dark:text-slate-300 font-semibold hover:text-amber-600 dark:hover:text-slate-400 transition-colors duration-300 ease-in-out text-5xl">{{ $t('navigation.section.2') }}</Link>
          <Link :href="route('about-us', { locale })" @click="resetState" class="font-['Roboto'] text-slate-600 dark:text-slate-300 font-semibold hover:text-amber-600 dark:hover:text-slate-400 transition-colors duration-300 ease-in-out text-5xl">{{ $t('navigation.section.9') }}</Link>
        </div>
      </div>
    </Transition>
    <Teleport to="body">
      <div class="search-modal" v-if="openSearchModal" @click.self="openSearchModal = false" @keydown.esc="openSearchModal = false">
        <div class="fixed top-0 left-0 w-full h-full bg-rose-100 dark:bg-slate-800 z-40"></div>
        <div class="lg:w-2/4 w-11/12 h-fit p-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white z-50 rounded-lg">
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4 text-slate-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input type="text" class="w-full h-10 px-2 font-['Roboto'] placeholder:font-['Roboto'] outline-none border-none focus:outline-none focus:ring-0" :placeholder="$t('search.placeholder')" v-model="searchQuery" ref="inputSearchRef" @focus="ensureFocus" />
            <div class="p-0.5 border border-slate-300 shadow-xs rounded cursor-pointer" @click.prevent="openSearchModal = false">
              <p class="font-['Roboto'] text-xs text-slate-700">esc</p>
            </div>
          </div>
          <Transition name="slide-fade" mode="out-in">
            <div class="w-full max-h-44 overflow-auto custom-scroll" v-show="searchResults.length > 0 && !isLoading">
              <template v-for="result in searchResults" :key="result.id">
                <Link :href="`/${locale}/article/${result.slug}`" @click="resetState" class="mt-2 block w-full font-['Roboto'] capitalize font-medium text-slate-600 hover:text-rose-600 transition-colors duration-150">{{ result.title }}</Link>
              </template>
            </div>
          </Transition>
          <div class="w-full justify-center items-center" v-if="isLoading">
            <DotLottieVue 
              src="https://lottie.host/5897829e-ef3c-4c0d-af9a-55b8b008ce15/hce1cW9eCh.lottie" 
              class="w-32 h-32 mx-auto"
              autoplay
              loop
              loading="eager"
            />
          </div>
          <div v-if="hasSearched && searchResults.length === 0 && !isLoading" class="text-center mt-4" aria-live="polite">
            <p class="font-['Roboto'] text-sm italic text-slate-600">{{ $t('search.no_results') }}</p>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
import { Link, router, usePage } from '@inertiajs/vue3'
import { loadLanguageAsync } from 'laravel-vue-i18n';
import axios from 'axios';
import { debounce } from '@/utils/debounce';
import { DotLottieVue } from '@lottiefiles/dotlottie-vue';

const scrollY = ref(0);
const lastScrollTop = ref(0);
const isNavbarHidden = ref(false);
const openSidebar = ref(false);
const openSearchModal = ref(false);
const page = usePage();
const locale = ref(page.props.locale);
const inputSearchRef = ref(null);
const searchQuery = ref('');
const searchResults = ref([]);
const isLoading = ref(false);
const hasSearched = ref(false);
const currentTheme = ref('light')

const handleNavigation = () => {
  scrollY.value = window.scrollY;
  if (scrollY.value > lastScrollTop.value && scrollY.value > 100) {
    isNavbarHidden.value = true;
  } else if (scrollY.value < lastScrollTop.value) {
    isNavbarHidden.value = false;
  }
  lastScrollTop.value = scrollY.value;
}

const switchLanguage = async (newLocale) => {
  await loadLanguageAsync(newLocale);

  if (route().current('article.show')) {
    const articleSlug = page.props.slug;
    const response = await axios.get(`/${newLocale}/get-article-slug/${articleSlug}`)
    const newSlug = await response.data.slug;

    router.post(`/${newLocale}/set-locale`, 
      { locale: newLocale }, 
      { 
        preserveState: false, 
        preserveScroll: true,
        onSuccess: () => {
          locale.value = newLocale;
          openSidebar.value = false;
          openSearchModal.value = false;

          router.visit(route('article.show', { locale: newLocale, slug: newSlug }), {
            preserveState: false,
            preserveScroll: true,
          });
        }
      }
    );
  } else if(route().current('list-article-of-series.index')) {
    const articleSeriesSlug = page.props.slug;
    const response = await axios.get(`/${newLocale}/get-article-series-slug/${articleSeriesSlug}`)
    const newSlug = await response.data.slug;

    router.post(`/${newLocale}/set-locale`, 
      { locale: newLocale }, 
      { 
        preserveState: false, 
        preserveScroll: true,
        onSuccess: () => {
          locale.value = newLocale;
          openSidebar.value = false;
          openSearchModal.value = false; 

          router.visit(route('list-article-of-series.index', { locale: newLocale, slug: newSlug }), {
            preserveState: false,
            preserveScroll: true
          });
        }
      }
    );

  } else {
    const currentUrl = page.url;
    const pathWithoutLocale = currentUrl.replace(/^\/(id|en)/, '');
    const newUrl = `/${newLocale}${pathWithoutLocale}`;
    
    router.post(`/${newLocale}/set-locale`, 
      { locale: newLocale }, 
      { 
        preserveState: false, 
        preserveScroll: true,
        onSuccess: () => {
          locale.value = newLocale;
          openSidebar.value = false;
          openSearchModal.value = false; 

          router.visit(newUrl, {
            preserveState: false,
            preserveScroll: true
          });
        }
      }
    );
  }
}

const searchArticle = debounce(async (searchQuery) => {
  if (!searchQuery || searchQuery.length < 3) {
    searchResults.value = [];
    hasSearched.value = false;
    isLoading.value = false;
    return;
  }
  
  hasSearched.value = true;
  isLoading.value = true;
  try {
    const response = await axios.get(`/${locale.value}/search-article`, {
      params: { searchQuery }
    });
    const results = response.data;

    setTimeout(() => {
      if (results.length > 0) {
        searchResults.value = results;
      } else {
        searchResults.value = [];
      }
      hasSearched.value = true;
      isLoading.value = false;
    }, 1000);

  } catch (error) {
    searchResults.value = [];
    hasSearched.value = true;
    isLoading.value = false;
    console.error('Error fetching search results:', error);
  }
}, 500);

watch(searchQuery, (newQuery) => {
  searchArticle(newQuery.trim());
});

const handleKeydown = (event) => {
  if (event.ctrlKey && event.key === 'k') {
    event.preventDefault();
    openSearchModal.value = true;
    
    nextTick(() => {
      if (inputSearchRef.value) {
        inputSearchRef.value.focus();
      }
    });
  }
};

const openedSearchModal = () => {
  openSearchModal.value = true;
  openSidebar.value = false;
  nextTick(() => {
    if (inputSearchRef.value) {
      inputSearchRef.value.focus();
    }
  });
}

const resetState = () => {
  openSearchModal.value = false;
  openSidebar.value = false;
  searchQuery.value = '';
  searchResults.value = [];
  isLoading.value = false;
  hasSearched.value = false;
}

const ensureFocus = () => {
  nextTick(() => {
    if (inputSearchRef.value) {
      inputSearchRef.value.focus();
    }
  });
}

const getSystemTheme = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  // document.documentElement.classList.toggle('dark', theme === 'dark')
  currentTheme.value = theme
}

const toggleThemes = () => {
  console.log('Toggle themes');
  // const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme.value === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  localStorage.setItem('theme', newTheme);
}

const initialLoadTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  let initialTheme
  if (savedTheme) {
    initialTheme = savedTheme
  } else {
    initialTheme = getSystemTheme()
  }
  
  applyTheme(initialTheme)
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemThemeChange = (e) => {
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light')
    }
  }
  
  mediaQuery.addEventListener('change', handleSystemThemeChange)
  
  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleSystemThemeChange)
  })
 }

onMounted(() => {
  window.addEventListener('scroll', handleNavigation);
  window.addEventListener('keydown', handleKeydown);
  initialLoadTheme();
})
</script>

<style scoped>
.hide-navbar {
  transform: translateY(-100%);
}

/* Slide Fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Slide Fade Up Animation */
.slide-fade-up-enter-active,
.slide-fade-up-leave-active {
  transition: all 0.4s ease-in-out;
}

.slide-fade-up-enter-from {
  opacity: 0.8;
  transform: translateY(-100%);
}

.slide-fade-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.slide-fade-up-leave-to {
  opacity: 0.8;
  transform: translateY(-100%);
}


</style>