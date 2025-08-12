<template>
<Head>
  <title>About Us</title>
  <meta name="description" content="Learn more about NganggurDev, our mission, and the services we offer." />
</Head>
<div class="lg:mt-20 mt-14 h-full min-h-screen w-full dark:bg-slate-900">
  <div class="w-full flex justify-center">
    <div class="lg:w-3/4 w-11/12 p-4 rounded-md shadow-md dark:shadow-xl dark:shadow-slate-700 mt-10 dark:bg-slate-600 border border-slate-100">
      <h1 class="text-slate-600 dark:text-slate-100 text-3xl font-open-sans font-semibold text-center">{{ $t('navigation.section.9') }}</h1>
      <div class="border border-rose-300 dark:border-slate-500 my-4"></div>
      <div class="logo-img">
        <img src="/assets/images/logo/logo-no-bg.webp" class="mx-auto w-3/10 h-auto" alt="logo nganggurdev">
      </div>
      <div class="border border-rose-300 dark:border-slate-500 my-4"></div>
      <div class="content text-slate-600 dark:text-slate-300 font-light lg:text-lg text-sm lg:text-start text-justify leading-relaxed tracking-wide font-open-sans">
        <p v-html="$t('about_us.content.introduction.1')"></p>
        <p class="mt-3" v-html="$t('about_us.content.introduction.2')"></p>
        <h2 class="font-semibold dark:text-slate-100 mt-5" v-html="$t('about_us.what_we_offer.title')"></h2>
        <ul class="mt-3 ml-5">
          <li class="list-disc" v-html="$t('about_us.what_we_offer.list.1')"></li>
          <li class="list-disc" v-html="$t('about_us.what_we_offer.list.2')"></li>
          <li class="list-disc" v-html="$t('about_us.what_we_offer.list.3')"></li>
          <li class="list-disc" v-html="$t('about_us.what_we_offer.list.4')"></li>
        </ul>
        <p class="mt-5"></p>
        <h2 class="font-semibold dark:text-slate-100 mt-5">{{ $t('about_us.content.criticism_and_suggestion.title') }}</h2>
        <p class="mt-5" v-html="$t('about_us.content.criticism_and_suggestion.description')"></p>
        <a href="mailto:business.nganggurdev@gmail.com" target="_blank" class="text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-500 font-semibold mt-5 block w-fit">{{ $t('about_us.content.criticism_and_suggestion.email') }}</a>
        <h2 class="font-semibold dark:text-slate-100 mt-5">{{ $t('about_us.close.title') }}</h2>
        <p class="mt-3" v-html="$t('about_us.close.description')"></p>
      </div>
    </div>
  </div>
</div>
</template>
<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { Head } from '@inertiajs/vue3';

defineOptions({
  layout: AppLayout
});
</script>