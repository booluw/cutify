<script lang="ts" setup>
defineProps<{
  data: { text: string, user: string, date: string, img: string }
}>()
</script>
<template>
  <div class="relative mb-[50px]">
    <div class="union bg-white border border-[#D3D3D4] rounded rounded-b-[15px] px-[22px] pt-[40px] pb-[80px] font-[500] text-[14px] text-grey-500">
      {{ data.text }}
    </div>
    <div class="absolute -bottom-5 left-6 border-l border-[#D3D3D4] bg-[#F8FCFE] px-4 py-7 rotate-[40deg] rounded"></div>
    <div class="bg-[#F8FCFE] border-t border-[#D3D3D4] absolute -bottom-[42px] left-10 right-0 pt-5 px-3 rounded-l flex items-center gap-2">
      <img :src="data.img" />
      <div class="text-grey-500">
        <h3 class="font-semibold">{{ data.user }}</h3>
        <p class="text-sm">{{ data.date }}</p>
      </div>
    </div>
  </div>
</template>