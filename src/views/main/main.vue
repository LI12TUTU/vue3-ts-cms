<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <nav-header @fold-change="handleFoldChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view #default="{ Component }">
              <keep-alive>
                <component :is="Component"></component>
              </keep-alive>
            </router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import NavMenu from "@/components/nav-menu"
import NavHeader from "@/components/nav-header"

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.main-content,
.page {
  height: 100%;
}

// .el-scrollbar {
//   height: calc(100% - 48px);

//   &:deep(.el-scrollbar__view) {
//     height: 100%;
//   }
// }

.page-content {
  height: calc(100% - 48px);
  .scrollbar();
  .page-info {
    background-color: @page-content-info-bgColor;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  display: flex;
  color: @page-font-color;
  text-align: center;
  align-items: center;
}

.el-header {
  height: @page-header-height !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: @page-aside-bgColor;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: @page-font-color;
  text-align: center;
  background-color: @page-content-bgColor;
}
</style>
