<template>
  <div class="goods">
    <!-- <page-search></page-search> -->
    <page-content :contentTableConfig="contentTableConfig" pageName="good">
      <template #image="scope">
        <el-image
          class="image"
          fit="contain"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
          lazy
        ></el-image>
      </template>
      <template #oldPrice="scope">
        {{ "￥" + scope.row.oldPrice }}
      </template>
      <template #newPrice="scope">
        {{ "￥" + scope.row.newPrice }}
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { contentTableConfig } from "./config/content-config"

export default defineComponent({
  name: "goods",
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped>
.image {
  width: 60px;
  height: 60px;
}
</style>
