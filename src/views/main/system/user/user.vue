<template>
  <div class="user">
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
    ></page-content>
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
import { defineComponent } from "vue"

import { searchFormConfig } from "./config/search-config"
import { contentTableConfig } from "./config/content-config"
import { modalConfig } from "./config/modal-config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"
import { useConfig } from "@/hooks/use-config"

export default defineComponent({
  name: "User",
  setup() {
    const pageName = "user"

    const { pageContentRef, handleResetClick, handleQueryClick } =
      usePageSearch()

    const passwordItem = modalConfig.formItems.find(
      (item) => item.field === "password"
    )
    const newCallback = () => {
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      passwordItem!.isHidden = true
    }
    const {
      pageModalRef,
      defaultInfo,
      createName,
      dialogTitle,
      handleNewData,
      handleEditData
    } = usePageModal(pageName, newCallback, editCallback)

    const modalConfigRef = useConfig(
      ["departmentId", "roleId"],
      ["entireDepartment", "entireRole"],
      modalConfig
    )

    return {
      pageContentRef,
      pageModalRef,
      pageName,
      createName,
      dialogTitle,
      searchFormConfig,
      contentTableConfig,
      modalConfigRef,
      defaultInfo,
      handleResetClick,
      handleQueryClick,
      handleNewData,
      handleEditData
    }
  }
})
</script>

<style scoped lang="less"></style>
