<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <!-- 本地url导入不生效，需要在js中导入 -->
        <el-avatar :src="avatarUrl" :size="30" />
        <!-- <span class="user-name">{{ name }}</span> -->
        <el-icon><arrow-down /></el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="handleExitLoginClick">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "@/store"
import avatarUrl from "@/assets/img/avatar.jpg"
import { changeFirstMenu } from "@/utils/map-menus"
import { localCache } from "@/utils/cache"
import {
  TOKEN_KEY,
  USER_INFO_KEY,
  USER_MENUS_KEY
} from "@/constants/storage-key"

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.login.userInfo.name)
    const handleExitLoginClick = () => {
      router.push("/login")
      // 清空缓存
      localCache.removeItem(TOKEN_KEY)
      localCache.removeItem(USER_INFO_KEY)
      localCache.removeItem(USER_MENUS_KEY)
      // 清空store数据
      store.dispatch("clearStoreDataAction")
      // 清空第一个菜单
      changeFirstMenu()
    }
    return {
      name,
      avatarUrl,
      handleExitLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;

  .user-name {
    margin: 0 10px;
  }
}
</style>
