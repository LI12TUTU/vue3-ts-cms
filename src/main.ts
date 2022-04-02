import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { globalRegister } from "./global"
import { setupStore } from "./store"

import "element-plus/theme-chalk/el-message.css"
import "normalize.css"
import "./assets/css/index.less"

const app = createApp(App)

app.use(globalRegister)
app.use(store)
setupStore()
app.use(router)
app.mount("#app")
