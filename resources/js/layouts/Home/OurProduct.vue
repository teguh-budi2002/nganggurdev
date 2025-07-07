<template>
<div class="w-10/12 h-full">
  <div class="text-center lg:text-5xl text-3xl font-['Bebas_Neue'] font-bold text-slate-600 tracking-wider" v-html="$t('coding_need_a_snack')"></div>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10">
    <div class="w-full h-full flex lg:flex-row flex-col items-start">
      <img 
        src="/assets/images/product_image_example.webp" 
        class="w-3/4 h-auto mx-auto lg:hover:scale-110 hover:scale-100 transition-transform duration-300" 
        alt="product image"
      >
      <div class="flex flex-col items-start space-y-1 h-full lg:mt-0 mt-4">
        <p class="text-xl font-medium font-['Roboto'] text-slate-600">Basreng Pedas Daun Jeruk</p>
        <p class="text-sm font-['Roboto'] font-light">35 / 250 / 500 / 1000gr</p>
        <p class="text-sm font-['Roboto'] font-light mt-3">bakso goreng ikan, bumbu premium, bawang putih bubuk, cabe bubuk, bumbu asin, daun jeruk</p>
        <div class="w-full flex lg:flex-col lg:justify-evenly lg:items-baseline items-center justify-between h-full lg:space-y-1 lg:mt-0 mt-3">
          <div class="flex items-center">
            <a href="" class="mt-2 py-1 px-2 rounded-md bg-amber-700 hover:bg-amber-600 transition-colors duration-300 text-white flex items-center space-x-2">
              <img src="/assets/images/icon/shopee.svg" alt="shopee icon" class="w-7 h-7">
              <span>Order Now</span>  
            </a>  
          </div>
          <div class="flex items-center space-x-2">
            <img src="/assets/images/icon/star.svg" alt="icon star" class="w-6 h-6">
            <p class="font-semibold font-['Roboto'] text-slate-500">5.0</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex lg:flex-row flex-col-reverse lg:mt-0 mt-5 items-start">
      <div class="flex flex-col items-start space-y-1 w-full h-full lg:text-end lg:mt-0 mt-4">
        <p class="text-xl font-medium font-['Roboto'] text-slate-600">Basreng Original Daun Jeruk</p>
        <p class="text-sm font-['Roboto'] font-light w-full">35 / 250 / 500 / 1000gr</p>
        <p class="text-sm font-['Roboto'] font-light mt-3">bakso goreng ikan, bumbu premium, bawang putih bubuk, bumbu asin, daun jeruk</p>
        <div class="w-full flex lg:flex-col flex-row lg:justify-evenly justify-between lg:items-end items-center h-full space-y-2 lg:mt-0 mt-3">
          <div class="flex items-center">
            <a href="" class="mt-2 py-1 px-2 rounded-md bg-amber-700 hover:bg-amber-600 transition-colors duration-300 text-white flex items-center space-x-2">
              <img src="/assets/images/icon/shopee.svg" alt="shopee icon" class="w-7 h-7">
              <span>Order Now</span>  
            </a>
          </div>
          <div class="flex items-center space-x-2">
            <img src="/assets/images/icon/star.svg" alt="icon star" class="w-6 h-6">
            <p class="font-semibold font-['Roboto'] text-slate-500">5.0</p>
          </div>
        </div>
      </div>
      <img 
        src="/assets/images/product_image_example2.webp" 
        class="w-3/4 h-auto mx-auto lg:hover:scale-110 hover:scale-100 transition-transform duration-300" 
        alt="product image"
      >
    </div>
  </div>
  <div class="flex justify-center">
    <div class="bg-white w-fit lg:mt-20 mt-10 p-2 px-4 border border-slate-200 rounded-full shadow-sm animate-bounce">
      <p class="font-['Roboto'] text-slate-700 flex items-center space-x-1">{{ $t('visit.more.products') }}? 
        <Link :href="route('products.index', { locale })" class="font-semibold text-sky-600 hover:text-sky-400 transition-colors duration-200 ml-2"> 
          Click me!
        </Link>
      </p>
    </div>
  </div>
</div>
</template>
<script setup>
import { usePage, Link } from '@inertiajs/vue3';

const { locale } = usePage().props;
</script>