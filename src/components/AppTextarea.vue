<script lang="ts" setup>
import { computed, ref, type Ref } from 'vue'
import { validation } from './validation'

const props = defineProps<{
  placeholder: string
  rules?: string
  required?: boolean
}>()

const error: Ref<{ message: string; show: boolean }> = ref({ message: '', show: false })
const isPW = ref(true)
const value = defineModel()

const inputStyle = computed(() => {
  return (
    (value.value !== '' ? 'pt-[16px] pb-[12px] !text-grey' : ' !text-grey') +
    (error.value.show ? ' !border-red' : ' !text-grey')
  )
})

const placeholderStyle = computed(() => {
  return (value.value !== '' ? '!top-1 text-[12px]' : '') + (error.value.show ? ' !text-red' : '')
})

const updateModel = function (e: any) {
  value.value = e.target.value

  error.value.message = ''
  error.value.show = false

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
    <textarea
      :required="required"
      v-model="value"
      @input="updateModel"
      @focus="updateModel"
      class="outline-none w-full bg-transparent py-1"
    ></textarea>
  </div>
</template>
