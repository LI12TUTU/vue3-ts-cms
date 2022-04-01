<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isFold ? 'expand' : 'fold'"></component>
    </el-icon>
    <div class="content">
      <my-breadcrumb :breadcrumbs="breadcrumbs" />
      <div class="right">
        <div class="icons">
          <el-icon :size="20" class="icon">
            <chat-dot-round />
          </el-icon>
          <el-icon :size="20" class="icon">
            <collection-tag />
          </el-icon>
          <el-icon :size="20" class="icon">
            <bell />
          </el-icon>
        </div>
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "@/store"

import MyBreadcrumb from "@/base-ui/breadcrumb"
import UserInfo from "./user-info.vue"

import { isFold, useScreen } from "./hooks/useScreen"
import { mapPathToBreadcrumbs } from "@/utils/map-menus"

export default defineComponent({
  components: {
    UserInfo,
    MyBreadcrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }
    useScreen(emit)

    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return mapPathToBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      breadcrumbs,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  align-items: center;
  width: 100%;
  .fold-menu {
    font-size: 25px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav-breadcrumb {
      min-width: 200px;
    }

    .right {
      display: flex;

      .icons {
        display: flex;
        align-items: center;
        margin-right: 20px;

        .icon {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
