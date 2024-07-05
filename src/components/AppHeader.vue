<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router'

import AppButton from './AppButton.vue';

const route = useRoute();
const nav = ref(null)

watch(route, () => {
  nav.value!.checked! = false
})
</script>
<template>
  <header class="bg-white flex items-center justify-center !z-[99] sticky top-0 md:relative">
    <div class="flex items-center justify-between px-[20px] py-[13px] md:px-[120px] md:py-[19.73px] w-full 2xl:w-[1400px]">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Cutify logo" class=" w-[44px] md:w-[84px] h-auto" />
      </router-link>

      <input type="checkbox" id="nav" class="hidden" ref="nav" />

      <nav class="hidden md:flex gap-[32px] items-center !z-[99]">
        <ul class="flex flex-col md:flex-row gap-[24px] w-full md:w-auto md:items-center">
          <li class="">
            <router-link
              to="/"
              class="text-white md:text-grey border-b-[2px] border-transparent pb-[8px] font-[600] hover:text-primary"
              exact-active-class="!text-primary !border-primary"
            >
              Home
            </router-link>
          </li>
          <li class="">
            <router-link
              to="/services"
              class="text-white md:text-grey border-b-[2px] border-transparent pb-[8px] font-[600] hover:text-primary"
              exact-active-class="!text-primary !border-primary"
            >
              Services
            </router-link>
          </li>
          <li class="">
            <router-link
              to="/testimonials"
              class="text-white md:text-grey border-b-[2px] border-transparent pb-[8px] font-[600] hover:text-primary"
              exact-active-class="!text-primary !border-primary"
            >
              Testimonials
            </router-link>
          </li>
          <li class="">
            <router-link
              to="/blog"
              class="text-white md:text-grey border-b-[2px] border-transparent pb-[8px] font-[600] hover:text-primary"
              exact-active-class="!text-primary !border-primary"
            >
              Blog
            </router-link>
          </li>
          <li class="">
            <router-link
              to="/contact-us"
              class="text-white md:text-grey border-b-[2px] border-transparent pb-[8px] font-[600] hover:text-primary"
              exact-active-class="!text-primary !border-primary"
            >
              Contact Us
            </router-link>
          </li>
        </ul>

        <div class="flex gap-[24px] items-center w-full  md:w-auto">
          <router-link to="/register">
            <AppButton type="outline" size="medium">
              Create account
            </AppButton>
          </router-link>
          <router-link to="/login">
            <AppButton type="solid" size="medium">
              Login
            </AppButton>
          </router-link>
        </div>
      </nav>

      <label for="nav" class="hamburger py-[4px] px-[6px] md:!hidden">
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
        <div class="hamburger__line"></div>
      </label>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  #nav:checked ~ nav {
    display: flex;
    flex-direction: column;
    background-color: #293683;
    padding: 50px 20px;
    position: fixed;
    top: 58px;
    right: 0;
    bottom: 0;
    left: 0;
  }

  #nav:checked ~ .hamburger {
    & .hamburger__line:nth-of-type(even) {
      opacity: 0;
    }

    & .hamburger__line:first-of-type {
      transform: translate(0, 5px) rotate(45deg);
    }

    & .hamburger__line:last-of-type {
      transform: translate(0, -5px) rotate(-45deg);
    }
  }
  
  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 3px;

    &__line {
      width: 20px;
      padding: 1px;
      background-color: #212227;
      transition: all 300ms ease-in-out;
    }
  }
</style>
