<script lang="ts" setup>
const props = defineProps<{
  type: 'select'
  placeholder: string
  options?: string[] | { label: string, value: string }[]
  required?: boolean
}>()

const value = defineModel()
</script>
<template>
  <div class="flex gap-1 items-center bg-white text-grey px-[10px] py-[6px] cursor-pointer">
    <span>
      <slot name="icon"></slot>
    </span>
    <span class="text-grey/75">
      {{ placeholder }}
    </span>
    <select class="w-full cursor-pointer" v-model="value" :required="required">
      <template v-if="typeof options![0] === 'string'">
        <option v-for="(option, index) in options" :key="index">
          {{ option }}
        </option>
      </template>

      <template v-else-if="typeof options![0] === 'object'">
        <option v-for="(option, index) in options" :key="index" :value="option.value">
          {{ option.label }}
        </option>
      </template>
    </select>
  </div>
</template>
