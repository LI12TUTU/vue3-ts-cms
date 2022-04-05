import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { localCache } from "@/utils/cache"
import { TOKEN_KEY } from "@/constants/storage-key"
import { checkToken } from "@/service/login/login"
import { firstMenu } from "@/utils/map-menus"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = localCache.getItem(TOKEN_KEY)
    // 是否登录拿到token
    if (!token) {
      return "/login"
    } else {
      // 检查token是否过期
      checkToken().then((res) => {
        if (res !== "授权成功~") {
          return "/login"
        }
      })
    }
  }

  if (to.path === "/main") {
    // 跳转到第一个路由
    return firstMenu.url
  }
})

export default router
