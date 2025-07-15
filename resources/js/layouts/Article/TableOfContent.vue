<template>
<div class="w-full h-fit shadow rounded-md bg-white border border-slate-100 p-6">
  <div class="header_table_of_content flex items-center space-x-2">
    <img src="/assets/images/icon/table-of-contents.svg" alt="table of content icon" class="w-5 h-5">
    <p class="font-['Roboto'] font-semibold text-slate-600">Table of Content</p>
  </div>
  <div class="mt-4 border-t border-slate-200 pt-2">
    <div class="flex flex-col space-y-3">
      <template v-for="item in toc" :key="item.id">
        <div class="flex items-center space-x-3" v-if="item.level !== 'p'">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
          <a 
            :href="`#${item.id}`"
            @click.prevent="scrollToSection(item.id)" 
            class="text-sm leading-snug font-['Roboto'] hover:text-rose-600 transition-colors duration-150"
            :class="{ 'text-rose-600 font-semibold': activeSection === item.id }"
          >
            {{ item.text }}
          </a>
        </div>
        <div v-else class="text-sm text-slate-600 italic text-center">
          {{ item.text }}
        </div>
      </template>
    </div>
  </div>
</div>
</template>
<script setup>
import { defineProps, onUnmounted, ref, watch } from 'vue';

const props = defineProps({
  contentRef: {
    type: Object,
    required: false
  }
});

const toc = ref([]);
const activeSection = ref('');
let observer = null;

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

watch(() => props.contentRef, (newContentElement) => {
  if (newContentElement) {
    if (observer) {
      observer.disconnect();
    }

    const headings = newContentElement.querySelectorAll('h1, h2');
    const tocItems = [];

    if (headings.length === 0) {
      toc.value.push({
        id: 'no-headings',
        text: 'No headings found',
        level: 'p'
      });
      return
    }

    headings.forEach((heading, index) => {
      const id = `section-${index}`;
      heading.id = id;

      tocItems.push({
        id,
        text: heading.textContent,
        level: heading.tagName.toLowerCase()
      });
    });

    toc.value = tocItems;

    if (headings.length > 0) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              activeSection.value = entry.target.id;
            }
          });
        },
        { 
          rootMargin: '0px 0px -80% 0px',
          threshold: 0.5
        }
      );

      headings.forEach((heading) => observer.observe(heading));
    }
  }
}, {
  immediate: true,
  flush: 'post'
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
