import { Module } from "vuex"
import type { ILoginState } from "./type"
import type { IRootState } from "../type"

import { ElMessage } from "element-plus"

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import type { IAccount, IDataType, ILoginResult } from "@/service/login/type"

import {
  CHANGE_TOKEN,
  CHANGE_USER_INFO,
  CHANGE_USER_MENUS
} from "./login-mutation-type"

import { localCache } from "@/utils/cache"
import {
  TOKEN_KEY,
  USER_INFO_KEY,
  USER_MENUS_KEY
} from "@/constants/storage-key"

import router from "@/router"
import { mapMenusToPermissions, mapMenusToRoutes } from "@/utils/map-menus"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccount) {
      const loginResult = await accountLoginRequest(payload)
      if ((loginResult as IDataType).code) {
        ElMessage.error("账号或密码错误")
      }
      const { id, token } = loginResult as ILoginResult
      commit(CHANGE_TOKEN, token)
      localCache.setItem(TOKEN_KEY, token)

      ElMessage.success("登录成功")

      dispatch("getInitialDataAction", null, { root: true })

      const userInfo = await requestUserInfoById(id)
      commit(CHANGE_USER_INFO, userInfo)
      localCache.setItem(USER_INFO_KEY, userInfo)

      let userMenus = await requestUserMenusByRoleId(userInfo.role.id)
      userMenus = userMenus.filter((item: any) => item.id !== 41)
      commit(CHANGE_USER_MENUS, userMenus)
      localCache.setItem(USER_MENUS_KEY, userMenus)

      router.push("/main")
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getItem(TOKEN_KEY)
      if (token) {
        commit(CHANGE_TOKEN, token)
        dispatch("getInitialDataAction", null, { root: true })
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

      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  }
}

export default loginModule
