<script setup lang="ts">
import { reactive } from 'vue'

import AppButton from '@/components/AppButton.vue'
import AppSearchPill from '@/components/AppSearchPill.vue'

import AppGroupInput from '@/components/AppGroupInput.vue'
import AppInputAndSelect from '@/components/AppInputAndSelect.vue'

import AppImageCard from '@/components/AppImageCard.vue'
import AppServiceCard from '@/components/AppServiceCard.vue'
import AppFeatureCard from '@/components/AppFeatureCard.vue'
import AppTestimonialCard from '@/components/AppTestimonialCard.vue'

import ImgBarber from '@/assets/categories/barber.png'
import ImgGym from '@/assets/categories/gym.png'
import ImgMua from '@/assets/categories/mua.png'
import ImgSaloon from '@/assets/categories/saloon.png'
import ImgSpa from '@/assets/categories/spa.png'
import ImgFacial from '@/assets/categories/facial.png'
import ImgPedicure from '@/assets/categories/pedicure.png'
import ImgHairWash from '@/assets/categories/wash_hair.png'

import ImgUser1 from '@/assets/user_1.png'
import ImgUser2 from '@/assets/user_2.png'

const searchQuery = reactive({
  location: '',
  date: '',
  query: ''
})

const categories = [
  {
    title: 'Hair',
    img: ImgSaloon
  },
  {
    title: 'Barbing Salon',
    img: ImgBarber
  },
  {
    title: 'Spa',
    img: ImgSpa
  },
  {
    title: 'Gym center',
    img: ImgGym
  },
  {
    title: 'Make up Studio',
    img: ImgMua
  }
]

const services = [
  {
    img: ImgFacial,
    location: 'No 26. St Ives street. Lagos island. Lagos.',
    rating: 5.0,
    reviews: 100,
    name: 'Hollaja MakeUp studio',
    id: 3
  },
  {
    img: ImgMua,
    location: 'No 26. St Ives street. Lagos island. Lagos.',
    rating: 5.0,
    reviews: 100,
    name: 'Hollaja MakeUp studio',
    id: 3
  },
  {
    img: ImgSpa,
    location: 'No 26. St Ives street. Lagos island. Lagos.',
    rating: 5.0,
    reviews: 100,
    name: 'Hollaja MakeUp studio',
    id: 3
  },
  {
    img: ImgBarber,
    location: 'No 26. St Ives street. Lagos island. Lagos.',
    rating: 5.0,
    reviews: 100,
    name: 'Hollaja MakeUp studio',
    id: 2
  },
  {
    img: ImgPedicure,
    location: 'No 26. St Ives street. Lagos island. Lagos.',
    rating: 5.0,
    reviews: 100,
    name: 'Hollaja MakeUp studio',
    id: 3
  },
  {
    img: ImgHairWash,
    location: 'No 26. St Ives street. Lagos island. Lagos.',
    rating: 5.0,
    reviews: 100,
    name: 'MOJ Spa Center',
    id: 1
  }
]

const testimonials = [
  {
    text: 'I love how convenient it is to book my favorite spa treatments through this platform. The service providers are top-notch!',
    user: 'Jessica T.',
    date: '12th may, 2023',
    img: ImgUser2
  },
  {
    text: 'I love how convenient it is to book my favorite spa treatments through this platform. The service providers are top-notch!',
    user: 'Jessica T.',
    date: '12th may, 2023',
    img: ImgUser1
  },
  {
    text: 'I love how convenient it is to book my favorite spa treatments through this platform. The service providers are top-notch!',
    user: 'Jessica T.',
    date: '12th may, 2023',
    img: ImgUser2
  }
]
</script>

<template>
  <main class="">
    <section class="h-[639px] md:h-[680px] bg-primary-100 flex items-start justify-center relative">
      <div class="mt-[112px] md:mt-[108px] md:w-[872px] px-[36px] md:px-0 text-center">
        <h1 class="relative text-[32px] md:text-[54px]">
          <span class="text-primary-600 font-[900]">Discover and book</span>
          for a beauty and wellness service near you.
          <svg
            class="absolute top-[40px] md:top-[65px] w-[225px] md:w-[484px] h-auto"
            viewBox="0 0 484 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M483.504 2.85603C373.412 24.7841 259.361 35.6515 243.574 11.6288C227.788 -12.3939 109.733 30.5037 1.0591 11.6287"
              stroke="#DDC6A6"
              stroke-width="4.01509"
            />
          </svg>
        </h1>

        <p class="text-grey-500 font-[20.59px] mb-5">
          Embrace self-care and indulge in a world of beauty and wellness. Explore our curated
          selection of services and effortlessly book appointments right in your neighborhood.
        </p>

        <router-link to="#search" class="inline-block my-0 mx-auto">
          <AppButton type="solid" size="large">Search and book an appointment</AppButton>
        </router-link>
      </div>

      <img
        src="@/assets/hero_imgs/hero_line.png"
        class="hidden md:block absolute md:bottom-[146px] md:left-[416px]"
      />
      <img
        src="@/assets/hero_imgs/hero_spa.png"
        class="absolute top-2 left-[2px] md:top-[12px] md:left-[115.57px]"
      />
      <img
        src="@/assets/hero_imgs/hero_comb.png"
        class="absolute top-[230px] md:top-[178px] left-0"
      />
      <img
        src="@/assets/hero_imgs/hero_mua.png"
        class="w-[140px] md:w-[407.5px] absolute bottom-5 left-5 md:bottom-[58px] md:left-[67px]"
      />
      <img
        src="@/assets/hero_imgs/hero_saloon.png"
        class="w-[140px] md:w-[407.5px] absolute bottom-5 right-5 md:bottom-[57px] md:right-[67px]"
      />
      <img
        src="@/assets/hero_imgs/hero_scissors.png"
        class="absolute top-[200px] right-0 md:top-[146px] md:right-0"
      />
      <img
        src="@/assets/hero_imgs/hero_pedicure.png"
        class="absolute top-2 right-0 md:top-[12px] md:right-[148px]"
      />
    </section>

    <section class="bg-primary-600 text-white py-[24px] px-[20px] md:px-0 md:py-[64px]">
      <div class="md:px-[120px]">
        <h2 class="text-center font-semibold text-[32px]">
          Find beauty and wellness services near you
        </h2>
        <form
          @submit.prevent
          class="flex flex-col md:flex-row gap-[16px] items-start md:items-stretch md:w-[974px] mt-[48px] mx-auto"
        >
          <div
            class="px-4 flex gap-3 md:gap-0 flex-col md:flex-row md:items-center justify-end rounded overflow-hidden bg-white border border-grey-100 w-full py-[10px]"
          >
            <AppInputAndSelect
              v-model="searchQuery.location"
              placeholder="Location:"
              type="select"
              :options="['Lagos', 'Abuja', 'Sokoto']"
              class="md:w-1/3 pb-4 md:pb-0 border-b md:border-b-0 md:border-r-2 border-gray-400"
            >
              <template #icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 11.25C13.6569 11.25 15 9.90685 15 8.25C15 6.59315 13.6569 5.25 12 5.25C10.3431 5.25 9 6.59315 9 8.25C9 9.90685 10.3431 11.25 12 11.25Z"
                    fill="white"
                    stroke="#6B6C6F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.9999 11.25C15.7499 16.5 11.9999 22.5 11.9999 22.5C11.9999 22.5 8.24994 16.5 5.99994 11.25C3.74994 6 7.49994 1.5 11.9999 1.5C16.4999 1.5 20.2499 6 17.9999 11.25Z"
                    stroke="#6B6C6F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </template>
            </AppInputAndSelect>
            <AppInputAndSelect
              v-model="searchQuery.date"
              placeholder="Date:"
              type="select"
              :options="[
                'Any day',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
              ]"
              class="md:w-1/3 pb-4 md:pb-0 border-b md:border-b-0 md:border-r-2 border-gray-400"
            >
              <template #icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 11.5H8.5V12.5H7.5V11.5ZM7.5 15.5H8.5V16.5H7.5V15.5ZM11.5 11.5H12.5V12.5H11.5V11.5ZM11.5 15.5H12.5V16.5H11.5V15.5ZM15.5 11.5H16.5V12.5H15.5V11.5ZM15.5 15.5H16.5V16.5H15.5V15.5Z"
                    fill="white"
                    stroke="#6B6C6F"
                  />
                  <path
                    d="M16.5 4V4.5H17H19C19.8269 4.5 20.5 5.17314 20.5 6V20C20.5 20.8269 19.8269 21.5 19 21.5H5C4.17314 21.5 3.5 20.8269 3.5 20V6C3.5 5.17314 4.17314 4.5 5 4.5H7H7.5V4V2.5H8.5V4V4.5H9H15H15.5V4V2.5H16.5V4ZM19.5 7.99996L19.5 7.5H19H5H4.5V8V20V20.5H5H19.001H19.501L19.501 20L19.5 7.99996Z"
                    fill="#6B6C6F"
                    stroke="#6B6C6F"
                  />
                </svg>
              </template>
            </AppInputAndSelect>
            <AppGroupInput
              v-model="searchQuery.query"
              type="search"
              placeholder="Search for service. E.g Braids"
              class="md:w-2/4"
              required
            >
              <template #icon>
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9376 13.6455L13.2506 13.9584L17.293 18.0009L17.9999 17.294L13.9574 13.2516L13.6444 12.9385L13.9172 12.5899C14.9424 11.2795 15.4996 9.66376 15.5 8L12.9376 13.6455ZM12.9376 13.6455L12.589 13.9181M12.9376 13.6455L12.589 13.9181M12.589 13.9181C11.2787 14.9428 9.66333 15.4996 8 15.5L12.589 13.9181ZM7.9999 15.5C3.86509 15.4999 0.5 12.1348 0.5 8C0.5 3.86514 3.86514 0.5 8 0.5C12.1348 0.5 15.4999 3.86508 15.5 7.99988L7.9999 15.5ZM14.5 8C14.5 4.41486 11.5851 1.5 8 1.5C4.41486 1.5 1.5 4.41486 1.5 8C1.5 11.5851 4.41486 14.5 8 14.5C11.5851 14.5 14.5 11.5851 14.5 8Z"
                    fill="white"
                    stroke="#6B6C6F"
                  />
                </svg>
              </template>
            </AppGroupInput>
          </div>
          <AppButton type="solid" mode="submit" size="large">Search</AppButton>
        </form>

        <div class="flex gap-[12px] items-center justify-center mt-[24px]">
          <AppSearchPill @click="searchQuery.query = 'Hair salon'">Hair salon</AppSearchPill>
          <AppSearchPill @click="searchQuery.query = 'Knotless braids'"
            >Knotless braids</AppSearchPill
          >
          <AppSearchPill @click="searchQuery.query = 'Hair treatment'"
            >Hair treatment</AppSearchPill
          >
        </div>
      </div>

      <div class="mt-[48px] md:pl-[120px]">
        <div class="flex items-center justify-between md:pr-[120px] mb-[16px]">
          <h2 class="">Categories</h2>
          <div class="flex gap-4">
            <button
              class="w-[24px] h-[24px] flex items-center justify-center bg-white/20 rounded-full"
            >
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.29294 0.29303L0.585938 6.00003L6.29294 11.707L7.70694 10.293L3.41394 6.00003L7.70694 1.70703L6.29294 0.29303Z"
                  fill="white"
                />
              </svg>
            </button>

            <button
              class="w-[24px] h-[24px] flex items-center justify-center bg-white/20 rounded-full"
            >
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.70697 11.707L7.41397 6.00003L1.70697 0.29303L0.292969 1.70703L4.58597 6.00003L0.292969 10.293L1.70697 11.707Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="flex flex-col md:flex-row gap-[16px] overflow-auto scrollbar scrollbar-transparent"
        >
          <AppImageCard
            class="flex-shrink-0 md:w-[320px]"
            :img="category.img"
            :title="category.title"
            v-for="(category, index) in categories"
            :key="index"
          />
        </div>
      </div>
    </section>

    <section class="bg-white text-grey py-[24px] px-[20px] md:py-[64px] md:px-[120px]">
      <div class="md:w-[737px]">
        <h2 class="font-semibold text-[32px]">Explore popular service on Cutify</h2>
        <p class="">
          Check our top-rated services for an exceptional beauty and wellness experience. From
          relaxing spa treatments to expert styling.
        </p>
      </div>

      <div class="flex flex-col md:flex-row justify-between gap-2 mt-2">
        <p class="">
          Have a service you want to onboard?
          <router-link to="/register" class="text-primary">Sign up as a professional</router-link>
        </p>

        <router-link to="" class="text-primary font-semibold">See More &rarr;</router-link>
      </div>

      <div class="mt-[24px] grid gap-[20px] grid-cols-2 md:grid-cols-4">
        <AppServiceCard
          :service
          v-for="(service, index) in services"
          :key="index"
          class="first-of-type:col-span-2 last-of-type:col-span-2"
        />
      </div>
    </section>

    <section class="bg-white text-grey py-[24px] px-[20px] md:py-[64px] md:px-[120px] overflow-x-hidden">
      <div class="text-center relative">
        <h2 class="font-semibold text-[32px]">
          Why Cutify service book app <span class="text-primary">is perfect for you</span>
        </h2>
        <svg
          class="absolute top-14 -right-52 md:top-3 md:-right-8"
          width="482"
          height="54"
          viewBox="0 0 482 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M481.179 33.6683C374.544 -1.63034 262.32 -14.765 243.005 33.9003C223.69 82.5656 112.215 6.37981 0.951175 51.6712"
            stroke="#DDC6A6"
            stroke-width="4.01509"
          />
        </svg>
      </div>

      <div class="mt-[46px] grid gap-[24px] md:gap-[90px] grid-cols-1 md:grid-cols-2">
        <AppFeatureCard
          :data="{
            heading: 'Easy booking',
            text: 'Say goodbye to long wait times and phone calls. Browse and book beauty and wellness services with ease  with our user-friendly interface. Book your favorite services anytime, anywhere'
          }"
        >
          <template #icon>
            <svg
              width="94"
              height="105"
              viewBox="0 0 104 116"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.2974 84.8905L74.762 94.1017C74.762 94.1017 93.1337 76.1988 99 70.4845M87.1027 67.5577C83.5931 65.3278 79.3739 64.0354 74.8 64.0354C61.9144 64.0354 51.3602 74.5896 51.3602 87.4752C51.3602 100.373 61.9144 110.915 74.8 110.915C87.6222 110.915 98.1258 100.475 98.2398 87.6779M41.5788 96.4584H11.0944C7.72409 96.4584 5 93.7343 5 90.364V23.2881C5 19.9305 7.72409 17.1938 11.0944 17.1938H84.2646C87.6349 17.1938 90.3589 19.9305 90.3589 23.2881C90.3589 23.2881 90.3589 33.6397 90.3589 42.2807M5.05068 35.5402C5.05068 35.5402 69.998 35.5402 87.5842 35.5402M47.6782 5C47.6782 5 47.6782 14.1175 47.6782 16.5856M72.0683 5C72.0683 5 72.0683 14.1175 72.0683 16.5856M23.2881 5C23.2881 5 23.2881 14.1175 23.2881 16.5856"
                stroke="#4991B8"
                stroke-width="8.21054"
                stroke-linecap="round"
              />
            </svg>
          </template>
        </AppFeatureCard>

        <AppFeatureCard
          :data="{
            heading: 'Wide Range of Services',
            text: 'Discover a diverse array of beauty and wellness services all in one place. We have everything you need to look and feel your best.'
          }"
        >
          <template #icon>
            <svg
              width="94"
              height="94"
              viewBox="0 0 94 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_176_2932)">
                <path
                  d="M62.6668 34.4666C64.3973 34.4666 65.8001 33.0638 65.8001 31.3333C65.8001 29.6028 64.3973 28.2 62.6668 28.2C60.9363 28.2 59.5334 29.6028 59.5334 31.3333C59.5334 33.0638 60.9363 34.4666 62.6668 34.4666Z"
                  fill="#4991B8"
                />
                <path
                  d="M40.7333 59.5333C40.7333 62.9957 37.929 65.8 34.4667 65.8C31.0043 65.8 28.2 62.9957 28.2 59.5333C28.2 56.071 31.0043 53.2667 34.4667 53.2667C37.929 53.2667 40.7333 56.071 40.7333 59.5333ZM68.9333 58.4837V60.583C68.9333 61.3381 68.3975 61.9836 67.6549 62.1215L64.5592 62.7011C63.2714 62.9424 62.322 63.9733 62.0619 65.2579C61.8457 66.3264 61.57 67.3761 61.2347 68.3975C60.8274 69.6383 61.1345 70.9951 62.1246 71.8442L64.5028 73.884C65.0762 74.3759 65.2172 75.2031 64.8381 75.858L63.7884 77.6753C63.4124 78.3271 62.6228 78.6216 61.9115 78.3709L58.9255 77.3213C57.6941 76.8889 56.3624 77.3025 55.4913 78.2769C54.7738 79.0822 54.0093 79.8436 53.204 80.5643C52.2295 81.4353 51.8159 82.7639 52.2483 83.9984L53.298 86.9845C53.5487 87.6957 53.2573 88.4853 52.6024 88.8613L50.7851 89.911C50.1333 90.287 49.303 90.146 48.8111 89.5757L46.7713 87.1975C45.9221 86.2074 44.5654 85.9003 43.3246 86.3077C42.3031 86.6429 41.2566 86.9187 40.185 87.1349C38.9003 87.3949 37.8695 88.3443 37.6282 89.6321L37.0485 92.7279C36.9169 93.4642 36.2715 94 35.5163 94H33.417C32.6619 94 32.0164 93.4642 31.8785 92.7216L31.2989 89.6259C31.0576 88.3381 30.0267 87.3886 28.7421 87.1286C27.6736 86.9124 26.6239 86.6367 25.6025 86.3014C24.3617 85.8941 23.0049 86.2011 22.1558 87.1912L20.116 89.5695C19.6241 90.1429 18.7969 90.2839 18.142 89.9047L16.3247 88.8551C15.6729 88.4791 15.3784 87.6895 15.6291 86.9782L16.6787 83.9921C17.1111 82.7576 16.6975 81.4291 15.7231 80.558C14.9178 79.8405 14.1564 79.0759 13.4357 78.2706C12.5647 77.2962 11.2361 76.8826 10.0016 77.315L7.01867 78.3709C6.3074 78.6216 5.5178 78.3302 5.1418 77.6753L4.09213 75.858C3.71613 75.2062 3.85713 74.3759 4.4274 73.884L6.8056 71.8442C7.79573 70.9951 8.1028 69.6383 7.69547 68.3975C7.3602 67.3761 7.08447 66.3295 6.86827 65.2579C6.6082 63.9733 5.6588 62.9424 4.371 62.7011L1.27527 62.1215C0.5358 61.9836 0 61.3381 0 60.583V58.4837C0 57.7285 0.5358 57.083 1.2784 56.9452L4.37413 56.3655C5.66193 56.1243 6.61133 55.0934 6.8714 53.8087C7.0876 52.7403 7.36333 51.6906 7.6986 50.6691C8.10593 49.4283 7.79887 48.0716 6.80873 47.2225L4.43053 45.1827C3.85713 44.6907 3.71613 43.8635 4.09527 43.2087L5.14493 41.3913C5.52093 40.7396 6.31053 40.4451 7.0218 40.6957L10.0079 41.7454C11.2424 42.1778 12.5709 41.7642 13.442 40.7897C14.1595 39.9844 14.9241 39.2231 15.7293 38.5024C16.7038 37.6313 17.1174 36.3028 16.685 35.0683L15.6291 32.0853C15.3784 31.3741 15.6698 30.5844 16.3247 30.2084L18.142 29.1588C18.7937 28.7828 19.6241 28.9238 20.116 29.4941L22.1558 31.8723C23.0049 32.8624 24.3617 33.1695 25.6025 32.7621C26.6239 32.4269 27.6736 32.1511 28.7421 31.9349C30.0267 31.6749 31.0576 30.7255 31.2989 29.4377L31.8785 26.3419C32.0164 25.6024 32.6619 25.0667 33.417 25.0667H35.5163C36.2715 25.0667 36.9169 25.6025 37.0548 26.3451L37.6345 29.4408C37.8757 30.7286 38.9066 31.678 40.1913 31.9381C41.2597 32.1543 42.3094 32.43 43.3309 32.7653C44.5717 33.1726 45.9284 32.8655 46.7775 31.8754L48.8173 29.4972C49.3093 28.9238 50.1365 28.7828 50.7913 29.1619L52.6087 30.2116C53.2604 30.5876 53.5549 31.3772 53.3043 32.0885L52.2546 35.0714C51.8222 36.3059 52.2358 37.6344 53.2103 38.5055C54.0155 39.223 54.7769 39.9876 55.4976 40.7929C56.3687 41.7673 57.6972 42.1809 58.9317 41.7485L61.9178 40.6989C62.6291 40.4482 63.4187 40.7396 63.7947 41.3945L64.8443 43.2118C65.2203 43.8635 65.0793 44.6938 64.5091 45.1858L62.1309 47.2256C61.1407 48.0747 60.8337 49.4315 61.241 50.6723C61.5763 51.6937 61.852 52.7434 62.0682 53.8119C62.3283 55.0965 63.2777 56.1274 64.5655 56.3687L67.6612 56.9483C68.3975 57.083 68.9333 57.7285 68.9333 58.4837ZM53.2667 59.5333C53.2667 49.1495 44.8505 40.7333 34.4667 40.7333C24.0828 40.7333 15.6667 49.1495 15.6667 59.5333C15.6667 69.9172 24.0828 78.3333 34.4667 78.3333C44.8505 78.3333 53.2667 69.9172 53.2667 59.5333Z"
                  fill="#4991B8"
                />
                <path
                  d="M92.7217 28.7452L89.0369 28.0527C88.0812 27.8741 87.3668 27.1159 87.1694 26.1602C86.9845 25.2703 86.7527 24.3961 86.4769 23.5439C86.1761 22.6195 86.4143 21.6137 87.1506 20.9808L89.9894 18.5493C90.5628 18.0574 90.7038 17.2302 90.3247 16.5753L89.275 14.758C88.899 14.1063 88.1094 13.8117 87.3981 14.0624L83.8637 15.3063C82.9488 15.6291 81.9555 15.3314 81.3069 14.6076C80.7022 13.9339 80.063 13.2947 79.3893 12.69C78.6655 12.0414 78.3679 11.0481 78.6906 10.1332L79.9345 6.5988C80.1852 5.88753 79.8938 5.09793 79.2389 4.72193L77.4216 3.67227C76.7699 3.29627 75.9395 3.43727 75.4476 4.00753L73.013 6.84633C72.3801 7.58267 71.3743 7.8208 70.4499 7.52C69.5977 7.24427 68.7235 7.0124 67.8336 6.82753C66.8811 6.63013 66.1228 5.91573 65.9411 4.96007L65.2486 1.27527C65.117 0.5358 64.4715 0 63.7164 0H61.6171C60.8619 0 60.2165 0.5358 60.0786 1.2784L59.3861 4.9632C59.2075 5.91887 58.4493 6.63327 57.4936 6.83067C56.6037 7.01553 55.7295 7.2474 54.8773 7.52313C53.9529 7.82393 52.9471 7.5858 52.3142 6.84947L49.8827 4.01067C49.3908 3.43727 48.5636 3.29627 47.9087 3.6754L46.0914 4.72507C45.4397 5.10107 45.1451 5.89067 45.3958 6.60193L46.6397 10.1363C46.9625 11.0513 46.6648 12.0445 45.941 12.6931C45.2673 13.2979 44.6281 13.9371 44.0234 14.6107C43.3748 15.3345 42.3815 15.6322 41.4666 15.3095L37.9322 14.0655C37.2209 13.8149 36.4313 14.1063 36.0553 14.7611L35.0057 16.5785C34.6297 17.2302 34.7707 18.0605 35.3409 18.5525L35.648 18.8157C39.3547 18.8783 42.5257 21.5323 43.2119 25.1889L43.3999 26.1853L44.0547 25.4176C45.4929 23.7444 47.5108 22.8295 49.5913 22.7198C52.3988 18.4741 57.1991 15.6667 62.6667 15.6667C71.3179 15.6667 78.3334 22.6822 78.3334 31.3333C78.3334 36.801 75.5259 41.6013 71.2803 44.4025C71.1706 46.483 70.2588 48.5009 68.5856 49.9359L67.8148 50.5939L68.8112 50.7819C72.4678 51.4681 75.1217 54.6391 75.1844 58.3458L75.4476 58.6529C75.9395 59.2263 76.7667 59.3673 77.4216 58.9881L79.2389 57.9385C79.8907 57.5625 80.1852 56.7729 79.9345 56.0616L78.6906 52.5272C78.3679 51.6123 78.6655 50.619 79.3893 49.9704C80.063 49.3657 80.7022 48.7265 81.3069 48.0528C81.9555 47.329 82.9488 47.0313 83.8637 47.3541L87.3981 48.598C88.1094 48.8487 88.899 48.5573 89.275 47.9024L90.3247 46.0851C90.7007 45.4333 90.5597 44.603 89.9894 44.1111L87.1506 41.6765C86.4143 41.0435 86.1761 40.0377 86.4769 39.1134C86.7527 38.2611 86.9845 37.3869 87.1694 36.4971C87.3668 35.5445 88.0812 34.7863 89.0369 34.6045L92.7217 33.9121C93.4643 33.7836 94.0001 33.1381 94.0001 32.383V30.2837C94.0001 29.5285 93.4643 28.8831 92.7217 28.7452Z"
                  fill="#4991B8"
                />
              </g>
              <defs>
                <clipPath id="clip0_176_2932">
                  <rect width="94" height="94" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </template>
        </AppFeatureCard>

        <AppFeatureCard
          :data="{
            heading: 'Expert Professionals',
            text: 'Connect with top professionals who are dedicated to providing top-notch services tailored to your preferences. '
          }"
        >
          <template #icon>
            <svg
              width="94"
              height="94"
              viewBox="0 0 94 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M65.0323 43.2713C67.4178 39.2061 68.4479 34.4874 67.9738 29.798C67.2727 22.8106 63.3717 16.634 56.9953 12.408L52.6674 18.9331C57.0502 21.8393 59.7174 25.9792 60.1796 30.5813C60.3927 32.7202 60.1264 34.8797 59.4001 36.9027C58.6738 38.9258 57.5058 40.7615 55.9809 42.2765L51.3123 46.9451L57.6494 48.8055C74.2248 53.6622 74.4167 70.3315 74.4167 70.5H82.25C82.25 63.493 78.5057 49.8004 65.0323 43.2713Z"
                fill="#4991B8"
              />
              <path
                d="M37.2084 47.0001C45.8485 47.0001 52.875 39.9736 52.875 31.3334C52.875 22.6932 45.8485 15.6667 37.2084 15.6667C28.5682 15.6667 21.5417 22.6932 21.5417 31.3334C21.5417 39.9736 28.5682 47.0001 37.2084 47.0001ZM37.2084 23.5001C41.5285 23.5001 45.0417 27.0133 45.0417 31.3334C45.0417 35.6535 41.5285 39.1667 37.2084 39.1667C32.8883 39.1667 29.375 35.6535 29.375 31.3334C29.375 27.0133 32.8883 23.5001 37.2084 23.5001ZM43.0834 50.9167H31.3334C18.3731 50.9167 7.83337 61.4565 7.83337 74.4167V78.3334H15.6667V74.4167C15.6667 65.7766 22.6932 58.7501 31.3334 58.7501H43.0834C51.7235 58.7501 58.75 65.7766 58.75 74.4167V78.3334H66.5834V74.4167C66.5834 61.4565 56.0436 50.9167 43.0834 50.9167Z"
                fill="#4991B8"
              />
            </svg>
          </template>
        </AppFeatureCard>

        <AppFeatureCard
          :data="{
            heading: 'Personalized Experience',
            text: 'Customize your appointments according to your schedule, preferences, and desired treatments. Enjoy a personalized experience that caters to your individual needs.'
          }"
        >
          <template #icon>
            <svg
              width="94"
              height="94"
              viewBox="0 0 94 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47 7.83325C43.1268 7.83325 39.3405 8.98179 36.1201 11.1336C32.8996 13.2855 30.3896 16.344 28.9074 19.9224C27.4251 23.5008 27.0373 27.4383 27.793 31.2371C28.5486 35.0359 30.4137 38.5253 33.1525 41.2641C35.8913 44.0029 39.3807 45.868 43.1795 46.6236C46.9783 47.3793 50.9158 46.9914 54.4942 45.5092C58.0726 44.027 61.1311 41.517 63.283 38.2965C65.4348 35.076 66.5833 31.2898 66.5833 27.4166C66.5833 22.2228 64.5201 17.2417 60.8475 13.5691C57.1749 9.89649 52.1938 7.83325 47 7.83325ZM47 39.1666C44.6761 39.1666 42.4043 38.4775 40.472 37.1864C38.5398 35.8952 37.0337 34.0601 36.1444 31.9131C35.2551 29.7661 35.0224 27.4036 35.4758 25.1243C35.9291 22.845 37.0482 20.7513 38.6915 19.1081C40.3348 17.4648 42.4284 16.3457 44.7077 15.8924C46.987 15.439 49.3495 15.6717 51.4965 16.561C53.6436 17.4503 55.4787 18.9564 56.7698 20.8886C58.0609 22.8209 58.75 25.0927 58.75 27.4166C58.75 30.5329 57.5121 33.5215 55.3085 35.7251C53.105 37.9286 50.1163 39.1666 47 39.1666ZM82.25 82.2499V78.3333C82.25 71.0619 79.3615 64.0884 74.2198 58.9467C69.0782 53.8051 62.1047 50.9166 54.8333 50.9166H39.1667C31.8953 50.9166 24.9218 53.8051 19.7802 58.9467C14.6385 64.0884 11.75 71.0619 11.75 78.3333V82.2499H19.5833V78.3333C19.5833 73.1394 21.6466 68.1583 25.3192 64.4857C28.9917 60.8132 33.9728 58.7499 39.1667 58.7499H54.8333C60.0272 58.7499 65.0083 60.8132 68.6808 64.4857C72.3534 68.1583 74.4167 73.1394 74.4167 78.3333V82.2499H82.25Z"
                fill="#4991B8"
              />
            </svg>
          </template>
        </AppFeatureCard>

        <AppFeatureCard
          :data="{
            heading: 'Convenient Reminders',
            text: 'Never miss an appointment again with our convenient reminder notifications. Stay organized and keep track of your upcoming beauty and wellness sessions effortlessly.'
          }"
        >
          <template #icon>
            <svg
              width="94"
              height="94"
              viewBox="0 0 94 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M74.4167 53.2118V39.1666C74.4167 26.5667 65.8587 15.9525 54.2654 12.7604C53.1178 9.86992 50.3135 7.83325 47 7.83325C43.6865 7.83325 40.8822 9.86992 39.7346 12.7604C28.1413 15.9564 19.5833 26.5667 19.5833 39.1666V53.2118L12.8976 59.8975C12.5332 60.2606 12.2442 60.6922 12.0472 61.1674C11.8503 61.6427 11.7493 62.1522 11.75 62.6666V70.4999C11.75 71.5387 12.1627 72.5349 12.8972 73.2694C13.6317 74.0039 14.6279 74.4166 15.6667 74.4166H78.3333C79.3721 74.4166 80.3683 74.0039 81.1028 73.2694C81.8374 72.5349 82.25 71.5387 82.25 70.4999V62.6666C82.2507 62.1522 82.1497 61.6427 81.9528 61.1674C81.7558 60.6922 81.4668 60.2606 81.1024 59.8975L74.4167 53.2118ZM74.4167 66.5832H19.5833V64.2881L26.2691 57.6023C26.6335 57.2392 26.9225 56.8076 27.1195 56.3324C27.3164 55.8572 27.4174 55.3477 27.4167 54.8333V39.1666C27.4167 28.3683 36.2018 19.5833 47 19.5833C57.7982 19.5833 66.5833 28.3683 66.5833 39.1666V54.8333C66.5833 55.8751 66.9946 56.8699 67.7309 57.6023L74.4167 64.2881V66.5832ZM47 86.1666C49.4256 86.1696 51.7919 85.4169 53.7699 84.013C55.748 82.6092 57.2395 80.6239 58.0372 78.3333H35.9628C36.7605 80.6239 38.252 82.6092 40.2301 84.013C42.2081 85.4169 44.5744 86.1696 47 86.1666Z"
                fill="#4991B8"
              />
            </svg>
          </template>
        </AppFeatureCard>

        <AppFeatureCard
          :data="{
            heading: 'Secure Payment',
            text: 'Experience worry-free transactions with our secure payment options. Your financial information is protected, allowing you to focus solely on your self-care journey.'
          }"
        >
          <template #icon>
            <svg
              width="94"
              height="94"
              viewBox="0 0 94 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M62.6667 47H70.5001V62.6667H62.6667V47Z" fill="#4991B8" />
              <path
                d="M78.3333 27.4167V19.5833C78.3333 15.2632 74.82 11.75 70.4999 11.75H19.5833C13.1051 11.75 7.83325 17.0218 7.83325 23.5V70.5C7.83325 79.1206 14.8598 82.25 19.5833 82.25H78.3333C82.6533 82.25 86.1666 78.7367 86.1666 74.4167V35.25C86.1666 30.9299 82.6533 27.4167 78.3333 27.4167ZM19.5833 19.5833H70.4999V27.4167H19.5833C18.5748 27.3716 17.6226 26.9392 16.9249 26.2096C16.2272 25.48 15.8379 24.5095 15.8379 23.5C15.8379 22.4905 16.2272 21.52 16.9249 20.7904C17.6226 20.0608 18.5748 19.6284 19.5833 19.5833ZM78.3333 74.4167H19.6303C17.8208 74.3697 15.6666 73.6529 15.6666 70.5V34.5254C16.8964 34.968 18.2007 35.25 19.5833 35.25H78.3333V74.4167Z"
                fill="#4991B8"
              />
            </svg>
          </template>
        </AppFeatureCard>
      </div>

      <div class="flex items-center justify-center mt-[48px]">
        <router-link to="/register">
          <AppButton type="solid" size="large">Try Cutify Now</AppButton>
        </router-link>
      </div>
    </section>

    <section class="md:relative">
      <div class="md:absolute md:top-0 md:bottom-0 md:right-0 md:left-0 flex justify-center px-[15px] md:px-0">
        <div class="md:w-[1296px] rounded bg-[#F8FCFE] p-[20px] md:p-[48px] md:pt-[72px] relative flex flex-col md:flex-row">
          <div class="md:w-[330px] relative">
            <h2 class="text-[32px] font-semibold">What people are saying about us?</h2>
            <p class="text-grey-500 mt-2">
              Check out what customers and professionals are happily sharing about their Cutify
              experiences.
            </p>
            <div class="mt-3 text-center md:text-right">
              <img src="@/assets/dashed_arrow.png" class="inline" />
            </div>
          </div>
          <div class="md:w-full">
            <div class="flex justify-end">
              <svg
                width="33"
                height="26"
                viewBox="0 0 33 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0059 7.17766C18.0059 5.20466 18.6679 3.62366 19.9939 2.43466C21.3199 1.24466 22.9709 0.649658 24.9409 0.649658C27.4579 0.649658 29.4289 1.44866 30.8569 3.04666C32.2849 4.64366 32.9999 6.76966 32.9999 9.42166C32.9999 12.1407 32.5759 14.4537 31.7249 16.3577C30.8749 18.2607 29.8559 19.8407 28.6639 21.1007C27.4759 22.3587 26.2339 23.3447 24.9409 24.0587C23.6499 24.7727 22.5279 25.2977 21.5759 25.6397L18.3109 20.1317C19.6709 19.5867 20.8279 18.7197 21.7789 17.5297C22.7319 16.3397 23.2749 15.0647 23.4119 13.7057C22.0529 13.7057 20.8099 13.1087 19.6879 11.9197C18.5659 10.7297 18.0059 9.14866 18.0059 7.17766ZM0.358887 7.17766C0.358887 5.20466 1.02189 3.62366 2.34789 2.43466C3.67389 1.24366 5.32389 0.649658 7.29489 0.649658C9.81289 0.649658 11.7829 1.44866 13.2109 3.04666C14.6399 4.64366 15.3539 6.76966 15.3539 9.42166C15.3539 12.1407 14.9299 14.4537 14.0789 16.3577C13.2289 18.2607 12.2099 19.8407 11.0189 21.1007C9.83089 22.3587 8.58789 23.3447 7.29489 24.0587C6.00389 24.7727 4.88289 25.2977 3.92989 25.6397L0.665887 20.1317C2.02589 19.5867 3.18189 18.7197 4.13289 17.5297C5.08589 16.3397 5.62989 15.0647 5.76589 13.7057C4.40689 13.7057 3.16389 13.1087 2.04289 11.9197C0.919887 10.7297 0.358887 9.14866 0.358887 7.17766Z"
                  fill="#909193"
                />
              </svg>
            </div>

            <div class="my-[24px] flex gap-[15px] flex-col md:flex-row">
              <AppTestimonialCard :data v-for="(data, index) in testimonials" :key="index" />
            </div>
          </div>
        </div>
      </div>
      <svg
        class="hidden md:block w-full h-auto"
        viewBox="0 0 1440 441"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M1552.19 407.781C1630.69 -224.219 -264.5 -20.4639 -88 340.036C-248.69 431.536 0.189819 440.5 0.189819 440.5H1444.88C1444.88 440.5 1709.19 261.781 1552.19 407.781Z"
          fill="#DDEFF8"
        />
      </svg>
    </section>
  </main>
</template>
