<script lang="ts" setup>
defineProps<{
  data: { heading: string, text: string}
}>()
</script>
<template>
  <div class="flex items-start gap-[24px]">
    <span>
      <slot name="icon"></slot>
    </span>
    <div class="">
      <h3 class="text-[20px] font-semibold mb-2">
        {{ data.heading }}
      </h3>
      <p class="text-grey-500">
        {{ data.text }}
      </p>
    </div>
  </div>
</template>