<template>
  <span ref="counterRef" />
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, onMounted, ref, watch } from "vue"
import useCountUp from "../hooks/use-count-up"

const props = withDefaults(
  defineProps<{
    number?: number
    options?: any
  }>(),
  {
    number: 0,
    options: {}
  }
)

const counterRef = ref<HTMLDivElement>()
const { createCounter, update } = useCountUp(
  counterRef,
  props.number,
  props.options
)
watch(
  () => props.number,
  () => {
    update(props.number)
  }
)
onMounted(() => {
  createCounter()
})
</script>
