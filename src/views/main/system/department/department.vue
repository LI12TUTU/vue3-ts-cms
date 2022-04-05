<template>
  <div class="department">
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
      <template #parentDepartment="scope">
        {{ formatDepartment(scope.row.parentId) }}
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

export default defineComponent({
  name: "Department",
  setup() {
    const pageName = "department"

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

    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === "parentId"
      )
      departmentItem!.selectOptions = store.state.entireDepartment.map(
        (item) => ({
          label: item.name,
          value: item.id
        })
      )

      return modalConfig
    })

    const formatDepartment = (id: number) => {
      const departmentItem = store.state.entireDepartment.find(
        (item) => item.id === id
      )

      if (departmentItem) {
        return departmentItem.name
      }

      return ""
    }

    return {
      pageContentRef,
      pageModalRef,
      searchFormConfig,
      contentTableConfig,
      modalConfigRef,
      defaultInfo,
      pageName,
      createName,
      dialogTitle,
      handleNewData,
      handleEditData,
      handleResetClick,
      handleQueryClick,
      formatDepartment
    }
  }
})
</script>

<style scoped></style>
