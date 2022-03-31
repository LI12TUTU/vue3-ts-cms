import type { Module } from "vuex"
import type { IRootState } from "@/store/type"
import type { IGetPageListPayload, ISystemState } from "./type"
import { getPageListData } from "@/service/main/system/system"
import { CHANGE_USER_LIST, CHANGE_USER_COUNT } from "./system-mutation-types"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: IGetPageListPayload) {
      const pageResult = await getPageListData(
        payload.pageUrl,
        payload.queryInfo
      )
      const { list, totalCount } = pageResult

      commit(CHANGE_USER_LIST, list)
      commit(CHANGE_USER_COUNT, totalCount)
    }
  },
  mutations: {
    [CHANGE_USER_LIST](state, userList: any[]) {
      state.userList = userList
    },
    [CHANGE_USER_COUNT](state, userCount: number) {
      state.userCount = userCount
    }
  }
}

export default systemModule
