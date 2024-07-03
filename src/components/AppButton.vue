<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  mode?: 'submit' | 'button' | 'reset',
  type: 'solid' | 'outline',
  size: 'small' | 'medium' | 'large'
}>()

const btnStyle = computed(() => {
  let classes = '';

  switch (props.size) {
    case 'large':
      classes += 'py-[10px] px-[24px] ';
      break;
  
    default:
      classes += 'py-[10px] px-[24px] ';
      break;
  }

  switch (props.type) {
    case 'outline':
      classes += 'border border-primary-600 text-primary-600 hover:bg-primary-600/10'
      break;
  
    default:
      classes += 'bg-primary text-white hover:shadow-md'
      break;
  }

  return classes;
})

</script>
<template>
  <button class="flex items-center justify-center rounded disabled:opacity-45 disabled:cursor-not-allowed" :class="btnStyle" :type="mode ?? 'button'">
    <slot></slot>
  </button>
</template>