<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import { validation } from './validation'

const props = defineProps<{
  type: 'text' | 'password' | 'email' | 'tel'
  placeholder: string
  regex?: string
  rules?: string
  'same-as'?: string // for confirm password
  required?: boolean
}>()

const error: Ref<{ message: string; show: boolean }> = ref({ message: '', show: false })
const isPW = ref(true)
const value = defineModel()

const inputStyle = computed(() => {
  return (
    (value.value !== '' ? 'pt-[16px] pb-[12px] !text-grey' : ' !text-grey') + (error.value.show ? ' !border-red' : ' !text-grey')
  )
})

const placeholderStyle = computed(() => {
  return (value.value !== '' ? '!top-1 text-[12px]' : '') + (error.value.show ? ' !text-red' : '')
})

const updateModel = function (e: any) {
  value.value = e.target.value

  error.value.message = ''
  error.value.show = false

  // First validates regex
  if (props.regex) {
    const isValid = new RegExp(props.regex).test(e.target.value)

    if (!isValid) {
      error.value.show = true
      error.value.message = `${props.placeholder} is not valid`

      return
    }
  }

  // then validate same-as

  if (props!.sameAs!) {
    if (e.target.value !== props!.sameAs!) {
      error.value.show = true
      error.value.message = 'Validation error'
    }
    return
  }

  // Then validate rules

  ;(props as any).rules?.split('|').forEach((rule: string) => {
    let validationResult
    try {
      validationResult = validation[rule as keyof typeof validation](
        e.target.value,
        props.placeholder || ''
      )

      if (!validationResult.valid) throw validationResult
    } catch (error) {
      console.warn(error)
    }

    error.value.show = !validationResult!.valid
    error.value.message = validationResult!.message
  })
}
</script>

<template>
  <div
    class="relative group flex justify-between border-[1px] border-[#D3D3D4] rounded p-[14px] focus-within:pt-[16px] focus-within:pb-[12px] transition-all ease-in-out"
    :class="inputStyle"
  >
    <span
      class="absolute top-[20px] left-[16px] -z-[1] group-focus-within:top-1 group-focus-within:text-[12px] text-[#909093] transition-all ease-in-out"
      :class="placeholderStyle"
    >
      {{ placeholder }}
    </span>
    <input
      class="outline-none w-full bg-transparent py-1"
      :type="type === 'password' ? (isPW === true ? 'password' : 'text') : type"
      :required="required"
      v-model="value"
      @input="updateModel"
      @focus="updateModel"
    />
    <button type="button" class="flex items-center justify-center cursor-pointer" v-if="type === 'password'" @click="isPW = !isPW">
      <svg class="w-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="isPW">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M15.0007 12C15.0007 13.6569 13.6576 15 12.0007 15C10.3439 15 9.00073 13.6569 9.00073 12C9.00073 10.3431 10.3439 9 12.0007 9C13.6576 9 15.0007 10.3431 15.0007 12Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M12.0012 5C7.52354 5 3.73326 7.94288 2.45898 12C3.73324 16.0571 7.52354 19 12.0012 19C16.4788 19 20.2691 16.0571 21.5434 12C20.2691 7.94291 16.4788 5 12.0012 5Z"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
      <svg class="w-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    </button>
  </div>
</template>
