<template>
  <div class="my-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue"
import { EChartsOption } from "echarts"
import useEchart from "../hooks/use-echart"

const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: "100%",
    height: "360px"
  }
)

const echartDivRef = ref<HTMLDivElement>()

onMounted(() => {
  const { setOption } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOption(props.options)
  })
})
</script>

<style scoped lang="less"></style>
