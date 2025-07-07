<template>
<div class="lg:col-span-3 bg-white lg:p-4">
  <div class="">
    <div>
      <p class="sm:text-4xl text-3xl font-['Inter'] text-slate-700 font-bold sm:text-center text-start capitalize">{{ props.article.title }}</p>
      <div class="flex sm:justify-center justify-start items-center space-x-4 mt-5">
        <template v-for="category in props.article.categories" :key="category.id">
          <img :src="`/storage/${category.img_category}`" class="sm:w-8 sm:h-8 w-6 h-6" alt="logo icon">
        </template>
      </div>
    </div>
    <div class="flex items-center space-x-2 border-t border-slate-200 pt-2 mt-4">
      <p class="text-sm font-['Roboto'] font-semibold text-slate-600">{{ props.article.author.name }}</p>
      <p>-</p>
      <p class="text-sm font-['Roboto'] font-light">{{ props.article.published_at }}</p>
    </div>
    <div class="image_article mt-5 mb-5">
      <img :src="`/storage/${article.image}`" class="w-full h-full rounded-lg" alt="iamge article">
    </div>
    <div class="prose max-w-none content text-justify md:mt-5 mt-8 font-['Inter'] font-normal text-slate-600 leading-relaxed" ref="contentRef" v-html="renderedContent">
    </div>
  </div>
  <div class="tags mt-10">
    <div class="flex items-center space-x-2">
      <p class="font-bold text-slate-600">Tags :</p>
      <template v-for="tag in article.tags">
        <span class="text-xs font-['Roboto'] font-semibold bg-rose-500 text-white px-2 py-1 rounded">{{ tag }}</span>
      </template>
    </div>
  </div>
</div>
</template>
<script setup>
import { defineProps, ref, onMounted, nextTick } from 'vue';

const props = defineProps({
  article: Object,
});

const contentRef = ref(null);
const renderedContent = ref('');

const generateContentWithIds = () => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(props.article.content, 'text/html');
  const headings = doc.querySelectorAll('h1, h2');

  headings.forEach((heading, index) => {
    const id = `section-${index}`;
    heading.setAttribute('id', id);
  });

  renderedContent.value = doc.body.innerHTML;
};

const enhanceCodeBlocks = () => {
  const blocks = contentRef.value.querySelectorAll('pre');

  blocks.forEach((block) => {
    if (block.querySelector('.copy-btn')) return;

    const button = document.createElement('button');
    button.innerText = 'Copy';
    button.className = 'copy-btn absolute top-2 right-2 bg-slate-500 text-white text-xs px-2 py-1 rounded hover:bg-slate-600 transition';
    button.onclick = () => {
      const code = block.innerText;
      navigator.clipboard.writeText(code);
      button.innerText = '✅ Copied!';
      setTimeout(() => (button.innerText = 'Copy'), 1000);
    };

    block.classList.add('relative', 'rounded', 'overflow-hidden');
    block.appendChild(button);
  });
};


defineExpose({ contentRef });

onMounted(async () => {
  generateContentWithIds();

  await nextTick()
  enhanceCodeBlocks();
});
</script>
<style>
@reference "tailwindcss";

h1 {
  @apply text-4xl font-bold mt-4 mb-4;
}

h2 {
  @apply text-3xl font-semibold mt-2 mb-2;
}

pre {
  @apply relative p-4 rounded-md overflow-auto;
}

.content a {
  @apply text-blue-600 hover:text-blue-500 transition-colors duration-150 no-underline;
}
</style>