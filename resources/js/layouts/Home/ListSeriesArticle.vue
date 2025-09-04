<template>
  <section class="w-full h-full mt-5">
    <div class="flex items-center justify-center">
      <div class="w-11/12 h-full">
        <div>
          <p class="md:text-start text-center md:text-5xl text-3xl font-['Bebas_Neue'] font-bold text-slate-600 dark:text-slate-500 tracking-wider" v-html="$t('home.series_article')"></p>
          <p class="md:text-start text-center font-['Roboto'] md:text-base text-sm font- dark:text-slate-300">{{ $t('collection.series_article') }}</p>
        </div>
        <div class="articles grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-8 mb-10" v-if="articleSeries.length > 0">
          <template v-for="series in articleSeries" :key="series.id">
            <div class="w-full h-fit hover:shadow-md transition-shadow duration-300 shadow">
              <Link :href="route('list-article-of-series.index', { locale, slug: series.slug })" class="block">
                <img :src="`/storage/${series.image}`" :alt="series.title" class="w-full h-full cursor-pointer rounded-t-xl">
              </Link>
              <div class="px-4 py-4 h-40 flex flex-col items-center justify-between border-l border-r border-b border-slate-100 dark:border-slate-600 rounded-b-xl dark:bg-slate-800">
                <Link :href="route('list-article-of-series.index', { locale, slug: series.slug })" class="font-['Inter'] font-bold text-lg text-slate-600 hover:text-sky-700 dark:text-slate-300 dark:hover:text-slate-500 transition-colors duration-300 cursor-pointer tracking-wide">{{ series.title }}</Link>
                <Link :href="route('list-article-of-series.index', { locale, slug: series.slug })" class="w-full bg-rose-800 hover:bg-rose-700 dark:bg-slate-600 dark:hover:bg-slate-700 transition-colors duration-150 py-1 rounded-md text-center">
                  <span class="text-white font-['Roboto'] font-bold">{{ $t('start_learning') }}</span>
                </Link>
              </div>
            </div>
          </template>
        </div>
        <div class="flex justify-center w-full" v-else>
          <img src="/assets/images/article-not-found.webp" alt="article not found" class="w-96 mx-auto h-auto">
        </div>
      </div>
    </div>
  </section>
  </template>
  
  <script setup>
  import { Link, usePage } from '@inertiajs/vue3';
  import { defineProps, ref } from 'vue';
  
  const props = defineProps({
    articleSeries: {
      type: Array,
      default: () => []
    }
  });
  const { locale } = usePage().props;
  const articleSeries = ref(props.articleSeries);
  </script>
  <style scoped>
  img[lazy=loading] {
    width: 100%;
    height: 215px;
  }
  </style>