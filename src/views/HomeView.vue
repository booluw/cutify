<script setup lang="ts">
import AppButton from '@/components/AppButton.vue';
</script>

<template>
  <main class="">
    <section class="h-[639px] md:h-[680px] bg-primary-100 flex items-start justify-center relative">
      <div class="mt-[112px] md:mt-[108px] md:w-[872px] px-[36px] md:px-0 text-center">
        <h1 class="relative text-[32px] md:text-[54px]">
          <span class="text-primary-600 font-[900]">Discover and book</span>
          for a beauty and wellness service near you.
          <svg
            class="absolute top-[40px] md:top-[65px] w-[225px] md:w-[484px] h-auto"
            viewBox="0 0 484 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M483.504 2.85603C373.412 24.7841 259.361 35.6515 243.574 11.6288C227.788 -12.3939 109.733 30.5037 1.0591 11.6287"
              stroke="#DDC6A6"
              stroke-width="4.01509"
            />
          </svg>
        </h1>

        <p class="text-grey-500 font-[20.59px] mb-5">
          Embrace self-care and indulge in a world of beauty and wellness. Explore our curated
          selection of services and effortlessly book appointments right in your neighborhood.
        </p>

        <router-link to="#search" class="inline-block my-0 mx-auto">
          <AppButton type="solid" size="large">Search and book an appointment</AppButton>
        </router-link>
      </div>

      <img src="@/assets/hero_imgs/hero_line.png" class="hidden md:block absolute md:bottom-[146px] md:left-[416px]" />
      <img src="@/assets/hero_imgs/hero_spa.png" class="absolute top-2 left-[2px] md:top-[12px] md:left-[115.57px]" />
      <img src="@/assets/hero_imgs/hero_comb.png" class="absolute top-[230px] md:top-[178px] left-0" />
      <img src="@/assets/hero_imgs/hero_mua.png" class="w-[140px] md:w-[407.5px] absolute bottom-5 left-5 md:bottom-[58px] md:left-[67px]" />
      <img src="@/assets/hero_imgs/hero_saloon.png" class="w-[140px] md:w-[407.5px] absolute bottom-5 right-5 md:bottom-[57px] md:right-[67px]" />
      <img src="@/assets/hero_imgs/hero_scissors.png" class="absolute top-[200px] right-0 md:top-[146px] md:right-0" />
      <img src="@/assets/hero_imgs/hero_pedicure.png" class="absolute top-2 right-0 md:top-[12px] md:right-[148px]" />
    </section>
  </main>
</template>
