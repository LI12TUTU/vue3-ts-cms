<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfigRef"
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
      <!-- <template #oldPrice="scope">
        {{ +scope.row.oldPrice }}
      </template>
      <template #newPrice="scope">
        {{ typeof +scope.row.newPrice }}
      </template> -->
      <template #category="scope">
        {{ formatCategory(scope.row.categoryId) }}
      </template>
    </page-content>
    <page-modal
      ref="pageModalRef"
      :pageName="pageName"
      :dialogTitle="dialogTitle"
      :modalConfig="modalConfigRef"
      :defaultInfo="defaultInfo"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"

import { searchFormConfig } from "./config/search-config"
import { contentTableConfig } from "./config/content-config"
import { modalConfig } from "./config/modal-config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"
import { useCategory } from "./hooks/use-category"

export default defineComponent({
  name: "Goods",
  setup() {
    const pageName = "good"
    const store = useStore()
    const entireCategory = computed(() => store.state.entireCategory)

    const formatCategory = (id: number) => {
      const category = entireCategory.value.find((item) => item.id === id)
      return category?.name ?? ""
    }

    const { pageContentRef, handleResetClick, handleQueryClick } =
      usePageSearch()

    // provide("sortField", readonly(sortField))

    const {
      pageModalRef,
      defaultInfo,
      createName,
      dialogTitle,
      handleNewData,
      handleEditData
    } = usePageModal(pageName)

    const modalConfigRef = useCategory(modalConfig)
    const searchFormConfigRef = useCategory(searchFormConfig)

    return {
      pageContentRef,
      pageModalRef,
      defaultInfo,
      pageName,
      createName,
      dialogTitle,
      searchFormConfigRef,
      contentTableConfig,
      modalConfigRef,
      handleNewData,
      handleEditData,
      handleResetClick,
      handleQueryClick,
      formatCategory
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
