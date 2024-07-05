<script lang="ts" setup>
import AppButton from '@/components/AppButton.vue'
</script>
<template>
  <section class="h-screen flex flex-col gap-[10px] items-center justify-center">
    <h1 class="text-[32px] fonr-bold">This page is not found.</h1>
    <router-link to="/">
      <AppButton type="solid" size="large">Go Back Home</AppButton>
    </router-link>
  </section>
</template>