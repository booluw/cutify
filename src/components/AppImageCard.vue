<script lang="ts" setup>
defineProps<{
  img: string,
  title: string
}>()
</script>
<template>
  <div class="flex gap-[16px] flex-col rounded overflow-hidden text-center">
    <img :src="img" class="w-auto h-[200px] rounded" />
    {{ title }}
  </div>
</template>