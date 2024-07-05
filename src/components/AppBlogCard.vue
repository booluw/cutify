<script lang="ts" setup>
import { computed } from 'vue';
import { formatDate } from '@/utils/functions';

const props = defineProps<{
  data: any
}>()

const formattedDate = computed(() => {
  return formatDate(props.data.date)
})

</script>

<template>
  <router-link
    :to="`/datas/${data.id}`"
    class="bg-white border-[0.5px] border-grey-100 rounded overflow-hidden group"
  >
    <img :src="data.jetpack_featured_media_url" class="w-full h-[205px]" />
    <div class="p-4 text-grey flex flex-col justify-between gap-2">
      <h3 class="font-semibold line-clamp-2">{{ data.title.rendered! }}</h3>
      <div class="flex flex-wrap items-center justify-between">
        {{ formattedDate }}
        <svg
          class="transform group-hover:translate-x-2 transition-transform ease-in-out"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.293 17.293L12.707 18.707L19.414 12L12.707 5.29297L11.293 6.70697L15.586 11H6V13H15.586L11.293 17.293Z"
            fill="#57AEDD"
          />
        </svg>
      </div>
    </div>
  </router-link>
</template>