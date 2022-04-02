import type { Module } from "vuex"
import type { IRootState } from "@/store/type"
import { ElMessage } from "element-plus"
import type {
  IGetPageListPayload,
  ISystemState,
  IPageUrlMap,
  IDeletePayload
} from "./type"
import { deletePageData, getPageListData } from "@/service/main/system/system"

import {
  //#region
  CHANGE_USER_LIST,
  CHANGE_USER_COUNT,
  CHANGE_ROLE_LIST,
  CHANGE_ROLE_COUNT,
  CHANGE_GOOD_LIST,
  CHANGE_GOOD_COUNT,
  CHANGE_MENU_LIST,
  CHANGE_MENU_COUNT
  //#endregion
} from "./system-mutation-types"

const pageUrlMap: IPageUrlMap = {
  user: {
    deleteUrl: "/users",
    pageUrl: "/users/list",
    mutationTypes: [CHANGE_USER_LIST, CHANGE_USER_COUNT]
  },
  role: {
    deleteUrl: "/role",
    pageUrl: "/role/list",
    mutationTypes: [CHANGE_ROLE_LIST, CHANGE_ROLE_COUNT]
  },
  good: {
    deleteUrl: "/goods",
    pageUrl: "/goods/list",
    mutationTypes: [CHANGE_GOOD_LIST, CHANGE_GOOD_COUNT]
  },
  menu: {
    deleteUrl: "/menu",
    pageUrl: "/menu/list",
    mutationTypes: [CHANGE_MENU_LIST, CHANGE_MENU_COUNT]
  }
}

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0,
      goodList: [],
      goodCount: 0,
      menuList: [],
      menuCount: 0
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
    },

    async deletePageDataAction({ dispatch }, payload: IDeletePayload) {
      const { pageName, id } = payload
      const deleteUrl = pageUrlMap[pageName].deleteUrl
      const pageUrl = `${deleteUrl}/${id}`

      const result = await deletePageData(pageUrl)
      if (result.code) {
        ElMessage.error("删除失败")
        return
      }

      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
      ElMessage.success("删除成功")
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
    },
    [CHANGE_GOOD_LIST](state, goodList: any[]) {
      state.goodList = goodList
    },
    [CHANGE_GOOD_COUNT](state, goodCount: number) {
      state.goodCount = goodCount
    },
    [CHANGE_MENU_LIST](state, menuList: any[]) {
      state.menuList = menuList
    },
    [CHANGE_MENU_COUNT](state, menuCount: number) {
      state.menuCount = menuCount
    }
  }
}

export default systemModule
