<template>
<div class="lg:col-span-3 bg-white dark:bg-slate-900 lg:p-4">
  <div class="">
    <div>
      <p class="sm:text-4xl text-3xl font-inter text-slate-600 dark:text-slate-100 font-semibold sm:text-center text-start sm:leading-12 leading-10 capitalize">{{ props.article.title }}</p>
      <div class="flex sm:justify-center justify-start items-center space-x-4 mt-5">
        <template v-for="category in props.article.categories" :key="category.id">
          <img :src="`/storage/${category.img_category}`" class="sm:w-8 sm:h-8 w-6 h-6" alt="logo icon">
        </template>
      </div>
    </div>
    <div class="flex items-center space-x-2 border-t border-slate-200 dark:border-slate-500 pt-2 mt-4">
      <p class="text-sm font-['Roboto'] font-semibold text-slate-600 dark:text-slate-300">{{ props.article.author.name }}</p>
      <p class="text-slate-600 dark:text-slate-300">-</p>
      <p class="text-sm font-['Roboto'] font-light text-slate-800 dark:text-slate-300">{{ props.article.published_at }}</p>
    </div>
    <div class="image_article mt-5 mb-5">
      <img :src="`/storage/${article.image}`" class="w-full h-full rounded-lg" alt="iamge article">
    </div>
    <article class="prose prose-neutral max-w-none content md:mt-5 mt-8 font-inter font-light text-slate-600 dark:text-slate-300 tracking-tight" ref="contentRef" v-html="article.content">
    </article>
  </div>
  <div class="tags mt-10">
    <div class="flex items-center flex-wrap space-y-2 space-x-2">
      <p class="font-bold text-slate-600 dark:text-slate-300">Tags :</p>
      <template v-for="tag in article.tags">
        <div class="text-xs font-['Roboto'] font-semibold bg-rose-500 dark:bg-slate-600 text-white px-2 py-1 rounded">
          <p>{{ tag }}</p>
        </div>
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

const enhanceCodeBlocks = () => {
  const blocks = contentRef.value.querySelectorAll('pre');

  blocks.forEach((pre) => {
    if (pre.parentElement.classList.contains('code-wrapper')) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'code-wrapper relative';

    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    const button = document.createElement('button');
    button.innerText = 'Copy';
    button.className =
      'copy-btn cursor-pointer absolute top-2 right-2 bg-slate-500 text-white text-xs px-2 py-1 rounded-tr-lg hover:bg-slate-600 transition';

    button.onclick = () => {
      const code = pre.innerText;
      navigator.clipboard.writeText(code);
      button.innerText = '✅ Copied!';
      setTimeout(() => (button.innerText = 'Copy'), 1000);
    };

    wrapper.appendChild(button);
  });
};

onMounted(async () => {
  await nextTick();
  enhanceCodeBlocks();
});
</script>
<style>
@reference "tailwindcss";

.content h1 {
  @apply text-2xl font-semibold mt-5 mb-5 tracking-tighter;
  color: theme('colors.slate.600');
  
  [data-theme=dark] & {
    color: theme('colors.slate.100');
  }
}


.content h2 {
  @apply text-xl font-semibold mt-5 mb-5;
  color: theme('colors.slate.600');
  
  [data-theme=dark] & {
    color: theme('colors.slate.300');
  }
}

.content p {
  @apply text-lg my-4 leading-relaxed;
}

.content pre {
  @apply relative p-4 rounded-md overflow-auto;
}

.content a {
  @apply text-blue-600 hover:text-blue-500 transition-colors duration-150 no-underline;
}

.content .blocktext {
  @apply py-1.5 px-1.5 rounded shadow-sm w-fit;
  background-color: theme('colors.gray.50');
  
  [data-theme=dark] & {
    background-color: theme('colors.rose.50');
    border: 1px solid theme('colors.rose.400');
  }
}

.content .blocktext {
  @apply text-rose-700 font-normal;
  color: theme('colors.rose.600');
  
  [data-theme=dark] & {
    color: theme('colors.rose.700');
  }
}

.content strong {
  @apply font-semibold;
  color: theme('colors.slate.600');
  
  [data-theme=dark] & {
    color: theme('colors.slate.300');
  }
}

.content .code-wrapper {  
  [data-theme=dark] & {
    background-color: theme('colors.gray.800');
  }
}

.content pre {
  @apply m-0 rounded-xl;
  
  [data-theme=dark] & {
    background-color: theme('colors.slate.700') !important;
  }
}


code.blocktext::before,
code.blocktext::after {
    content: none !important;
}

code.text-red::before,
code.text-red::after {
    content: none !important;
}

code.text-blue::before,
code.text-blue::after {
    content: none !important;
}

.text-red {
  @apply text-lg text-rose-600 font-normal;
}

.text-blue {
  @apply text-blue-600;
}

.content img {
  @apply max-w-full h-auto rounded-lg shadow-sm;
}
</style>