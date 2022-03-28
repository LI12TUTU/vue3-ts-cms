import { Module } from "vuex"
import type { ILoginState } from "./type"
import type { IRootState } from "../type"

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import type { IAccount } from "@/service/login/type"

import {
  CHANGE_TOKEN,
  CHANGE_USER_INFO,
  CHANGE_USER_MENUS
} from "./loginMutationType"

import { localCache } from "@/utils/cache"
import {
  TOKEN_KEY,
  USER_INFO_KEY,
  USER_MENUS_KEY
} from "@/constants/storage-key-const"

import router from "@/router"
import { mapMenusToRoutes } from "@/utils/map-menus"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: []
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult
      commit(CHANGE_TOKEN, token)
      localCache.setItem(TOKEN_KEY, token)

      const userInfo = await requestUserInfoById(id)
      commit(CHANGE_USER_INFO, userInfo)
      localCache.setItem(USER_INFO_KEY, userInfo)

      const userMenus = await requestUserMenusByRoleId(userInfo.role.id)
      commit(CHANGE_USER_MENUS, userMenus)
      localCache.setItem(USER_MENUS_KEY, userMenus)

      router.push("/main")
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getItem(TOKEN_KEY)
      if (token) {
        commit(CHANGE_TOKEN, token)
      }

      const userInfo = localCache.getItem(USER_INFO_KEY)
      if (userInfo) {
        commit(CHANGE_USER_INFO, userInfo)
      }

      const userMenus = localCache.getItem(USER_MENUS_KEY)
      if (userMenus) {
        commit(CHANGE_USER_MENUS, userMenus)
      }
    }
  },
  mutations: {
    [CHANGE_TOKEN](state, token: string) {
      state.token = token
    },
    [CHANGE_USER_INFO](state, userInfo: any) {
      state.userInfo = userInfo
    },
    [CHANGE_USER_MENUS](state, userMenus: any) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      routes.forEach((route) => {
        router.addRoute("main", route)
      })
    }
  }
}

export default loginModule
