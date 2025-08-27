<template>
<Head>
  <title>Terms of Service</title>
  <meta name="description" content="Learn more about NganggurDev's terms of service and user agreements." />
</Head>
<div class="lg:mt-20 mt-14 h-full min-h-screen w-full dark:bg-slate-900">
  <div class="w-full flex justify-center">
    <div class="lg:w-3/4 w-11/12 p-4 rounded-md shadow-md dark:shadow-xl dark:shadow-slate-700 mt-10 dark:bg-slate-600 border border-slate-100">
      <h1 class="text-slate-600 dark:text-slate-100 text-3xl font-open-sans font-semibold text-center">{{ $t('navigation.section.7') }}</h1>
      <div class="border border-slate-300 dark:border-slate-500 my-4"></div>
      <div class="content text-slate-600 dark:text-slate-300 font-light lg:text-lg text-sm lg:text-start text-justify leading-relaxed tracking-wide font-open-sans" v-html="$t('terms_of_service.content')"></div>
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