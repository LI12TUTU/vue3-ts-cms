import { RouteRecordRaw } from "vue-router"
import { IBreadcrumb } from "@/base-ui/breadcrumb"
import { ISelectOptions } from "@/base-ui/form"

// 页面跳转的第一个路由
let firstMenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  const allRoutes: RouteRecordRaw[] = []
  // 导入所有router/main/的ts文件
  const routeFiles = require.context("../router/main", true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // import("../router/main" + key.split(".")[1]).then((res) => {
    //   allRoutes.push(res.default)
    // })
    // 导入ts文件下的路由对象
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
        if (!firstMenu) firstMenu = menu
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)
  return routes
}

export function mapPathToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = mapPathToMenu(menu.children ?? [], currentPath)
      if (findMenu) {
        breadcrumbs?.push({ name: menu.name })
        breadcrumbs?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

export function mapPathToBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  mapPathToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      }
      if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _recurseGetPermission(userMenus)

  return permissions
}

export function mapMenusToLeafKeys(menuList: any[]) {
  const leafKeys: number[] = []

  const _recurseGetLeaf = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.children) {
        _recurseGetLeaf(menu.children)
      } else {
        leafKeys.push(menu.id)
      }
    }
  }

  _recurseGetLeaf(menuList)

  return leafKeys
}

export function mapIdToMenuName(id: number, menuList: any[]) {
  let name = ""

  if (id === undefined) return name

  const _recurseGetMenuName = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.id === id) {
        name = menu.name
        return
      }

      if (name !== "") return

      if (menu.children) {
        _recurseGetMenuName(menu.children)
      }
    }
  }

  _recurseGetMenuName(menuList)

  return name
}

export function mapMenusToOptions(menuList: any[]) {
  const options: ISelectOptions[] = []

  const _recurseGetSelectOptions = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1) {
        options.push({
          label: menu.name,
          value: menu.id
        })
        _recurseGetSelectOptions(menu.children ?? [])
      } else if (menu.type === 2) {
        options.push({
          label: menu.name,
          value: menu.id
        })
      }
    }
  }

  _recurseGetSelectOptions(menuList)

  return options
}

export { firstMenu }
