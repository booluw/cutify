<script lang="ts" setup>
import { ref } from 'vue'

const email = ref('')
</script>

<template>
  <footer
    class="bg-primary-600 text-white flex flex-col items-center justify-center px-[20px] py-[56px] md:p-0"
  >
    <div
      class="flex flex-col md:flex-row gap-[32px] md:gap-[87px] justify-between py-[32px] md:px-[120px] md:pt-[56px] md:pb-[36px] w-full 2xl:w-[1400px]"
    >
      <div class="md:w-[400px]">
        <img src="@/assets/logo.png" class="w-[133px] h-auto" />
        <p class="font-[700] text-[13px] text-[#eee]">...Book Beauty & Health Services</p>
      </div>
      <div class="md:w-[800px] flex flex-col md:flex-row gap-[32px] md:gap-[40px] text-[16px]">
        <div class="md:w-1/3">
          <h2 class="font-[700] underline mb-[16px]">Quick Links</h2>
          <ul class="flex flex-col gap-[8px]">
            <li>
              <router-link to="/services" class="hover:opacity-75">Services</router-link>
            </li>
            <li>
              <router-link to="/testimonials" class="hover:opacity-75">Testimonials</router-link>
            </li>
            <li>
              <router-link to="/blog" class="hover:opacity-75">Blog</router-link>
            </li>
            <li>
              <router-link to="/contact-us" class="hover:opacity-75">Contact Us</router-link>
            </li>
          </ul>
        </div>
        <div class="md:w-2/3">
          <h2 class="font-[700] text-[16px] underline mb-[16px]">Our Categories</h2>
          <div class="flex gap-[48px] md:gap-0 md:justify-between">
            <ul class="flex flex-col gap-[10px]">
              <li>
                <router-link to="/categories/hair-salon" class="hover:opacity-75"
                  >Hair Salon</router-link
                >
              </li>
              <li>
                <router-link to="/categories/barbing-shops" class="hover:opacity-75"
                  >Barbing Shops</router-link
                >
              </li>
              <li>
                <router-link to="/categories/spa" class="hover:opacity-75">Spa</router-link>
              </li>
              <li>
                <router-link to="/categories/gym-center" class="hover:opacity-75"
                  >Gym Center</router-link
                >
              </li>
            </ul>
            <ul class="flex flex-col gap-[10px]">
              <li>
                <router-link to="/categories/hair-salon" class="hover:opacity-75"
                  >Hair Salon</router-link
                >
              </li>
              <li>
                <router-link to="/categories/barbing-shops" class="hover:opacity-75"
                  >Barbing Shops</router-link
                >
              </li>
              <li>
                <router-link to="/categories/spa" class="hover:opacity-75">Spa</router-link>
              </li>
              <li>
                <router-link to="/categories/gym-center" class="hover:opacity-75"
                  >Gym Center</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="md:w-2/3">
        <div class="flex items-center gap-[16px]">
          <b>Follow Us</b>
          <div class="inline-flex gap-[18px]">
            <a
              href=""
              title="Find us on Facebook"
              class="bg-white hover:opacity-75 p-[6px] rounded-full flex items-center justify-center"
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
                  fill="#212227"
                />
              </svg>
            </a>
            <a
              href=""
              title="Follow us on Instagram"
              class="bg-white hover:opacity-75 p-[6px] rounded-full flex items-center justify-center"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_172_1222)">
                  <path
                    d="M11.7306 9.99981C11.7306 10.9556 10.9556 11.7306 9.99981 11.7306C9.04398 11.7306 8.26904 10.9556 8.26904 9.99981C8.26904 9.04398 9.04398 8.26904 9.99981 8.26904C10.9556 8.26904 11.7306 9.04398 11.7306 9.99981Z"
                    fill="#212227"
                  />
                  <path
                    d="M12.9229 4.76904H7.07674C5.8042 4.76904 4.76904 5.8042 4.76904 7.07674V12.9229C4.76904 14.1954 5.8042 15.2306 7.07674 15.2306H12.9229C14.1954 15.2306 15.2306 14.1954 15.2306 12.9229V7.07674C15.2306 5.8042 14.1954 4.76904 12.9229 4.76904ZM9.99981 12.8844C8.40922 12.8844 7.1152 11.5904 7.1152 9.99981C7.1152 8.40922 8.40922 7.1152 9.99981 7.1152C11.5904 7.1152 12.8844 8.40922 12.8844 9.99981C12.8844 11.5904 11.5904 12.8844 9.99981 12.8844ZM13.3075 7.26904C12.9888 7.26904 12.7306 7.01078 12.7306 6.69212C12.7306 6.37346 12.9888 6.1152 13.3075 6.1152C13.6262 6.1152 13.8844 6.37346 13.8844 6.69212C13.8844 7.01078 13.6262 7.26904 13.3075 7.26904Z"
                    fill="#212227"
                  />
                  <path
                    d="M14.6538 0.153809H5.34612C2.48314 0.153809 0.153809 2.48314 0.153809 5.34612V14.6538C0.153809 17.5168 2.48314 19.8461 5.34612 19.8461H14.6538C17.5168 19.8461 19.8461 17.5168 19.8461 14.6538V5.34612C19.8461 2.48314 17.5168 0.153809 14.6538 0.153809ZM16.3846 12.923C16.3846 14.8317 14.8317 16.3846 12.923 16.3846H7.07689C5.16823 16.3846 3.61535 14.8317 3.61535 12.923V7.07689C3.61535 5.16823 5.16823 3.61535 7.07689 3.61535H12.923C14.8317 3.61535 16.3846 5.16823 16.3846 7.07689V12.923Z"
                    fill="#212227"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_172_1222">
                    <rect
                      width="19.6923"
                      height="19.6923"
                      fill="white"
                      transform="translate(0.153809 0.153809)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a
              href=""
              title="Follow us on Twitter"
              class="bg-white hover:opacity-75 p-[6px] rounded-full flex items-center justify-center"
            >
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8461 1.89367C19.1138 2.2149 18.3335 2.42782 17.52 2.5312C18.3569 2.03151 18.9957 1.24628 19.296 0.299819C18.5157 0.76505 17.6541 1.09367 16.736 1.27705C15.995 0.488127 14.939 -0.000488281 13.787 -0.000488281C11.552 -0.000488281 9.75258 1.81367 9.75258 4.03766C9.75258 4.35767 9.77965 4.66536 9.84612 4.95828C6.48981 4.79459 3.51996 3.18597 1.52489 0.735512C1.17658 1.33982 0.97227 2.03151 0.97227 2.77613C0.97227 4.17428 1.69227 5.41366 2.7655 6.1312C2.11689 6.1189 1.48058 5.93059 0.941501 5.63397C0.941501 5.64628 0.941501 5.66228 0.941501 5.67828C0.941501 7.64013 2.34089 9.26966 4.17596 9.64505C3.84735 9.73489 3.48919 9.77797 3.1175 9.77797C2.85904 9.77797 2.59812 9.7632 2.35319 9.70905C2.87627 11.3078 4.36058 12.4832 6.1255 12.5214C4.75196 13.5958 3.00796 14.2432 1.11996 14.2432C0.788886 14.2432 0.471347 14.2284 0.153809 14.1878C1.94212 15.341 4.0615 15.9995 6.34704 15.9995C13.776 15.9995 17.8375 9.84566 17.8375 4.51151C17.8375 4.33305 17.8313 4.16074 17.8227 3.98967C18.624 3.42105 19.2972 2.7109 19.8461 1.89367Z"
                  fill="#212227"
                />
              </svg>
            </a>
            <a
              href=""
              title="Follow us on LinkedIn"
              class="bg-white hover:opacity-75 p-[6px] rounded-full flex items-center justify-center"
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
                  d="M0.833496 2.36468C0.833496 1.95845 0.994868 1.56887 1.28211 1.28162C1.56935 0.994381 1.95894 0.83301 2.36516 0.83301H17.6335C17.8348 0.832681 18.0342 0.872062 18.2203 0.948899C18.4064 1.02574 18.5754 1.13852 18.7179 1.28079C18.8603 1.42306 18.9733 1.59203 19.0503 1.77802C19.1273 1.96401 19.1669 2.16336 19.1668 2.36468V17.633C19.167 17.8344 19.1276 18.0338 19.0506 18.2199C18.9737 18.4059 18.8608 18.575 18.7185 18.7174C18.5762 18.8598 18.4071 18.9728 18.2211 19.0498C18.0351 19.1269 17.8357 19.1665 17.6343 19.1663H2.36516C2.16395 19.1663 1.96471 19.1267 1.77883 19.0497C1.59294 18.9726 1.42406 18.8598 1.28182 18.7174C1.13958 18.5751 1.02677 18.4062 0.949848 18.2202C0.872924 18.0343 0.833387 17.8351 0.833496 17.6338V2.36468ZM8.09016 7.82301H10.5727V9.06968C10.931 8.35301 11.8477 7.70801 13.2252 7.70801C15.866 7.70801 16.4918 9.13551 16.4918 11.7547V16.6063H13.8193V12.3513C13.8193 10.8597 13.461 10.018 12.551 10.018C11.2885 10.018 10.7635 10.9255 10.7635 12.3513V16.6063H8.09016V7.82301ZM3.50683 16.4922H6.18016V7.70801H3.50683V16.4913V16.4922ZM6.56266 4.84301C6.5677 5.0719 6.52697 5.2995 6.44286 5.51244C6.35875 5.72538 6.23296 5.91937 6.07286 6.08304C5.91276 6.2467 5.72158 6.37674 5.51054 6.46552C5.29951 6.55429 5.07286 6.60002 4.84391 6.60002C4.61496 6.60002 4.38832 6.55429 4.17728 6.46552C3.96625 6.37674 3.77507 6.2467 3.61497 6.08304C3.45487 5.91937 3.32907 5.72538 3.24496 5.51244C3.16085 5.2995 3.12012 5.0719 3.12516 4.84301C3.13506 4.39372 3.32048 3.96617 3.64173 3.65191C3.96298 3.33766 4.39452 3.16169 4.84391 3.16169C5.29331 3.16169 5.72484 3.33766 6.04609 3.65191C6.36734 3.96617 6.55277 4.39372 6.56266 4.84301Z"
                  fill="#212227"
                />
              </svg>
            </a>
          </div>
        </div>
        <form @submit.prevent class="mt-[32px]">
          <h3 class="text-[14px]">Subscribe to our newsletter to get updates from us.</h3>
          <div class="flex w-full mt-[16px]">
            <input
              type="email"
              class="text-grey p-[15px] outline-none focus:outline-none"
              placeholder="Enter Your Email"
              v-model="email"
              required
            />
            <button
              type="submit"
              class="bg-primary-500 hover:bg-opacity-75 text-white px-[31px] py-[12px]"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="border-b border-[#D3D3D4] px-2 w-full"></div>
    <div class="w-full text-center pt-[36px] md:pb-[56px] text-[16px]">
      Copyright &copy; {{ new Date().getFullYear() }} Genleaders All Rights Reserved.
    </div>
  </footer>
</template>
