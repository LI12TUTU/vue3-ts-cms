import { createStore, useStore as useVuexStore } from "vuex"
import type { Store } from "vuex"
import type { IRootState, IStoreState } from "./type"
import login from "./login/login"
import system from "./main/system/system"

const store = createStore<IRootState>({
  state() {
    return {}
  },
  modules: {
    login,
    system
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}

export function useStore(): Store<IStoreState> {
  return useVuexStore()
}

export default store
