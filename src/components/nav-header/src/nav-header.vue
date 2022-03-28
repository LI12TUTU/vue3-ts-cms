<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isFold ? 'expand' : 'fold'"></component>
    </el-icon>
    <div class="content">
      <div>面包屑</div>
      <div>用户信息</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
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
  }
}
</style>
