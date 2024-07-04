<script lang="ts" setup>
import { reactive, computed } from 'vue'

import AppInput from '@/components/AppInput.vue'
import AppRadio from '@/components/AppRadio.vue'
import AppButton from '@/components/AppButton.vue'

const auth = reactive({
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
  password: '',
  confirm_password: '',
  accept_terms: false
})

const validPassword = computed(() => {
  const validation = {
    length: false,
    lower_case: false,
    upper_case: false,
    special_char: false
  }

  if (auth.password.length < 8) {
    validation.length = true
  }

  if (!/^(?=.*[a-z]).+$/.test(auth.password)) {
    validation.lower_case = true
  }

  if (!/^(?=.*[A-Z]).+$/.test(auth.password)) {
    validation.upper_case = true
  }

  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(auth.password)) {
    validation.special_char = true
  }

  return validation
})
</script>

<template>
  <section class="h-full">
    <div class="flex flex-col md:flex-row justify-end md:items-center mb-[24px] gap-[10px]">
      Are you a service provider?
      <router-link to="" class="text-primary text-[18px] underline"
        >Sign up as a professional</router-link
      >
    </div>
    <section
      class="border border-[#D3D3D4] h-full shadow shadow-gray-400/20 rounded p-[24px] md:p-[48px] md:w-[584px] overflow-auto"
    >
      <div class="mb-[32px]">
        <h1 class="font-bold text-[32px] md:text-[40px]">Sign up as a customer</h1>
        <p class="text-[18px]">Please enter your details to continue with your account creation.</p>
      </div>

      <div class="flex gap-[48px] justify-center">
        <a
          href="#"
          title="Sign in with Google"
          class="flex justify-center items-center p-[16px] !w-[48px] !h-[48px] border-[1px] border-[#D3D3D4] rounded"
        >
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7372 7.3807H15.1016V7.34639H7.99956V10.6536H12.4593C11.8086 12.5788 10.0603 13.9608 7.99956 13.9608C5.38482 13.9608 3.26486 11.7396 3.26486 9C3.26486 6.26039 5.38482 4.03918 7.99956 4.03918C9.20652 4.03918 10.3046 4.51624 11.1406 5.29551L13.3727 2.95689C11.9633 1.58068 10.0781 0.731964 7.99956 0.731964C3.64167 0.731964 0.108398 4.43398 0.108398 9C0.108398 13.566 3.64167 17.268 7.99956 17.268C12.3575 17.268 15.8907 13.566 15.8907 9C15.8907 8.44563 15.8363 7.90448 15.7372 7.3807Z"
              fill="#FFC107"
            />
            <path
              d="M1.01855 5.1516L3.6112 7.14378C4.31272 5.32399 6.01169 4.03913 7.99987 4.03913C9.20682 4.03913 10.3049 4.5162 11.1409 5.29546L13.373 2.95685C11.9636 1.58063 10.0784 0.731918 7.99987 0.731918C4.96887 0.731918 2.34032 2.52484 1.01855 5.1516Z"
              fill="#FF3D00"
            />
            <path
              d="M7.99972 17.268C10.038 17.268 11.8901 16.4507 13.2903 15.1216L10.848 12.9562C10.0558 13.585 9.07094 13.9608 7.99972 13.9608C5.94723 13.9608 4.20446 12.5895 3.54792 10.6759L0.974609 12.7532C2.2806 15.4308 4.93282 17.268 7.99972 17.268Z"
              fill="#4CAF50"
            />
            <path
              d="M15.7367 7.38067H15.1011V7.34636H7.99902V10.6536H12.4587C12.1462 11.5783 11.5785 12.3758 10.8462 12.9566C10.8465 12.9562 10.8469 12.9562 10.8473 12.9558L13.2897 15.1212C13.1168 15.2857 15.8902 13.134 15.8902 8.99996C15.8902 8.44559 15.8357 7.90445 15.7367 7.38067Z"
              fill="#1976D2"
            />
          </svg>
        </a>

        <a
          href="#"
          title="Sign in with Facebook"
          class="flex justify-center items-center p-[16px] !w-[48px] !h-[48px] border-[1px] border-[#D3D3D4] rounded"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 10.0558C0 15.0275 3.61083 19.1617 8.33333 20V12.7775H5.83333V10H8.33333V7.7775C8.33333 5.2775 9.94417 3.88917 12.2225 3.88917C12.9442 3.88917 13.7225 4 14.4442 4.11083V6.66667H13.1667C11.9442 6.66667 11.6667 7.2775 11.6667 8.05583V10H14.3333L13.8892 12.7775H11.6667V20C16.3892 19.1617 20 15.0283 20 10.0558C20 4.525 15.5 0 10 0C4.5 0 0 4.525 0 10.0558Z"
              fill="#3B5998"
            />
          </svg>
        </a>

        <a
          href="#"
          title="Sign in with Apple"
          class="flex justify-center items-center p-[16px] !w-[48px] !h-[48px] border-[1px] border-[#D3D3D4] rounded"
        >
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2492 10.5287C13.2409 9.00579 13.9297 7.85635 15.324 7.00984C14.5439 5.8936 13.3654 5.27946 11.8093 5.15912C10.3362 5.04293 8.72613 6.01809 8.13689 6.01809C7.51445 6.01809 6.08699 5.20062 4.9666 5.20062C2.65113 5.23796 0.19043 7.04718 0.19043 10.7279C0.19043 11.8151 0.38961 12.9382 0.78797 14.0973C1.31912 15.6202 3.23623 19.3549 5.23633 19.2926C6.28202 19.2677 7.02065 18.5498 8.38171 18.5498C9.70128 18.5498 10.386 19.2926 11.552 19.2926C13.5687 19.2636 15.3032 15.8692 15.8095 14.3422C13.1039 13.0682 13.2492 10.6075 13.2492 10.5287ZM10.9005 3.71507C12.0334 2.3706 11.9296 1.14647 11.8964 0.706615C10.8964 0.76471 9.73863 1.38715 9.07885 2.15482C8.35267 2.97644 7.92526 3.99309 8.01655 5.13837C9.09959 5.22137 10.0872 4.66532 10.9005 3.71507Z"
              fill="black"
            />
          </svg>
        </a>
      </div>

      <div class="relative flex items-center justify-center">
        <p class="bg-white p-3 z-[1]">or</p>
        <div class="border-b pr-1 absolute right-0 left-0"></div>
      </div>

      <form @submit.prevent class="my-[32px]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[24px]">
          <AppInput
            class="mb-5"
            type="text"
            placeholder="First Name"
            v-model="auth.first_name"
            rules="required"
            required
          />
          <AppInput
            class="mb-5"
            type="text"
            placeholder="Last Name"
            v-model="auth.last_name"
            rules="required"
            required
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-[20px] gap-y-[24px]">
          <AppInput
            class="mb-5"
            type="email"
            placeholder="Email address"
            v-model="auth.email"
            rules="required|email"
            required
          />
          <AppInput
            class="mb-5"
            type="tel"
            placeholder="Phone Number"
            v-model="auth.phone_number"
            rules="required"
            required
          />
        </div>

        <div class="grid gap-x-[20px] gap-y-[24px] items-start grid-cols-1 md:grid-cols-2">
          <div class="">
            <AppInput
              type="password"
              placeholder="Password"
              v-model="auth.password"
              rules="required"
              regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$"
              required
            />
            <div class="mt-[14px] text-[12px] text-[#6b6c6f]">
              <span class="inline-flex items-center gap-1 mr-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 1.66675C5.40533 1.66675 1.66699 5.40508 1.66699 10.0001C1.66699 14.5951 5.40533 18.3334 10.0003 18.3334C14.5953 18.3334 18.3337 14.5951 18.3337 10.0001C18.3337 5.40508 14.5953 1.66675 10.0003 1.66675ZM10.0003 16.6667C6.32449 16.6667 3.33366 13.6759 3.33366 10.0001C3.33366 6.32425 6.32449 3.33341 10.0003 3.33341C13.6762 3.33341 16.667 6.32425 16.667 10.0001C16.667 13.6759 13.6762 16.6667 10.0003 16.6667Z"
                    :fill="validPassword.length ? '#D3D3D4' : '#21D19F'"
                  />
                  <path
                    d="M8.33273 11.3226L6.4169 9.41005L5.24023 10.5901L8.3344 13.6776L13.9227 8.08922L12.7444 6.91089L8.33273 11.3226Z"
                    :fill="validPassword.length ? '#D3D3D4' : '#21D19F'"
                  />
                </svg>
                At least 8 characters strong
              </span>

              <span class="inline-flex items-center gap-1 mr-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 1.66675C5.40533 1.66675 1.66699 5.40508 1.66699 10.0001C1.66699 14.5951 5.40533 18.3334 10.0003 18.3334C14.5953 18.3334 18.3337 14.5951 18.3337 10.0001C18.3337 5.40508 14.5953 1.66675 10.0003 1.66675ZM10.0003 16.6667C6.32449 16.6667 3.33366 13.6759 3.33366 10.0001C3.33366 6.32425 6.32449 3.33341 10.0003 3.33341C13.6762 3.33341 16.667 6.32425 16.667 10.0001C16.667 13.6759 13.6762 16.6667 10.0003 16.6667Z"
                    :fill="validPassword.lower_case ? '#D3D3D4' : '#21D19F'"
                  />
                  <path
                    d="M8.33273 11.3226L6.4169 9.41005L5.24023 10.5901L8.3344 13.6776L13.9227 8.08922L12.7444 6.91089L8.33273 11.3226Z"
                    :fill="validPassword.lower_case ? '#D3D3D4' : '#21D19F'"
                  />
                </svg>
                One lower case character
              </span>

              <span class="inline-flex items-center gap-1 mr-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 1.66675C5.40533 1.66675 1.66699 5.40508 1.66699 10.0001C1.66699 14.5951 5.40533 18.3334 10.0003 18.3334C14.5953 18.3334 18.3337 14.5951 18.3337 10.0001C18.3337 5.40508 14.5953 1.66675 10.0003 1.66675ZM10.0003 16.6667C6.32449 16.6667 3.33366 13.6759 3.33366 10.0001C3.33366 6.32425 6.32449 3.33341 10.0003 3.33341C13.6762 3.33341 16.667 6.32425 16.667 10.0001C16.667 13.6759 13.6762 16.6667 10.0003 16.6667Z"
                    :fill="validPassword.upper_case ? '#D3D3D4' : '#21D19F'"
                  />
                  <path
                    d="M8.33273 11.3226L6.4169 9.41005L5.24023 10.5901L8.3344 13.6776L13.9227 8.08922L12.7444 6.91089L8.33273 11.3226Z"
                    :fill="validPassword.upper_case ? '#D3D3D4' : '#21D19F'"
                  />
                </svg>
                One upper case
              </span>

              <span class="inline-flex items-center gap-1 mr-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0003 1.66675C5.40533 1.66675 1.66699 5.40508 1.66699 10.0001C1.66699 14.5951 5.40533 18.3334 10.0003 18.3334C14.5953 18.3334 18.3337 14.5951 18.3337 10.0001C18.3337 5.40508 14.5953 1.66675 10.0003 1.66675ZM10.0003 16.6667C6.32449 16.6667 3.33366 13.6759 3.33366 10.0001C3.33366 6.32425 6.32449 3.33341 10.0003 3.33341C13.6762 3.33341 16.667 6.32425 16.667 10.0001C16.667 13.6759 13.6762 16.6667 10.0003 16.6667Z"
                    :fill="validPassword.special_char ? '#D3D3D4' : '#21D19F'"
                  />
                  <path
                    d="M8.33273 11.3226L6.4169 9.41005L5.24023 10.5901L8.3344 13.6776L13.9227 8.08922L12.7444 6.91089L8.33273 11.3226Z"
                    :fill="validPassword.special_char ? '#D3D3D4' : '#21D19F'"
                  />
                </svg>
                A symbol or special character
              </span>
            </div>
          </div>
          <AppInput
            type="password"
            placeholder="Confirm password"
            v-model="auth.confirm_password"
            :same-as="auth.password"
            rules="required"
            required
          />
        </div>

        <div class="flex gap-2 items-center mt-[16px] mb-[24px]">
          <AppRadio v-model="auth.accept_terms" id="remember" placeholder="" />
          <p class="text-[14px]">
            By registering you are agreeing to our
            <router-link to="" class="text-primary">Terms of use</router-link>
            and <router-link to="" class="text-primary">Privacy Policy</router-link>
          </p>
        </div>

        <AppButton
          type="solid"
          mode="submit"
          size="large"
          class="w-full"
          :disabled="
            auth.email === '' ||
            auth.password === '' ||
            auth.first_name === '' ||
            auth.last_name === '' ||
            !auth.accept_terms
          "
        >
          Sign Up
        </AppButton>
      </form>

      <div class="text-center">
        Already have an account? <router-link to="/login" class="text-primary underline">Login</router-link>
      </div>
    </section>
  </section>
</template>
