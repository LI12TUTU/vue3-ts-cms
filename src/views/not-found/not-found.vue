<template>
  <div class="not-found">
    <h2 class="title">Not Found 404</h2>
    <el-button type="info" @click="handleBackClick">返回</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"

export default defineComponent({
  setup() {
    const router = useRouter()
    const handleBackClick = () => {
      router.back()
    }
    return {
      handleBackClick
    }
  }
})
</script>

<style scoped lang="less">
.not-found {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    text-align: center;
    font-size: 50px;
  }
}
</style>
