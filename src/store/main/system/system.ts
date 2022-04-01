import type { Module } from "vuex"
import type { IRootState } from "@/store/type"
import type { IGetPageListPayload, ISystemState, IPageUrlMap } from "./type"
import { getPageListData } from "@/service/main/system/system"

import {
  //#region
  CHANGE_USER_LIST,
  CHANGE_USER_COUNT,
  CHANGE_ROLE_LIST,
  CHANGE_ROLE_COUNT
  //#endregion
} from "./system-mutation-types"

const pageUrlMap: IPageUrlMap = {
  user: {
    pageUrl: "/users/list",
    mutationTypes: [CHANGE_USER_LIST, CHANGE_USER_COUNT]
  },
  role: {
    pageUrl: "/role/list",
    mutationTypes: [CHANGE_ROLE_LIST, CHANGE_ROLE_COUNT]
  }
}

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return state[`${pageName}List`]
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return state[`${pageName}Count`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: IGetPageListPayload) {
      const pageName = payload.pageName
      const pageUrl = pageUrlMap[pageName].pageUrl
      const mutationTypes = pageUrlMap[pageName].mutationTypes

      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult

      commit(mutationTypes[0], list)
      commit(mutationTypes[1], totalCount)
    }
  },
  mutations: {
    [CHANGE_USER_LIST](state, userList: any[]) {
      state.userList = userList
    },
    [CHANGE_USER_COUNT](state, userCount: number) {
      state.userCount = userCount
    },
    [CHANGE_ROLE_LIST](state, roleList: any[]) {
      state.roleList = roleList
    },
    [CHANGE_ROLE_COUNT](state, roleCount: number) {
      state.roleCount = roleCount
    }
  }
}

export default systemModule
