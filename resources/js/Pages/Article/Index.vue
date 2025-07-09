<template>
  <Head title="List Articles" />
  <div class="lg:mt-20 mt-14 h-full min-h-screen w-full">
    <div class="flex flex-col justify-center items-center">
      <div class="lg:w-10/12 w-11/12 h-full lg:mt-20 mt-10 border-b-2 border-rose-100 lg:pb-10 pb-4">
        <div class="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <div class="bg-rose-400 w-fit p-1 px-2 rounded-md">
              <p class="text-white font-['Roboto']">{{ $t('badge.article') }}</p>
            </div>
            <p class="lg:text-6xl text-4xl font-semibold font-['Roboto'] mt-4">{{ $t('hero_text.article.1') }}</p>
            <p class="lg:text-6xl text-4xl text-white font-semibold font-['Roboto'] p-1 bg-gradient-to-r from-rose-600 to-rose-300 w-fit">{{ $t('hero_text.article.2') }}</p>
          </div>
          <div class="flex flex-col justify-center lg:mt-0 mt-5">
            <div>
              <!-- <p class="font-['Roboto'] font-semibold lg:text-6xl text-5xl text-center">NganggurDev</p> -->
               <img src="/assets/images/logo/logo-no-bg.webp" alt="logo icon" loading="eager" class="w-20 h-20 mx-auto">
              <p class="font-['Roboto'] text-center md:mt-2 text-sm">{{ $t('explore.our.latest.article.content') }}</p>
            </div>
            <input type="text" placeholder="Search for articles..." @input="loadArticleBySearch" class="w-full p-2 px-4 lg:mt-10 mt-6 rounded-md border-2 border-rose-300 focus:outline-none font-['Roboto'] placeholder:font-['Roboto']" />
          </div>
        </div>
      </div>
      <div class="lg:w-10/12 w-11/12 h-full lg:mt-8 mt-5">
        <p class="text-2xl font-semibold font-['Roboto']">{{ $t('latest.article') }}</p>
        <div class="grid lg:grid-cols-4 grid-cols-1 gap-5">
          <div class="lg:col-span-3">
            <div v-if="isLoading" class="loading-indicator flex justify-center items-center h-72">
              <!-- From Uiverse.io by satyamchaudharydev --> 
              <Loading />
            </div>
            <div v-if="!isLoading && articles.data.length === 0" class="flex justify-center items-center h-80">
               <img src="/assets/images/article-not-found.webp" alt="article not found" class="w-3/8 h-auto" loading="lazy">
            </div>
            <div class="grid lg:grid-cols-3 grid-cols-1 gap-3" v-if="!isLoading && articles.data.length > 0">
              <template v-for="article in articles.data" :key="article.id">
                <div class="w-full flex flex-col justify-between min-h-72 border-2 border-white hover:border-2 hover:border-rose-100 p-2 mt-5 rounded-md shadow-sm hover:shadow-lg hover:shadow-rose-100 transition-[border, shadow] duration-300">
                  <Link :href="route('article.show', { locale, slug: article.slug })">
                    <img v-lazy="`/storage/${article.image}`" alt="article image" class="w-full max-h-44 cursor-pointer rounded-md">
                  </Link>
                  <Link :href="route('article.show', { locale, slug: article.slug })" class="font-semibold capitalize block font-['Inter'] text-slate-600 mt-3 text-xl w-fit">{{ truncate(article.title, 55) }}</Link>
                  <div class="flex items-end justify-between mt-5 p-2">
                    <p class="text-xs font-['Roboto'] font-light">{{ article.author.name }}</p>
                    <p class="text-xs font-['Roboto'] font-light">March 2025</p>
                  </div>
                </div>
              </template>
            </div>
            <div class="paginate_button w-full mt-10 flex justify-start space-x-4">
              <button @click.prevent="prevPage()" :disabled="articles.prev_page_url === null || isLoading" class="py-1 px-2 w-24 bg-rose-500 hover:bg-rose-400 disabled:bg-rose-300 disabled:cursor-not-allowed cursor-pointer text-white rounded-md font-['Roboto'] font-medium text-sm flex items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                </svg>
                Previous
              </button>
              <button @click.prevent="nextPage()" :disabled="articles.next_page_url === null || isLoading" class="py-1 px-2 w-24 bg-rose-500 hover:bg-rose-400 disabled:bg-rose-300 disabled:cursor-not-allowed cursor-pointer text-white rounded-md font-['Roboto'] font-medium text-sm flex items-center justify-between">
                Next
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
          <div class="category_filters mt-5">
            <div class="flex items-center space-x-2">
              <img src="/assets/images/icon/category.svg" alt="category icon" class="w-8 h-8">
              <p class="uppercase font-['Roboto'] font-semibold text-slate-500 text-xl">{{ $t('category.text') }}</p>
            </div>
            <div class="w-full max-h-96 overflow-auto custom-scroll">
              <template v-for="category in categories" :key="category.id">
                <div class="mr-3">
                  <button 
                   @click.prevent="loadArticlesByCategory(category.title)" 
                   class="w-full flex justify-center items-center space-x-2 hover:bg-rose-50 transition-colors duration-150 border border-rose-300 rounded-lg shadow-sm p-2 mt-3"
                   :class="{ 'bg-rose-50': page.props.query.categoryName === category.title }"
                 >
                    <img :src="`/storage/${category.img_category}`" class="w-8 h-8" alt="category icon">
                    <p class="font-['Roboto'] font-light">{{ category.title }}</p>
                  </button>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
import { Link, Head, router, usePage } from '@inertiajs/vue3';
import Loading from '@/components/Loading.vue';
import { debounce } from '@/utils/debounce';
import { truncate } from '@/utils/truncate';

defineOptions({
  layout: AppLayout,
  inheritAttrs: false,
});

const props = defineProps({
  articles: {
    type: Object,
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  locale: String
})

const articles = ref(props.articles);
const categories = ref(props.categories);
const isLoading = ref(false);
const locale = props.locale || 'en';
const page = usePage();

const nextPage = async () => {
  if (!articles.value.next_page_url || isLoading.value) {
    return;
  }

  router.get(articles.value.next_page_url, {}, {
    preserveState: false,
    preserveScroll: true,
    onStart: () => {
      isLoading.value = true;
    },
    onSuccess: (page) => {
      articles.value.data = [...page.props.articles.data];
      articles.value.next_page_url = page.props.articles.next_page_url;
      articles.value.current_page = page.props.articles.current_page;
    },
    onFinish: () => {
      isLoading.value = false;
    },
    onError: (error) => {
      console.error('Error loading next page:', error);
    }
  });
};

const prevPage = async () => {
  if (!articles.value.prev_page_url || isLoading.value) {
    return;
  }

  router.get(articles.value.prev_page_url, {}, {
    preserveState: false,
    preserveScroll: true,
    onStart: () => {
      isLoading.value = true;
    },
    onSuccess: (page) => {
      articles.value.data = [...page.props.articles.data];
      articles.value.prev_page_url = page.props.articles.prev_page_url;
      articles.value.current_page = page.props.articles.current_page;
    },
    onFinish: () => {
      isLoading.value = false;
    },
    onError: (error) => {
      console.error('Error loading previous page:', error);
    }
  });
};

const loadArticlesByCategory = (categoryName) => {
  router.get(route('articles.index', { locale, categoryName }), {}, {
    preserveState: true,
    preserveScroll: true,
    replace: true,
    onStart: () => {
      isLoading.value = true;
    },
    onSuccess: (page) => {
      if (page?.props?.articles) {
        articles.value.data = [...page.props.articles.data];
        articles.value.next_page_url = page.props.articles.next_page_url;
        articles.value.prev_page_url = page.props.articles.prev_page_url;
        articles.value.current_page = page.props.articles.current_page;
      } else {
        articles.value.data = [];
        articles.value.next_page_url = null;
        articles.value.prev_page_url = null;
        articles.value.current_page = 1;
      }
    },
    onFinish: () => {
      isLoading.value = false;
    },
    onError: (error) => {
      console.error('Error loading articles by category:', error);
    }
  });
};

const loadArticleBySearch = debounce((event) => {
    const searchQuery = event.target.value.trim();
    router.get(route('articles.index', { locale, searchQuery }), {}, {
      preserveState: true,
      preserveScroll: true,
      onStart: () => {
        isLoading.value = true;
      },
      onSuccess: (page) => {
        articles.value.data = [...page.props.articles.data];
        articles.value.next_page_url = page.props.articles.next_page_url;
        articles.value.prev_page_url = page.props.articles.prev_page_url;
        articles.value.current_page = page.props.articles.current_page;
      },
      onFinish: () => {
        isLoading.value = false;
      },
      onError: (error) => {
        console.error('Error loading articles by search:', error);
      }
    });
}, 500);
</script>
<style>
img[lazy=loading] {
  width: 100%;
  height: 215px;
}
</style>