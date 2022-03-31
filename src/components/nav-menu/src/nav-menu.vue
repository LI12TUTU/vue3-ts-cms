<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-show="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      class="el-menu-vertical"
      :default-active="defaultIndex"
      :collapse="collapse"
      router
      :background-color="MENU_BG_COLOR"
      :text-color="MENU_TEXT_COLOR"
      :active-text-color="MENU_ACTIVE_TEXT_COLOR"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon">
                <component :is="formatIcon(item.icon)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                :route="subItem.url ?? '/not-found'"
              >
                <el-icon v-if="subItem.icon">
                  <component :is="formatIcon(subItem.icon)"></component>
                </el-icon>
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''" :route="item.url ?? '/not-found'">
            <el-icon v-if="item.icon">
              <component :is="formatIcon(item.icon)"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useStore } from "@/store"
import { useRoute } from "vue-router"
import { mapPathToMenu } from "@/utils/map-menus"
import {
  MENU_BG_COLOR,
  MENU_TEXT_COLOR,
  MENU_ACTIVE_TEXT_COLOR
} from "@/constants/aside-menu-color"

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    const route = useRoute()
    const currentPath = route.path
    const menu = mapPathToMenu(userMenus.value, currentPath)
    const defaultIndex = ref(menu.id + "")
    const formatIcon = (icon: string) => icon.replace("el-icon-", "")

    return {
      userMenus,
      defaultIndex,
      formatIcon,
      MENU_BG_COLOR,
      MENU_TEXT_COLOR,
      MENU_ACTIVE_TEXT_COLOR
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: @page-aside-bgColor;

  .logo {
    display: flex;
    height: 28px;
    line-height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  &:deep(.el-sub-menu) {
    background-color: @page-aside-bgColor !important;
    // 二级菜单 ( 默认背景 )
    .el-sub-menu__title {
      background-color: @page-aside-bgColor !important;
    }
    .el-menu-item {
      padding-left: 50px !important;
      background-color: @aside-menu-item-bgColor !important;
    }
  }

  // hover 高亮
  .el-menu-item:hover {
    color: @aside-menu-item-active-fontColor !important; // 菜单
  }

  .el-menu-item.is-active {
    color: @aside-menu-item-active-fontColor !important;
    background-color: @aside-menu-item-active-bgColor !important;
  }
}

.el-menu-vertical {
  width: 100%;
  height: calc(100% - @page-header-height);
}
</style>
