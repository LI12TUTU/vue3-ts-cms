import { createStore, useStore as useVuexStore } from "vuex"
import type { Store } from "vuex"
import type { IRootState, IStoreState } from "./type"
import login from "./login/login"

const store = createStore<IRootState>({
  state() {
    return {}
  },
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}

export function useStore(): Store<IStoreState> {
  return useVuexStore()
}

export default store
