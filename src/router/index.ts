import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { localCache } from "@/utils/cache"
import { TOKEN_KEY } from "@/constants/storage-key-const"

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
    if (!token) {
      return "/login"
    }
  }
})

export default router
