import type { Module } from "vuex"
import type { IRootState } from "@/store/type"
import { ElMessage } from "element-plus"
import type {
  IGetPageListPayload,
  ISystemState,
  IPageUrlMap,
  IDeletePayload,
  ICreatePayload,
  IEditPayload,
  IChangeDataPayload,
  IPageInfo
} from "./type"
import {
  deletePageData,
  createPageData,
  editPageData,
  getPageListData
} from "@/service/main/system/system"

import {
  //#region
  CHANGE_USER_LIST,
  CHANGE_USER_COUNT,
  CHANGE_ROLE_LIST,
  CHANGE_ROLE_COUNT,
  CHANGE_GOOD_LIST,
  CHANGE_GOOD_COUNT,
  CHANGE_MENU_LIST,
  CHANGE_MENU_COUNT,
  CHANGE_DEPARTMENT_LIST,
  CHANGE_DEPARTMENT_COUNT,
  CHANGE_CATEGORY_LIST,
  CHANGE_CATEGORY_COUNT,
  CHANGE_PAGE_INFO,
  CHANGE_QUERY_INFO
  //#endregion
} from "./system-mutation-type"

const pageUrlMap: IPageUrlMap = {
  user: {
    baseUrl: "/users",
    pageUrl: "/users/list",
    mutationTypes: [CHANGE_USER_LIST, CHANGE_USER_COUNT]
  },
  role: {
    baseUrl: "/role",
    pageUrl: "/role/list",
    mutationTypes: [CHANGE_ROLE_LIST, CHANGE_ROLE_COUNT]
  },
  good: {
    baseUrl: "/goods",
    pageUrl: "/goods/list",
    mutationTypes: [CHANGE_GOOD_LIST, CHANGE_GOOD_COUNT]
  },
  menu: {
    baseUrl: "/menu",
    pageUrl: "/menu/list",
    mutationTypes: [CHANGE_MENU_LIST, CHANGE_MENU_COUNT]
  },
  department: {
    baseUrl: "/department",
    pageUrl: "/department/list",
    mutationTypes: [CHANGE_DEPARTMENT_LIST, CHANGE_DEPARTMENT_COUNT]
  },
  category: {
    baseUrl: "/category",
    pageUrl: "/category/list",
    mutationTypes: [CHANGE_CATEGORY_LIST, CHANGE_CATEGORY_COUNT]
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
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0,
      pageInfo: {
        currentPage: 1,
        pageSize: 10
      },
      queryInfo: {}
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
      let { list } = pageResult
      const { totalCount } = pageResult

      if (pageName === "menu") {
        list = list.filter((item: any) => item.id !== 41)
      }

      commit(mutationTypes[0], list)
      commit(mutationTypes[1], totalCount)
    },

    async deletePageDataAction({ dispatch }, payload: IDeletePayload) {
      const { pageName, id } = payload
      const baseUrl = pageUrlMap[pageName].baseUrl
      const deleteUrl = `${baseUrl}/${id}`

      const result = await deletePageData(deleteUrl)
      dispatch("changePageDataAction", {
        pageName,
        result,
        changeName: "删除"
      })
    },

    async createPageDataAction({ dispatch }, payload: ICreatePayload) {
      const { pageName, newData } = payload
      const baseUrl = pageUrlMap[pageName].baseUrl
      const result = await createPageData(baseUrl, newData)
      dispatch("changePageDataAction", {
        pageName,
        result,
        changeName: "新建"
      })
    },

    async editPageDataAction({ dispatch }, payload: IEditPayload) {
      const { pageName, editData, id } = payload
      const baseUrl = pageUrlMap[pageName].baseUrl
      const editUrl = `${baseUrl}/${id}`

      const result = await editPageData(editUrl, editData)
      dispatch("changePageDataAction", {
        pageName,
        result,
        changeName: "编辑"
      })
    },

    changePageDataAction({ state, dispatch }, payload: IChangeDataPayload) {
      const { pageName, result, changeName } = payload
      if (result.code) {
        ElMessage.error(`${changeName}失败`)
        return
      }
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: (state.pageInfo.currentPage - 1) * state.pageInfo.pageSize,
          size: state.pageInfo.pageSize,
          ...state.queryInfo
        }
      })
      ElMessage.success(`${changeName}成功`)
    },

    clearSystemModuleDataAction({ commit }) {
      commit(CHANGE_USER_LIST, [])
      commit(CHANGE_USER_COUNT, 0)
      commit(CHANGE_DEPARTMENT_LIST, [])
      commit(CHANGE_DEPARTMENT_COUNT, 0)
      commit(CHANGE_ROLE_LIST, [])
      commit(CHANGE_ROLE_COUNT, 0)
      commit(CHANGE_MENU_LIST, [])
      commit(CHANGE_MENU_COUNT, 0)
      commit(CHANGE_GOOD_LIST, [])
      commit(CHANGE_GOOD_COUNT, 0)
      commit(CHANGE_CATEGORY_LIST, [])
      commit(CHANGE_CATEGORY_COUNT, 0)
      commit(CHANGE_QUERY_INFO, {})
      commit(CHANGE_PAGE_INFO, {
        currentPage: 1,
        pageSize: 10
      })
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
      goodList.forEach((item) => {
        item.newPrice = +item.newPrice
        item.oldPrice = +item.oldPrice
      })
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
    },
    [CHANGE_DEPARTMENT_LIST](state, departmentList: any[]) {
      state.departmentList = departmentList
    },
    [CHANGE_DEPARTMENT_COUNT](state, departmentCount: number) {
      state.departmentCount = departmentCount
    },
    [CHANGE_CATEGORY_LIST](state, categoryList: any[]) {
      state.categoryList = categoryList
    },
    [CHANGE_CATEGORY_COUNT](state, categoryCount: number) {
      state.categoryCount = categoryCount
    },
    [CHANGE_PAGE_INFO](state, pageInfo: IPageInfo) {
      state.pageInfo = pageInfo
    },
    [CHANGE_QUERY_INFO](state, queryInfo: any) {
      state.queryInfo = queryInfo
    }
  }
}

export default systemModule
