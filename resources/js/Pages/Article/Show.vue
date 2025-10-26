<template>
  <Head>
    <title>{{ props.article.title }}</title>
    <meta name="author" content="Nganggur Dev" />
    <meta name="description" :content="props.article.meta_description" />
    <meta name="keywords" :content="props.article.meta_keyword" />
    <meta property="og:image" data-name-meta="image" :content="`${page.props.base_url}/storage/${props.article.image}`" />
    <meta property="og:title" :data-name-title="props.article.title" />
    <meta property="og:description" :data-name-meta="props.article.meta_description" />
    <meta property="og:type" :content="$t('seo.og_type')" />
    <meta property="og:url" :content="page.props.url" />
    <meta property="og:site_name" :content="$t('seo.og_site_name')" />
  </Head>
  <div class="lg:mt-20 mt-16 h-full min-h-screen w-full bg-white dark:bg-slate-900">
    <div class="flex justify-center mt-8">
     <div ref="bannerAdContainer" class="block"></div>
    </div>
    <div class="flex flex-col items-center justify-center">
      <div class="md:w-10/12 w-11/12 grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mt-10 mt-8">
        <Suspense :key="props.article.id">
          <template #default>
            <BodyArticle :article="props.article" ref="bodyRef" />
          </template>
          <template #fallback>
            <BodyArticleSkeleton />
          </template>
        </Suspense>
        <div class="w-full flex flex-col space-y-6 lg:col-span-2">
          <div class="sticky top-28">
            <div class="md:block hidden" v-if="props.article.headings.length > 0">
              <Suspense :key="props.article.id">
                <template #default>
                  <TableOfContent :toc="article.headings"/>
                </template>
                <template #fallback>
                  <TableOfContentSekeleton />
                </template>
              </Suspense>
            </div>
            <div v-if="props.articleSession">
              <Suspense :key="props.articleSession?.id">
                <template #default>
                  <ArticleSeries :article-session="props.articleSession"/>
                </template>
                <template #fallback>
                  <ArticleSeriesSekeleton />
                </template>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
      <div class="saweria_trakteer bg-white dark:bg-slate-800 md:w-3/6 w-11/12 mt-10 p-4 border border-slate-100 dark:border-slate-600 rounded-md shadow-md">
        <div class="font-['Roboto'] text-slate-900 dark:text-slate-100 tracking-wide font-light text-center" v-html="$t('donation.text')"></div>
        <div class="flex items-center justify-center space-x-4 mt-5">
          <a href="https://saweria.co/nganggurdev" target="_blank" class="w-fit py-2 px-6 flex items-center space-x-2 rounded-md bg-amber-300 border-2 border-amber-600 hover:bg-amber-500 dark:bg-amber-500 text-white font-['Open_Sans'] transition-colors duration-200 uppercase font-bold text-sm">
            <img src="/assets/images/icon/saweria.png" class="w-8 h-8" alt="saweria icon">
            <span>Saweria</span>
          </a>
          <a href="https://trakteer.id/nganggurdev" target="_blank" class="w-fit py-2 px-6 flex items-center space-x-2 rounded-md bg-rose-300 border-2 border-rose-600 hover:bg-rose-600 dark:bg-rose-500 text-white font-['Open_Sans'] transition-colors duration-200 font-bold text-sm uppercase">
            <img src="/assets/images/icon/trakteer.png" class="w-8 h-8 rounded-full" alt="saweria icon">
            <span>trakteer</span>
          </a>
        </div>
      </div>
      <div class="bg-white dark:bg-slate-600 w-fit mt-10 mb-10 sm:mb-0 p-2 px-4 border border-slate-200 dark:border-slate-400 rounded-full shadow-sm animate-bounce">
        <p class="font-['Roboto'] text-slate-700 dark:text-slate-300 flex items-center space-x-1">Want to read more? 
          <Link :href="route('articles.index', { locale })" class="font-semibold text-sky-600 hover:text-sky-400 dark:text-slate-100 transition-colors duration-200 ml-2"> 
            Click me!
          </Link>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { defineProps, defineAsyncComponent, ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { Link, Head, usePage } from '@inertiajs/vue3';
import BodyArticleSkeleton from '@/components/Article/SekeletonLoading/Body.vue';
import TableOfContentSekeleton from '@/components/Article/SekeletonLoading/TableOfContent.vue';
import ArticleSeriesSekeleton from '@/components/Article/SekeletonLoading/ArticleSeries.vue';

defineOptions({
  layout: AppLayout,
});

const props = defineProps({
  article: Object,
  articleSession: Object,
  locale: String,
});
const page = usePage();
const bannerAdContainer = ref(null);

const BodyArticle = defineAsyncComponent({
  loader: () => import('@/layouts/Article/Body.vue')
});
const TableOfContent = defineAsyncComponent({
  loader: () => import('@/layouts/Article/TableOfContent.vue')
});
const ArticleSeries = defineAsyncComponent({
  loader: () => import('@/layouts/Article/ArticleSeries.vue')
});

const article = ref(props.article);
const bodyRef = ref(null);
const bodyContentRef = ref(null);
const locale = ref(props.locale);

watch(bodyRef, (newVal) => {
  if (!newVal) return;

  bodyContentRef.value = newVal.contentRef;
})

const loadBannerAd = () => {
    if (document.getElementById('banner-ad-script')) {
      return;
    }

    window.atOptions = {
      'key': 'c2ab64db88edfff4c427303909826d93',
      'format': 'iframe',
      'height': 90,
      'width': 728,
      'params': {}
    };

    const bannerScript = document.createElement('script');
    bannerScript.id = 'banner-ad-script';
    bannerScript.type = 'text/javascript';
    bannerScript.src = '//www.highperformanceformat.com/c2ab64db88edfff4c427303909826d93/invoke.js';
    bannerScript.async = true;

    bannerAdContainer.value.appendChild(bannerScript);
};

const cleanupAdScripts = () => {
  if (bannerAdContainer.value) {
    bannerAdContainer.value.innerHTML = '';
  }

  if (window.atOptions) {
    delete window.atOptions;
  }
};

onMounted(() => {
 loadBannerAd()
})

onBeforeUnmount(() => {
  cleanupAdScripts();
});
</script>
