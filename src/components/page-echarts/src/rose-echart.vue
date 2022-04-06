<template>
  <div class="rose-echart">
    <my-echart :options="options"></my-echart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import MyEchart from "@/base-ui/echart"
import type { IDataType } from "../types"

const props = defineProps<{
  roseData: IDataType[]
}>()

const options = computed(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: "分类商品数量",
        type: "pie",
        radius: [10, 100],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>
