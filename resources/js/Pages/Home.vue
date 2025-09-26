<template>
<Head>
  <title>Home</title>
  <meta name="description" :content="$t('seo.meta.description')" />
  <meta name="keywords" :content="$t('seo.meta.keywords')" />
</Head>
<div>
  <div class="landing_page lg:mt-20 h-full w-full">
    <div class="grid lg:grid-cols-2 grid-cols-1 lg:mt-20 mt-10 bg-rose-100 dark:bg-slate-800">
      <div class="hero_text_section p-8 flex flex-col justify-center space-y-6">
        <p class="md:text-7xl text-4xl font-['Open_Sans'] font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-yellow-600 via-orange-500 to-rose-500 dark:from-slate-600 dark:via-slate-300 dark:to-slate-600 leading-[1.2] overflow-visible">{{ $t('brand_name') }}</p>
        <div class="md:mt-4">
          <p class="md:text-5xl text-3xl font-['Open_Sans'] italic font-light md:leading-13 text-slate-600 dark:text-slate-100">
            "{{ $t('hero_text.part1') }} <span class="font-bold">{{ $t('hero_text.part2') }}</span>"
          </p>
          <p class="font-['Roboto'] md:text-base text-sm capitalize font-light text-slate-700 dark:text-slate-400 mt-3">
            {{ $t('sub_text.1') }} 
            <span class="text-red-700 dark:text-white">| {{ $t('sub_text.2') }}</span>
          </p>
        </div>
        <div class="mt-2">
          <Link :href="route('articles.index', { locale })" class="py-2 px-8 bg-gradient-to-r shadow-lg from-rose-500 from-45% to-rose-300 hover:from-rose-700 hover:to-rose-500 dark:from-slate-600 dark:to-slate-400 dark:hover:from-slate-600 dark:hover:to-slate-600 transition-colors duration-500 text-white rounded-md font-['Open_Sans'] text-sm">{{ $t('button.landing_page.text') }}</Link>
        </div>
      </div>
      <div class="hero_image_section lg:block hidden">
        <img :src="bgImageSrc" alt="Hero Image" class="w-2/3 h-auto mx-auto" />
      </div>
    </div>
  </div>
  <section class="dark:bg-slate-900">
    <div class="w-full h-full">
      <div class="flex flex-col items-center justify-center">
        <div class="md:w-2/4 w-3/4 mt-10">
          <Vue3Marquee 
            :pause-on-hover="true" 
            :clone="true" 
            :duration="35"
            :direction="'reverse'"
            >
            <div v-for="image in imageIcons1" :key="image" class="md:w-60 w-40 flex justify-center items-center space-x-4 md:p-4 p-2 mx-4 border border-gray-200 rounded-md dark:bg-slate-800 dark:border-gray-600">
              <img :src="image.src" :alt="image.alt" class="md:w-12 w-8 h-auto" loading="eager" />
              <p class="font-['Roboto'] md:text-base text-sm font-light text-slate-900 dark:text-white">{{ image.alt }}</p>
            </div>
          </Vue3Marquee>
        </div>
        <div class="md:w-2/3 w-11/12 mt-5">
          <Vue3Marquee 
            :pause-on-hover="true" 
            :clone="true" 
            :duration="35"
            :direction="'normal'">
            <div v-for="image in imageIcons2" :key="image" class="md:w-60 w-40 flex justify-center items-center space-x-4 md:p-4 p-2 mx-4 border border-gray-200 rounded-md dark:bg-slate-800 dark:border-gray-600">
              <img :src="image.src" :alt="image.alt" class="md:w-12 w-8 h-auto"/>
              <p class="font-['Roboto'] md:text-base text-sm font-light text-slate-900 dark:text-white">{{ image.alt }}</p>
            </div>
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </section>
  <section class="dark:bg-slate-900">
    <Introduction />
    <div v-if="articleSeries.length > 0">
      <ListSeriesArticle :articleSeries />
    </div>
    <div v-if="featuredArticles.length > 0">
      <ListFeaturedArticle :featuredArticles />
    </div>
    <div v-if="articles.length > 0">
      <ListLatestArticle :articles />
    </div>
  </section>
</div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
import { Link, Head } from '@inertiajs/vue3';
import { ref, onMounted, onUnmounted, defineOptions, defineProps } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
import ListFeaturedArticle from '@/layouts/Home/ListFeaturedArticle.vue';
import ListLatestArticle from '@/layouts/Home/ListLatestArticle.vue';
import ListSeriesArticle from '../layouts/Home/ListSeriesArticle.vue';
import Introduction from '@/layouts/Home/Introduction.vue';

defineOptions({
  layout: AppLayout
})

const props = defineProps({
  articleSeries: {
    type: Array,
    default: () => []
  },
  articles: {
    type: Array,
    default: () => []
  },
  featuredArticles: {
    type: Array,
    default: () => []
  },
  locale: {
    type: String,
    default: 'en'
  }
});
const articleSeries = ref(props.articleSeries);
const articles = ref(props.articles);
const featuredArticles = ref(props.featuredArticles);
const locale = ref(props.locale);
const bgImageSrc = ref('');

const imageIcons1 = ref([
      { src: '/assets/images/icon/html5.svg', alt: 'HTML 5' },
      { src: '/assets/images/icon/css3.svg', alt: 'CSS 3' },
      { src: '/assets/images/icon/javascript.svg', alt: 'Javascript' },
      { src: '/assets/images/icon/php.svg', alt: 'PHP' },
    ]);
const imageIcons2 = ref([
  { src: '/assets/images/icon/laravel.svg', alt: 'Laravel' },
  { src: '/assets/images/icon/vue.svg', alt: 'Vue.js' },
  { src: '/assets/images/icon/tailwind.svg', alt: 'Tailwind CSS' },
  { src: '/assets/images/icon/mysql.svg', alt: 'MySQL' },
  { src: '/assets/images/icon/vscode.svg', alt: 'VS Code' }
]);

const loadBgImageByTheme = () => {
  const isDarkMode = localStorage.getItem('theme') === 'dark'
  bgImageSrc.value = isDarkMode
    ? '/assets/images/hero-image-dark-mode.webp'
    : '/assets/images/hero-image.webp';
};

onMounted(() => {
  loadBgImageByTheme();

  const observer = new MutationObserver(() => {
    loadBgImageByTheme()
  })
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme']
  })
  
  onUnmounted(() => {
    observer.disconnect()
  })

  AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: false,
    disable: 'mobile',
  });
});

</script>

<style>
</style>