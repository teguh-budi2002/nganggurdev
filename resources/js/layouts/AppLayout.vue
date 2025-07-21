<template>
    <Head>
      <link rel="alternate" hreflang="en" :href="page.props.base_url + '/en'" />
      <link rel="alternate" hreflang="id" :href="page.props.base_url + '/id'" />
      <link rel="alternate" hreflang="x-default" :href="page.props.base_url + '/en'" />
      <link rel="canonical" :href="page.props.url" />
      <link rel="shortcut icon" href="/assets/images/logo/logo-no-bg.webp" type="image/x-icon">
      <meta name="description" :content="$t('seo.meta.description')" />
      <meta name="keywords" :content="$t('seo.meta.keywords')" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" :content="$t('seo.robots')" />
    </Head>

  <div>
    <Navigation />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { Head, usePage } from '@inertiajs/vue3';
import Navigation from '@/layouts/Navigation.vue';
import Footer from '@/layouts/Footer.vue';

const page = usePage();
</script>