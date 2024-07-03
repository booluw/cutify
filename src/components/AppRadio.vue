<script lang="ts" setup>
const props = defineProps<{
  id: string
  placeholder: string
}>()

const value = defineModel()

const updateModel = function (e: any) {
  value.value = !value.value
}
</script>
<template>
  <div class="my-[8px]" @click="updateModel">
    <input :id="id" type="radio" class="hidden" v-model="value" />
    <label :for="'#'+id" class="flex gap-[8px] items-center cursor-pointer">
      <div class="border-[3px] border-grey rounded-sm h-[20px] w-[20px] flex items-center justify-center">
        <svg
          class="w-[14px] block"
          viewBox="0 0 10 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.93297 5.51901L1.70697 3.29301L0.292969 4.70701L4.06697 8.48101L9.76897 1.64101L8.23097 0.359009L3.93297 5.51901Z"
            :class="{ 'fill-[#46474B]' : value }"
          />
        </svg>
      </div>
      {{ placeholder }}
    </label>
  </div>
</template>
