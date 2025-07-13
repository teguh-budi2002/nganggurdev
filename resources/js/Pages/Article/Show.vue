<template>
  <Head>
    <title>{{ props.article.title }}</title>
    <meta name="description" :content="props.article.meta_description" />
    <meta name="keywords" :content="props.article.meta_keyword" />
  </Head>
  <div class="lg:mt-32 mt-20 h-full min-h-screen w-full bg-white">
    <div class="flex flex-col items-center justify-center">
      <!-- Affiliate Domainesia && Cloudways-->
      <div class="lg:mx-o mx-4" v-if="locale === 'id'">
        <a href="https://my.domainesia.com/ref.php?u=25983"><img src="https://dnva.me/32ar4" class="rounded-md" width="800px" height="90px" alt="www.domainesia.com"></a>
      </div>
      <div class="lg:mx-o mx-4" v-if="locale === 'en'">
        <a href="https://www.cloudways.com/en/php-hosting.php?id=1974900&amp;a_bid=aa32e3fe" target="_top">
          <img src="https://www.cloudways.com/affiliate/accounts/default1/banners/aa32e3fe.jpg" class="rounded-md" alt="Faster PHP Cloud Hosting" title="Faster PHP Cloud Hosting" width="728" height="90" />
        </a>
      </div>
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
            <div class="md:block hidden">
              <Suspense :key="props.article.id">
                <template #default>
                  <TableOfContent :content-ref="bodyContentRef"/>
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
      <div class="saweria_trakteer bg-white md:w-3/6 w-11/12 mt-10 p-4 border border-slate-100 rounded-md shadow-md">
        <div class="font-['Roboto'] text-slate-900 tracking-wide font-light text-center" v-html="$t('donation.text')"></div>
        <div class="flex items-center justify-center space-x-4 mt-5">
          <a href="https://saweria.co/nganggurdev" target="_blank" class="w-fit py-2 px-6 flex items-center space-x-2 rounded-md bg-amber-300 border-2 border-amber-600 hover:bg-amber-500 text-white font-['Open_Sans'] transition-colors duration-200 uppercase font-bold text-sm">
            <img src="/assets/images/icon/saweria.png" class="w-8 h-8" alt="saweria icon">
            <span>Saweria</span>
          </a>
          <a href="https://trakteer.id/nganggurdev" target="_blank" class="w-fit py-2 px-6 flex items-center space-x-2 rounded-md bg-rose-300 border-2 border-rose-600 hover:bg-rose-600 text-white font-['Open_Sans'] transition-colors duration-200 font-bold text-sm uppercase">
            <img src="/assets/images/icon/trakteer.png" class="w-8 h-8 rounded-full" alt="saweria icon">
            <span>trakteer</span>
          </a>
        </div>
      </div>
      <!-- Affiliate Domainesia && Cloudways-->
      <div class="mt-10 lg:mx-0 mx-4" v-if="locale === 'id'">
        <a href="https://my.domainesia.com/ref.php?u=25983"><img src="https://dnva.me/bne38" class="rounded-md" width="770px" height="90px" alt="www.domainesia.com"></a>
      </div>
      <div class="mt-10 lg:mx-0 mx-4" v-if="locale === 'en'">
        <a href="https://www.cloudways.com/en/wordpress-hosting.php?id=1974900&amp;a_bid=4869f424" target="_top">
          <img src="//www.cloudways.com/affiliate/accounts/default1/banners/4869f424.jpg" class="rounded-md" alt="Load WordPress Sites in as fast as 37ms!" title="Load WordPress Sites in as fast as 37ms!" width="770" height="90" />
        </a>
      </div>
      <div class="bg-white w-fit mt-10 p-2 px-4 border border-slate-200 rounded-full shadow-sm animate-bounce">
        <p class="font-['Roboto'] text-slate-700 flex items-center space-x-1">Want to read more? 
          <Link href="" class="font-semibold text-sky-600 hover:text-sky-400 transition-colors duration-200 ml-2"> 
            Click me!
          </Link>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { defineProps, defineAsyncComponent, ref, watch } from 'vue';
import { Link, Head } from '@inertiajs/vue3';
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

const BodyArticle = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('@/layouts/Article/Body.vue'));
      }, 1000);
    });
  }
});
const TableOfContent = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('@/layouts/Article/TableOfContent.vue'));
      }, 1000);
    });
  }
});
const ArticleSeries = defineAsyncComponent({
  loader: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('@/layouts/Article/ArticleSeries.vue'));
      }, 1000);
    });
  }
});

const bodyRef = ref(null);
const bodyContentRef = ref(null);
const locale = ref(props.locale);

watch(bodyRef, (newVal) => {
  if (!newVal) return;

  bodyContentRef.value = newVal.contentRef;
})
</script>