<script lang="ts" setup>
defineProps<{
  type: 'search' | 'text' | 'email' | 'tel'
  placeholder: string
  required?: boolean
}>()

const value = defineModel()
</script>
<template>
  <div class="flex gap-1 items-center bg-white text-grey px-[10px] py-[6px] w-full">
    <span>
      <slot name="icon"></slot>
    </span>
    <input
      :type="type"
      v-model="value"
      :placeholder="placeholder"
      class="outline-none w-full"
      :required="required"
    />
  </div>
</template>
