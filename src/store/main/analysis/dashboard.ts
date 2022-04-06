import type { Module } from "vuex"
import type { IDashboardState } from "./type"
import type { IRootState } from "@/store/type"

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from "@/service/main/analysis/dashboard"
import {
  CHANGE_CATEGORY_GOODS_FAVOR,
  CHANGE_CATEGORY_GOODS_SALE,
  CHANGE_ADDRESS_GOODS_SALE,
  CHANGE_CATEGORY_GOODS_COUNT
} from "./dashboard-mutation-type"

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
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
    }
  },
  mutations: {
    [CHANGE_CATEGORY_GOODS_COUNT](state, categoryGoodsCount) {
      state.categoryGoodsCount = categoryGoodsCount
    },
    [CHANGE_CATEGORY_GOODS_SALE](state, categoryGoodsSale) {
      state.categoryGoodsSale = categoryGoodsSale
    },
    [CHANGE_CATEGORY_GOODS_FAVOR](state, categoryGoodsFavor) {
      state.categoryGoodsFavor = categoryGoodsFavor
    },
    [CHANGE_ADDRESS_GOODS_SALE](state, addressGoodsSale) {
      state.addressGoodsSale = addressGoodsSale
    }
  }
}

export default dashboardModule
