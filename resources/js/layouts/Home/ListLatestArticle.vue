<template>
  <section class="w-full h-full mt-5">
    <div class="flex items-center justify-center">
      <div class="w-11/12 h-full">
        <div>
          <p class="md:text-start text-center md:text-5xl text-3xl font-['Bebas_Neue'] font-bold text-slate-600 dark:text-slate-500 tracking-wider" v-html="$t('home.latest_article')"></p>
        </div>
        <p class="md:text-start text-center font-['Roboto'] md:text-base text-sm font-light dark:text-slate-300">{{ $t('collection.latest_article') }}</p>
        <div class="articles grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 md:mt-10 mt-8 mb-10" v-if="articles.length > 0">
          <template v-for="article in articles" :key="article.id">
            <div class="w-full h-fit hover:shadow-xl transition-shadow duration-300 shadow-sm">
              <Link :href="route('article.show', { locale: locale, slug: article.slug })">
                <img v-lazy="`/storage/${article.image}`" alt="article image" class="w-full h-full cursor-pointer rounded-t-lg">
              </Link>
              <div class="px-4 py-4 h-56 flex flex-col justify-between border-l border-r border-b border-slate-100 dark:border-slate-600 rounded-b-lg dark:bg-slate-700">
                <div>
                  <Link :href="route('article.show', { locale: locale, slug: article.slug })" class="font-['Inter'] font-bold text-lg text-slate-600 hover:text-sky-700 dark:text-slate-100 dark:hover:text-slate-400 transition-colors duration-300 cursor-pointer tracking-wide">{{ truncate(article.title, 143) }}</Link>
                </div>
                <div class="authror w-full flex items-center justify-between border-t border-slate-300 pt-2">
                  <div class="categories flex items-center space-x-2">
                    <template v-for="category in article.categories" :key="category.id">
                      <div class="w-fit">
                        <Link href="" class="">
                          <img :src="`/storage/${category.img_category}`" class="w-5 h-5" alt="logo icon">
                        </Link>
                      </div>
                    </template>
                  </div>
                  <p class="font-['Roboto'] text-sm font-light text-slate-700 dark:text-white text-end">{{ article.author.name }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
        <div class="flex justify-center w-full" v-else>
          <img src="/assets/images/article-not-found.webp" alt="article not found" class="w-96 mx-auto h-auto">
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="bg-white dark:bg-slate-600 w-fit mt-5 mb-10 p-2 px-4 border border-slate-200 dark:border-slate-400 rounded-full shadow-sm animate-bounce">
        <p class="font-['Roboto'] text-slate-700 dark:text-slate-300 flex items-center space-x-1">{{ $t('visit.more.articles') }}? 
          <Link :href="route('articles.index', { locale })" class="font-semibold text-sky-600 hover:text-sky-400 dark:text-slate-100 transition-colors duration-200 ml-2"> 
            Click me!
          </Link>
        </p>
      </div>
    </div>
  </section>
  </template>
  
  <script setup>
  import { Link, usePage } from '@inertiajs/vue3';
  import { defineProps, ref } from 'vue';
  import { truncate } from '@/utils/truncate';
  
  const props = defineProps({
    articles: {
      type: Array,
      default: () => []
    }
  });
  const { locale } = usePage().props;
  const articles = ref(props.articles);
  </script>
  <style scoped>
  img[lazy=loading] {
    width: 100%;
    height: 215px;
  }
  </style>