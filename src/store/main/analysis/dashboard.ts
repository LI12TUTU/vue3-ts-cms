import type { Module } from "vuex"
import type { IDashboardState } from "./type"
import type { IRootState } from "@/store/type"

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale,
  getGoodsAmountList
} from "@/service/main/analysis/dashboard"
import {
  CHANGE_CATEGORY_GOODS_FAVOR,
  CHANGE_CATEGORY_GOODS_SALE,
  CHANGE_ADDRESS_GOODS_SALE,
  CHANGE_CATEGORY_GOODS_COUNT,
  CHANGE_GOODS_AMOUNT_LIST
} from "./dashboard-mutation-type"

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      goodsAmountList: []
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit(CHANGE_CATEGORY_GOODS_COUNT, categoryCountResult)
      const categorySaleResult = await getCategoryGoodsSale()
      commit(CHANGE_CATEGORY_GOODS_SALE, categorySaleResult)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit(CHANGE_CATEGORY_GOODS_FAVOR, categoryFavorResult)
      const addressSaleResult = await getAddressGoodsSale()
      commit(CHANGE_ADDRESS_GOODS_SALE, addressSaleResult)
      const amountListResult = await getGoodsAmountList()
      commit(CHANGE_GOODS_AMOUNT_LIST, amountListResult)
    }
  },
  mutations: {
    [CHANGE_CATEGORY_GOODS_COUNT](state, categoryGoodsCount: any[]) {
      state.categoryGoodsCount = categoryGoodsCount
    },
    [CHANGE_CATEGORY_GOODS_SALE](state, categoryGoodsSale: any[]) {
      state.categoryGoodsSale = categoryGoodsSale
    },
    [CHANGE_CATEGORY_GOODS_FAVOR](state, categoryGoodsFavor: any[]) {
      state.categoryGoodsFavor = categoryGoodsFavor
    },
    [CHANGE_ADDRESS_GOODS_SALE](state, addressGoodsSale: any[]) {
      state.addressGoodsSale = addressGoodsSale
    },
    [CHANGE_GOODS_AMOUNT_LIST](state, goodsAmountList: any[]) {
      state.goodsAmountList = goodsAmountList
    }
  }
}

export default dashboardModule
