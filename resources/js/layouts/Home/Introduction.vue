<template>
<section class="w-full h-full">
  <div class="flex justify-center">
    <div class="w-11/12 h-full md:mt-20 mt-10">
      <div class="flex justify-center">
        <div class="md:w-3/4 w-full" 
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true">
            <p class="text-center md:text-5xl text-3xl font-['Bebas_Neue'] font-bold text-slate-600 dark:text-slate-100 tracking-wider">{{ $t('why_learn_with_us') }}</p>
          </div>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 mt-10">
          <div class="flex flex-col items-center justify-start"
            data-aos="zoom-in-left"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
          <div class="inline-block bg-gradient-to-tl from-amber-600 via-transparent to-violet-600 p-px rounded-md mb-3">
            <div class="bg-white dark:bg-slate-700 rounded-md py-1.5 px-4 lg:leading-tight">
              <p class="md:text-4xl text-2xl font-extrabold font-['Roboto'] bg-clip-text text-transparent bg-gradient-to-tr from-amber-400 to-purple-400 dark:from-amber-500 dark:to-violet-500">{{ $t('10_free_tutorials') }}</p>
            </div>
          </div>
          <div class="md:w-2/3 w-full text-center">
            <p class="md:text-4xl text-3xl font-['Roboto'] font-semibold dark:text-slate-300">Zero to Hero</p>
            <p class="md:text-sm text-xs font-['Roboto'] font-light dark:text-white">{{ $t('motivational_quotes') }}</p>
            <div class="accordion-group">
              <div class="accordion-reason-learn-with-us bg-rose-400 dark:bg-slate-600 rounded-t-md flex justify-between items-center p-4 mt-5">
                <p class="text-white font-['Open_Sans'] font-semibold">Multi Language Support</p>
                <div class="flex items-center space-x-2">
                  <div class="w-4 h-4 bg-amber-300 rounded-full"></div>
                  <div class="w-4 h-4 bg-sky-300 rounded-full"></div>
                  <div class="w-4 h-4 bg-emerald-300 rounded-full"></div>
                </div>
              </div>
              <div class="accordion-content bg-white dark:bg-slate-800 p-4 border-r border-l border-b border-red-300 dark:border-gray-600" >
                <p class="text-sm font-['Roboto'] font-light dark:text-white">{{ $t('reason_learn_from_us.1') }}</p>
              </div>
            </div>
            <div class="accordion-group">
              <div class="accordion-reason-learn-with-us bg-rose-400 dark:bg-slate-600 rounded-t-md flex justify-between items-center p-4 mt-4">
                <p class="text-white font-['Open_Sans'] font-semibold">Beginner Friendly</p>
                <div class="flex items-center space-x-2">
                  <div class="w-4 h-4 bg-amber-300 rounded-full"></div>
                  <div class="w-4 h-4 bg-sky-300 rounded-full"></div>
                  <div class="w-4 h-4 bg-emerald-300 rounded-full"></div>
                </div>
              </div>
              <div class="accordion-content bg-white dark:bg-slate-800 p-4 border-r border-l border-b border-red-300 dark:border-gray-600">
                <p class="text-sm font-['Roboto'] font-light dark:text-white">{{ $t('reason_learn_from_us.2') }}</p>
              </div>
            </div>
            <div class="accordion-group">
              <div class="accordion-reason-learn-with-us bg-rose-400 dark:bg-slate-600 rounded-t-md flex justify-between items-center p-4 mt-4">
                <p class="text-white font-['Open_Sans'] font-semibold">Easy to Learn</p>
                <div class="flex items-center space-x-2">
                  <div class="w-4 h-4 bg-amber-300 rounded-full"></div>
                  <div class="w-4 h-4 bg-sky-300 rounded-full"></div>
                  <div class="w-4 h-4 bg-emerald-300 rounded-full"></div>
                </div>
              </div>
              <div class="accordion-content bg-white dark:bg-slate-800 p-4 border-r border-l border-b border-red-300 dark:border-gray-600">
                <p class="text-sm font-['Roboto'] font-light dark:text-white">{{ $t('reason_learn_from_us.3') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-delay="600"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          data-aos-anchor-placement="top-center"
          class="relative">
          <img src="/assets/images/carbon.webp" loading="eager" alt="image carbon" class="w-full h-auto" />
          <img src="/assets/images/children-with-a-stick.webp" loading="eager" alt="cute boy with a stick" class="md:w-64 w-40 h-auto absolute bottom-2 right-0">
        </div>
      </div>
    </div>
  </div>
</section>
</template>