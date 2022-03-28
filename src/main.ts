import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { globalRegister } from "./global"
import { setupStore } from "./store"

import "normalize.css"
import "./assets/css/index.less"

const app = createApp(App)

setupStore()
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount("#app")
