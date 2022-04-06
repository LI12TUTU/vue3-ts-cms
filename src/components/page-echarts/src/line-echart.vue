<template>
  <div class="line-chart">
    <my-echart :options="options"></my-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, computed } from "vue"
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
    title: {
      text: props.title
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: true },
        saveAsImage: { show: true }
      }
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "分类商品销量",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top"
        },
        lineStyle: {
          color: "#7bc5e2"
        },
        itemStyle: {
          color: "#7bc5e2"
        },
        areaStyle: {
          color: "#7bc5e2"
        },
        emphasis: {
          focus: "series"
        },
        data: props.values
      }
    ]
  }
})
</script>
