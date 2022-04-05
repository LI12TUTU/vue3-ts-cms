import { createStore, useStore as useVuexStore } from "vuex"
import type { Store } from "vuex"
import type { IRootState, IStoreState } from "./type"

import login from "./login/login"
import system from "./main/system/system"
import { getPageListData } from "@/service/main/system/system"
import {
  CHANGE_ENTIRE_DEPARTMENT,
  CHANGE_ENTIRE_ROLE,
  CHANGE_ENTIRE_MENU
} from "./root-mutation-type"

const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
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

      commit(CHANGE_ENTIRE_DEPARTMENT, departmentList)
      commit(CHANGE_ENTIRE_ROLE, roleList)
      commit(CHANGE_ENTIRE_MENU, menuList)
    }
  },
  mutations: {
    [CHANGE_ENTIRE_DEPARTMENT](state, departmentList) {
      state.entireDepartment = departmentList
    },
    [CHANGE_ENTIRE_ROLE](state, roleList) {
      state.entireRole = roleList
    },
    [CHANGE_ENTIRE_MENU](state, menuList) {
      state.entireMenu = menuList
    }
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
  // store.dispatch("getInitialDataAction")
}

export function useStore(): Store<IStoreState> {
  return useVuexStore()
}

export default store
