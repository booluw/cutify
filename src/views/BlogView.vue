<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { getBlogs } from '@/services/blog'

import AppBlogCard from '@/components/AppBlogCard.vue'
import AppLoader from '@/components/AppLoader.vue'

const loading = ref(true)
const blogs = ref([])

const fetchBlogs = async function () {
  loading.value = true
  
  try {
    const response = await getBlogs()
    blogs.value = response.data
  } catch(error) {
    console.log(error)
  }

  loading.value = false
}

onMounted(() => { fetchBlogs() })

</script>
<template>
  <section class="">
    <section
      class="bg-[url('@/assets/mobile_blog_banner.png')] md:bg-[url('@/assets/blog_banner.png')] bg-cover h-[170px] md:h-[252px] py-[24px] px-[20px] md:py-[64px] md:px-[120px] flex items-center"
    >
      <div class="pl-[88px] relative font-bold text-white text-[20px]">
        Blog
        <div class="bg-white pt-[1px] pr-1 w-[72px] absolute top-[50%] left-0"></div>
      </div>
    </section>
    <section class="py-[24px] px-[20px] md:py-[64px] md:px-[120px]">
      <div class="md:w-[656px] text-center mx-auto my-0">
        <h2 class="text-[32px] font-semibold mb-2">Our Blog: Your Beauty and Wellness Guide</h2>
        <p class="text-grey-500">
          Explore our weekly tips for maintaining gorgeous hair and managing your facial glow. We're
          here to help you master the art of self-care."
        </p>
      </div>

      <AppLoader v-if="loading" />
      <div class="mt-[24px] grid gap-[20px] grid-cols-2 md:grid-cols-4" v-else>
        <AppBlogCard :data="blog" v-for="(blog, index) in blogs" :key="index" />
      </div>
    </section>
  </section>
</template>
