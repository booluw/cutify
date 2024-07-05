<script lang="ts" setup>
defineProps<{
  service: {
    img: string
    location: string
    rating: number
    reviews: number
    name: string
    id: number
  }
}>()
</script>
<template>
  <router-link
    :to="`/services/${service.id}`"
    class="border-[0.5px] border-grey-100 rounded overflow-hidden group"
  >
    <img :src="service.img" class="w-full h-auto" />
    <div class="p-4 text-grey flex flex-col gap-2">
      <h3 class="font-semibold">{{ service.name }}</h3>
      <div class="flex gap-[13px] items-start">
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 11.25C9.65685 11.25 11 9.90685 11 8.25C11 6.59315 9.65685 5.25 8 5.25C6.34315 5.25 5 6.59315 5 8.25C5 9.90685 6.34315 11.25 8 11.25Z"
            stroke="#46474B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9999 11.25C11.7499 16.5 7.99994 22.5 7.99994 22.5C7.99994 22.5 4.24994 16.5 1.99994 11.25C-0.250061 6 3.49994 1.5 7.99994 1.5C12.4999 1.5 16.2499 6 13.9999 11.25Z"
            stroke="#46474B"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p class="text-grey-500">{{ service.location }}</p>
      </div>
      <div class="flex items-center justify-between">
        <div class="flex gap-2 items-center text-grey-500">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.947 7.17901C19.8842 6.99388 19.7685 6.83121 19.6142 6.71107C19.46 6.59094 19.2739 6.51861 19.079 6.50301L13.378 6.05001L10.911 0.589014C10.8325 0.413127 10.7047 0.263736 10.5431 0.158872C10.3815 0.0540081 10.193 -0.00184725 10.0004 -0.00195297C9.80771 -0.0020587 9.61916 0.0535897 9.45745 0.158276C9.29574 0.262963 9.16779 0.412213 9.08903 0.588015L6.62203 6.05001L0.921026 6.50301C0.729482 6.51819 0.546364 6.58822 0.393581 6.70475C0.240798 6.82127 0.124819 6.97934 0.0595194 7.16004C-0.00578038 7.34075 -0.0176359 7.53645 0.0253712 7.72372C0.0683784 7.91099 0.164427 8.0819 0.302026 8.21601L4.51503 12.323L3.02503 18.775C2.97978 18.9703 2.99428 19.1747 3.06665 19.3617C3.13901 19.5486 3.26589 19.7095 3.43083 19.8235C3.59577 19.9374 3.79115 19.9991 3.99161 20.0007C4.19208 20.0022 4.38837 19.9434 4.55503 19.832L10 16.202L15.445 19.832C15.6154 19.9451 15.8162 20.0033 16.0207 19.9988C16.2251 19.9944 16.4232 19.9274 16.5884 19.8069C16.7536 19.6865 16.878 19.5183 16.9448 19.3251C17.0116 19.1318 17.0176 18.9228 16.962 18.726L15.133 12.326L19.669 8.24401C19.966 7.97601 20.075 7.55801 19.947 7.17901Z"
              fill="#FFCB13"
            />
          </svg>
          {{ service.rating }}
          <span class="text-grey-400">{{ service.reviews }}</span>
        </div>
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
