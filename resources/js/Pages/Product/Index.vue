<template>
  <Head>
    <title>Our Products</title>
    <meta name="description" content="Shop for a variety of exciting products including spicy basreng snacks, trendy treats, and useful digital apps.">
    <meta name="keywords" content="snacks, applications, delicious, products, basreng, digital apps">
  </Head>
  <div class="lg:mt-20 mt-2 h-full min-h-screen w-full">
    <div class="flex flex-col justify-center items-center">
      <div class="lg:w-10/12 w-11/12 h-full mt-20">
        <div class="bg-rose-400 w-fit p-1 px-2 rounded-md">
          <p class="text-white font-['Roboto']">{{ $t('badge.product') }}</p>
        </div>
        <div class="lg:w-3/4 w-full mx-auto lg:mt-0 mt-4">
          <p class="lg:text-center text-start font-['Roboto'] lg:text-5xl text-3xl capitalize font-semibold lg:leading-15 leading-11">{{ $t('hero_text.products.1') }} 
            <span class="bg-gradient-to-r from-rose-600 to-rose-300 text-white p-1 px-2">{{ $t('delicious_snack') }}</span> {{ $t('hero_text.products.2') }}
          </p>
        </div>
        <!-- <div class="w-fit rounded-lg animate-pulse">
          <p class="text-sm font-['Roboto'] text-rose-500">NOTE: Aplikasi ini hanya bisa dibeli oleh region ID</p>
        </div> -->
        <div class="lg:mt-10 mt-4">
          <TabPanel
            :tabs="tabs"
            :lazy="true"
            :preload-adjacent="true"
            @tab-change="onTabChange"
          >
            <template #food>
              <div class="mt-5">
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2" v-if="snackProducts.length > 0">
                  <template v-for="product in snackProducts" :key="product.id">
                    <div class="w-full shadow-sm rounded-md hover:shadow-lg transition-shadow duration-200">
                      <a :href="product.anchor_link" target="_blank">
                        <img :src="`/storage/${product.image}`" class="rounded-t-md w-full max-h-72 object-cover object-center" alt="image snack product">
                      </a>
                      <div class="p-4">
                        <!-- Max 9 Words | 59 Chars -->
                        <a :href="product.anchor_link" class="w-full font-semibold font-['Inter'] hover:text-sky-600 transition-colors duration-200" target="_blank">{{ truncate(product.title, 59) }}</a>
                        <div class="mt-2 space-y-4">
                          <button type="button" class="p-1 animate-pulse rounded-md text-white bg-rose-600 text-xs font-bold uppercase">Diskon {{ product.discount }}%</button>
                          <div class="flex items-center justify-between">
                            <p class="font-['Inter'] font-semibold text-green-600">Rp. {{ formatCurrencyIDR(product.price_after_discount) }}</p>
                            <p class="font-['Inter'] line-through text-rose-600 text-xs font-light">Rp. {{ formatCurrencyIDR(product.price) }}</p>
                          </div>
                          <div class="border-t border-slate-300 pt-2 flex items-center space-x-1">
                            <img src="/assets/images/icon/star.svg" alt="star icon" class="size-5">
                            <p class="font-['Inter'] text-sm font-semibold text-slate-500">5.0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <div v-else class="text-center mt-10">
                  <p class="md:text-xl text-sm font-['Inter'] text-slate-500">No products available in this category.</p>
                </div>
              </div>
            </template>
  
            <template #application>
              <div class="mt-5">
                <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2" v-if="applicationProducts.length > 0">
                  <template v-for="product in applicationProducts" :key="product.id">
                    <div class="w-full shadow-sm rounded-md hover:shadow-lg transition-shadow duration-200">
                      <a :href="product.anchor_link" target="_blank">
                        <img :src="`/storage/${product.image}`" class="rounded-t-md w-full max-h-72" alt="image app product">
                      </a>
                      <div class="p-4">
                        <Link href="" class="font-semibold font-['Inter'] hover:text-sky-600 transition-colors duration-200 w-fit">{{ truncate(product.title, 59) }}</Link>
                        <div class="mt-2 space-y-4">
                          <button type="button" class="p-1 animate-pulse rounded-md text-white bg-rose-600 text-xs font-bold uppercase">Diskon {{ product.discount }}%</button>
                          <div class="flex items-center justify-between">
                            <p class="font-['Inter'] font-semibold text-green-600">Rp. {{ formatCurrencyIDR(product.price_after_discount) }}</p>
                            <p class="font-['Inter'] line-through text-rose-600 text-xs font-light">Rp. {{ formatCurrencyIDR(product.price) }}</p>
                          </div>
                          <div class="border-t border-slate-300 pt-2 flex items-center space-x-1">
                            <img src="/assets/images/icon/star.svg" alt="star icon" class="size-5">
                            <p class="font-['Inter'] text-sm font-semibold text-slate-500">5.0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
                <div v-else class="text-center mt-10">
                  <p class="md:text-xl text-sm font-['Inter'] text-slate-500">No products available in this category.</p>
                </div>
              </div>
            </template>
          </TabPanel>
        </div>
      </div>
    </div>
  </div> 
</template>
<script setup>
import AppLayout from '../../layouts/AppLayout.vue';
import TabPanel from '../../components/TabPanel.vue';
import { Head, Link } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
import { truncate } from '@/utils/truncate.js';
import { formatCurrencyIDR } from '@/utils/formatCurrency';

defineOptions({
  layout: AppLayout,
  inheritAttrs: false,
});

const props = defineProps({
  snackProducts: {
    type: Object,
    default: () => [],
  },
  applicationProducts: {
    type: Object,
    default: () => [],
  },
  categories: {
    type: Object,
    default: () => [],
  },
})
const snackProducts = ref(props.snackProducts.data);
const applicationProducts = ref(props.applicationProducts.data);
const categories = ref(props.categories);

const onTabChange = ({ tab, index, previousTab }) => {
  // console.log('Tab changed:', { 
  //   from: previousTab?.title, 
  //   to: tab.title, 
  //   index 
  // })
}

const tabs = computed(() => {
  return categories.value.map(c => ({
    id: c.title.toLowerCase(),
    title: c.title,
    useSlot: true,
  }));
});

</script>