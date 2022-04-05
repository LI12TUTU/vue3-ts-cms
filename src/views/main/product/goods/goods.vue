<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :pageName="pageName"
      :createName="createName"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
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
    <page-modal
      ref="pageModalRef"
      :pageName="pageName"
      :dialogTitle="dialogTitle"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { searchFormConfig } from "./config/search-config"
import { contentTableConfig } from "./config/content-config"
import { modalConfig } from "./config/modal-config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"

export default defineComponent({
  name: "Goods",
  setup() {
    const pageName = "good"

    const { pageContentRef, handleResetClick, handleQueryClick } =
      usePageSearch()

    const {
      pageModalRef,
      defaultInfo,
      createName,
      dialogTitle,
      handleNewData,
      handleEditData
    } = usePageModal(pageName)

    return {
      pageContentRef,
      pageModalRef,
      defaultInfo,
      pageName,
      createName,
      dialogTitle,
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleNewData,
      handleEditData,
      handleResetClick,
      handleQueryClick
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
