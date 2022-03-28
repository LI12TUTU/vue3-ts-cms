<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isFold ? 'expand' : 'fold'"></component>
    </el-icon>
    <div class="content">
      <div>面包屑</div>
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
import { defineComponent, ref } from "vue"
import UserInfo from "./user-info.vue"

export default defineComponent({
  components: {
    UserInfo
  },
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
