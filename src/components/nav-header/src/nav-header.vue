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
            <cloudy />
          </el-icon>
          <span class="info">{{ weather.tem + "℃" }}</span>
          <el-icon :size="20" class="icon">
            <location-information />
          </el-icon>
          <span class="info">{{ weather.country + weather.city }}</span>
          <el-icon :size="20" class="icon">
            <calendar />
          </el-icon>
          <span class="info">{{ weather.week }}</span>
          <span class="info">{{ time }}</span>
        </div>
        <user-info />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "@/store"

import axios from "axios"

import MyBreadcrumb from "@/base-ui/breadcrumb"
import UserInfo from "./user-info.vue"

import { useScreen } from "../hooks/use-screen"
import { mapPathToBreadcrumbs } from "@/utils/map-menus"
import { formatTimestamp } from "@/utils/date-format"

export default defineComponent({
  components: {
    UserInfo,
    MyBreadcrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = useScreen(emit)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }

    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return mapPathToBreadcrumbs(userMenus, currentPath)
    })

    const time = ref(formatTimestamp(new Date().getTime()))
    onMounted(() => {
      setInterval(() => {
        time.value = formatTimestamp(new Date().getTime())
      }, 1000)
    })

    const weather = ref<any>({
      tem: "",
      city: "",
      country: "",
      week: ""
    })

    axios
      .get(
        "https://v0.yiketianqi.com/api?unescape=1&version=v61&vue=1&appid=68497128&appsecret=Q2LCduLg"
      )
      .then((res) => {
        weather.value = res.data
      })

    return {
      isFold,
      time,
      weather,
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
        color: #777b82;

        .icon {
          margin-right: 5px;
        }
        .info {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
