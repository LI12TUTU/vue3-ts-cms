import { createStore, useStore as useVuexStore } from "vuex"
import type { Store } from "vuex"
import type { IRootState, IStoreState } from "./type"

import login from "./login/login"
import system from "./main/system/system"
import dashboard from "./main/analysis/dashboard"
import { getPageListData } from "@/service/main/system/system"
import {
  CHANGE_ENTIRE_DEPARTMENT,
  CHANGE_ENTIRE_ROLE,
  CHANGE_ENTIRE_MENU,
  CHANGE_ENTIRE_CATEGORY
} from "./root-mutation-type"

const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: [],
      entireCategory: []
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const { list: departmentList } = await getPageListData(
        "/department/list",
        {
          offset: 0,
          size: 1000
        }
      )

      const { list: roleList } = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })

      let { list: menuList } = await getPageListData("/menu/list", {})
      menuList = menuList.filter((item: any) => item.id !== 41)

      const { list: categoryList } = await getPageListData("/category/list", {
        offset: 0,
        size: 1000
      })

      commit(CHANGE_ENTIRE_DEPARTMENT, departmentList)
      commit(CHANGE_ENTIRE_ROLE, roleList)
      commit(CHANGE_ENTIRE_MENU, menuList)
      commit(CHANGE_ENTIRE_CATEGORY, categoryList)
    },
    clearStoreDataAction({ commit, dispatch }) {
      commit(CHANGE_ENTIRE_DEPARTMENT, [])
      commit(CHANGE_ENTIRE_ROLE, [])
      commit(CHANGE_ENTIRE_MENU, [])
      commit(CHANGE_ENTIRE_CATEGORY, [])
      dispatch("login/clearLoginModuleDataAction")
      dispatch("system/clearSystemModuleDataAction")
      dispatch("dashboard/clearDashboardModuleDataAction")
    }
  },
  mutations: {
    [CHANGE_ENTIRE_DEPARTMENT](state, departmentList: any[]) {
      state.entireDepartment = departmentList
    },
    [CHANGE_ENTIRE_ROLE](state, roleList: any[]) {
      state.entireRole = roleList
    },
    [CHANGE_ENTIRE_MENU](state, menuList: any[]) {
      state.entireMenu = menuList
    },
    [CHANGE_ENTIRE_CATEGORY](state, categoryList: any[]) {
      state.entireCategory = categoryList
    }
  },
  modules: {
    login,
    system,
    dashboard
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLoginAction")
  // store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreState> {
  return useVuexStore()
}

export default store
