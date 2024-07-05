<script setup lang="ts">
import { reactive } from 'vue'

import AppButton from '@/components/AppButton.vue'
import AppSearchPill from '@/components/AppSearchPill.vue'
import AppGroupInput from '@/components/AppGroupInput.vue'
import AppInputAndSelect from '@/components/AppInputAndSelect.vue'
import AppImageCard from '@/components/AppImageCard.vue'
import AppServiceCard from '@/components/AppServiceCard.vue'

import ImgBarber from '@/assets/categories/barber.png'
import ImgGym from '@/assets/categories/gym.png'
import ImgMua from '@/assets/categories/mua.png'
import ImgSaloon from '@/assets/categories/saloon.png'
import ImgSpa from '@/assets/categories/spa.png'
import ImgFacial from '@/assets/categories/facial.png'
import ImgPedicure from '@/assets/categories/pedicure.png'
import ImgHairWash from '@/assets/categories/wash_hair.png'

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

      <div class="flex justify-between mt-2">
        <p class="">
          Have a service you want to onboard?
          <router-link to="/register" class="text-primary">Sign up as a professional</router-link>
        </p>

        <router-link to="" class="text-primary font-semibold">See More &rarr;</router-link>
      </div>

      <div class="mt-[24px] grid gap-[20px] grid-cols-2 md:grid-cols-4">
        <AppServiceCard :service v-for="(service, index) in services" :key="index" class="first-of-type:col-span-2 last-of-type:col-span-2" />
      </div>
    </section>
  </main>
</template>
