<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
</script>
<template>
  <section class="!overflow-hidden">
    <AppHeader class="md:hidden" />
    <section class="md:h-screen md:overflow-hidden flex flex-col items md:flex-row">
      <div class="md:w-[800px] bg-[url('@/assets/auth_banner.png')] bg-cover md:flex items-center justify-center pt-[52px] pb-[20px] px-[20px] md:py-0 md:px-[84px]">
        <div class="text-white text-center">
          <h2 class="font-black text-[32px] md:text-[93px]">Cutify</h2>
          <p class="leading-[36px] text-[16px]">
            Embrace self-care and indulge in a world of beauty and wellness. Explore our curated selection of services and effortlessly book appointments right in your neighborhood.
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center md:w-full p-[20px] md:py-[70px] md:px-[90px] overflow-auto">
        <RouterView />
      </div>
    </section>
  </section>
</template>