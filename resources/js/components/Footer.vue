<template>
  <footer class="w-full h-fit pt-8 relative" v-memo>
    <div class="bg-[radial-gradient(circle_at_center,_#FFE4E6,_#ffffff)] absolute right-44 bottom-16 blur-3xl z-10 p-32 rounded-full"></div>
    <div class="flex justify-center">
      <div class="w-11/12 z-20">
        <div class="grid md:grid-cols-2 grid-cols-1">
          <div class="pt-8">
            <p class="text-5xl font-['Inter'] font-bold text-slate-600">NganggurDev</p>
            <p class="font-['Roboto'] font-light text-sm mt-5">Jl. Bandeng Presto, Kec. Gempol, Kab. Pasuruan, Jawa Timur 67155</p>
            <div class="flex items-center space-x-4 mt-2">
              <p class="font-['Roboto'] font-light text-sm text-slate-600">Special thanks for</p>
              <div class="flex items-center space-x-2">
                <img src="/assets/images/icon/laravel.svg" class="w-5 h-5" alt="laravel icon">
                <img src="/assets/images/icon/vue.svg" class="w-5 h-5" alt="vue icon">
                <img src="https://raw.githubusercontent.com/innocenzi/awesome-inertiajs/main/assets/logo.svg" class="w-5 h-5" alt="inertia icon">
                <img src="/assets/images/icon/tailwind.svg" class="w-5 h-5" alt="tailwind icon">
              </div>
            </div>
            <div class="flex items-start space-x-8 md:mt-12 mt-8">
              <a :href="sosmed.facebook" target="_blank">
                <img src="/assets/images/icon/fb.svg" class="w-8 h-8" alt="icon fb">
              </a>
              <a :href="sosmed.youtube" target="_blank">
                <img src="/assets/images/icon/yt.svg" class="w-8 h-8" alt="icon yt">
              </a>
              <a :href="sosmed.tiktok" target="_blank">
                <img src="/assets/images/icon/tiktok.svg" class="w-8 h-8" alt="icon tiktok">
              </a>
              <a :href="sosmed.whatsapp" target="_blank">
                <img src="/assets/images/icon/wa.svg" class="w-8 h-8" alt="icon wa">
              </a>
              <a :href="sosmed.instagram" target="_blank">
                <img src="/assets/images/icon/ig.svg" class="w-8 h-8" alt="icon ig">
              </a>
            </div>
          </div>
          <div class="grid md:grid-cols-3 grid-cols-2 md:pt-8 md:mt-0 mt-10">
            <div class="flex md:justify-center justify-start md:col-span-2">
              <div class="flex flex-col space-y-4">
                <Link href="" class="w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150">
                  {{ $t('navigation.section.1') }}
                </Link>
                <Link href="" class="w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150">
                  {{ $t('navigation.section.2') }}
                </Link>
                <Link href="" class="w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150">
                  {{ $t('navigation.section.4') }}
                </Link>
                <Link href="" class="w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150">
                  {{ $t('navigation.section.5') }}
                </Link>
              </div>
            </div>
            <div class="flex flex-col space-y-4">
              <Link href="" class="w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150">
                {{ $t('navigation.section.6') }}
              </Link>
              <Link href="" class="w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150">
                {{ $t('navigation.section.7') }}
              </Link>
              <Link href="" class="w-fit font-['Roboto'] font-semibold text-xl text-slate-600 hover:text-sky-600 transition-colors duration-150">
                {{ $t('navigation.section.8') }}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center bg-rose-100 py-4 mt-8">
      <p class="font-['Inter'] font-light text-xs">&copy; 2025 - {{ year }} {{ $t('copyright') }} | NganggurDev</p>
    </div>
  </footer>
</template>

<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';

const page = usePage();
defineProps({
  socialMedia: {
    type: Array,
    default: () => []
  }
});
const sosmed = ref(page.props.social_media || []);
const date = new Date();
const year = ref(date.getFullYear());
</script>