<template>
  <Head>
    <title>{{ articleSeries.title }}</title>
    <meta name="description" :content="articleSeries.meta_description">
    <meta property="og:title" :content="articleSeries.title">
    <meta property="og:description" :content="articleSeries.meta_description">
    <meta property="og:image" :content="`/storage/${articleSeries.image}`">
  </Head>
<div class="w-full h-full min-h-screen overflow-x-hidden">
  <div class="w-full lg:h-64 h-260 lg:bg-rose-600 bg-rose-100 relative">
    <div class="w-full h-full absolute transform lg:translate-x-28 lg:translate-y-1/2 translate-y-1/10">
      <div class="flex lg:flex-row flex-col items-start space-x-6 ">
        <div class="lg:w-fit w-full">
          <img :src="`/storage/${articleSeries.image}`" class="lg:w-80 w-90 lg:h-58 h-full object-cover object-top border-4 border-white rounded-xl shadow-xl mx-auto" alt="article series image">
        </div>
        <div class="lg:w-2/3 w-10/12 flex flex-col lg:mt-0 mt-8 lg:mx-0 mx-6">
          <div class="lg:space-y-4 space-y-2">
            <p class="text-3xl font-['Roboto'] font-extrabold lg:text-white text-slate-600 tracking-wide">{{ articleSeries.title }}</p>
            <!-- Max 202 Chars -->
            <p class="text-sm font-['Roboto'] first-letter:uppercase lg:text-gray-50 text-slate-600">{{ articleSeries.description }}</p>
          </div>
          <div class="lg:mt-12 mt-5 flex items-center space-x-4">
            <div class="flex items-center space-x-2">
              <div class="bg-linear-to-r/oklch from-rose-600 to-rose-300 p-2 rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
              </div>
              <p class="text-sm font-['Open_Sans'] text-slate-600 font-normal uppercase"><span class="font-bold">{{ articleSeries.articles.length }}</span> Tutorial</p>
            </div>
            <div class="flex items-center space-x-2">
              <div class="bg-linear-to-r/oklch from-rose-600 to-rose-300 p-2 rounded-lg shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                </svg>
              </div>
              <p class="text-sm font-['Open_Sans'] text-slate-600 font-normal uppercase">{{ articleSeries.difficult_level }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="list_related_article w-full h-full flex justify-center lg:mt-40 mt-10">
    <div class="lg:w-3/4 w-11/12 p-4 px-4 bg-rose-300 rounded-xl lg:shadow-xl shadow">
      <div class="tab_header cursor-pointer flex items-center space-x-2 bg-white w-fit p-2 border-b-4 border-rose-600 rounded-t-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        <p class="font-['Roboto'] uppercase font-light">Tutorial</p>
      </div>
      <template v-for="article in articleSeries.articles" :key="article.id">
        <div class="mt-4 bg-white rounded-md py-1 px-4">
          <Link :href="route('article.show', { locale, slug: article.slug })" class="flex items-center space-x-3 w-fit group">
            <div class="rounded-full bg-rose-400 group-hover:bg-white transition-colors duration-200 ease-in p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-white group-hover:text-rose-600 transition-colors duration-200 ease-in">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
            </div>
            <!-- Max 152 Chars -->
            <p class="text-sm font-['Open_Sans'] group-hover:text-rose-600 transition-colors duration-200 ease-in">{{ truncate(article.title, 152) }}</p>
          </Link>
        </div>
      </template>
    </div>
  </div>
</div>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { ref } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import { truncate } from '@/utils/truncate';

defineOptions({
  layout: AppLayout,
  inheritAttrs: false,
})

const props = defineProps({
  articleSeries: {
    type: Object,
    required: true,
  },
  locale: {
    type: String,
    required: true,
  },
});

const articleSeries = ref(props.articleSeries)
const locale = ref(props.locale);
</script>