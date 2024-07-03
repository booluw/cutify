<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
<template>
  <section>
    <AppHeader />
    <RouterView />
    <AppFooter />
  </section>
</template>