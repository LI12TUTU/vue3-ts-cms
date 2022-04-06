<template>
  <div class="pie-chart">
    <my-echart :options="options"></my-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from "vue"
import * as echarts from "echarts"
import MyEchart from "@/base-ui/echart"

const props = withDefaults(
  defineProps<{
    title?: string
    xLabels: string[]
    values: any[]
  }>(),
  {
    title: ""
  }
)

const options = computed(() => {
  return {
    toolbox: {
      feature: {
        saveAsImage: { show: true }
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        inside: true,
        color: "#fff"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#999"
      }
    },
    dataZoom: [
      {
        type: "inside"
      }
    ],
    series: [
      {
        type: "bar",
        name: "分类商品收藏",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: props.values
      }
    ]
  }
})
</script>
