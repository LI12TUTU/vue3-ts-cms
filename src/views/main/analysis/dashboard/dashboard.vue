<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <template v-for="item in goodsAmountList" :key="item.title">
        <el-col v-bind="colLayout3">
          <statistical-panel :panelData="item"></statistical-panel>
        </el-col>
      </template>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col v-bind="colLayout1">
        <my-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </my-card>
      </el-col>
      <el-col v-bind="colLayout2">
        <my-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </my-card>
      </el-col>
      <el-col v-bind="colLayout1">
        <my-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </my-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col v-bind="colLayout2">
        <my-card title="分类商品销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </my-card>
      </el-col>
      <el-col v-bind="colLayout2">
        <my-card title="分类商品收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </my-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"

import MyCard from "@/base-ui/card"
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from "@/components/page-echarts"
import StatisticalPanel from "@/components/statistical-panel"
import { IPanelData } from "@/components/statistical-panel"

export default defineComponent({
  name: "Dashboard",
  components: {
    MyCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
    StatisticalPanel
  },
  setup() {
    const store = useStore()
    store.dispatch("dashboard/getDashboardDataAction")

    const colLayout1 = {
      xs: 24,
      sm: 24,
      md: 6,
      lg: 6,
      xl: 6
    }

    const colLayout2 = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 12,
      xl: 12
    }

    const colLayout3 = {
      xs: 24,
      sm: 24,
      md: 12,
      lg: 6,
      xl: 6
    }

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => ({
        name: item.name,
        value: item.goodsCount
      }))
    })

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale

      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return { xLabels, values }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor

      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }

      return { xLabels, values }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item) => ({
        name: item.address,
        value: item.count
      }))
    })

    const goodsAmountList = computed<IPanelData[]>(
      () => store.state.dashboard.goodsAmountList
    )

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      goodsAmountList,
      colLayout1,
      colLayout2,
      colLayout3
    }
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
