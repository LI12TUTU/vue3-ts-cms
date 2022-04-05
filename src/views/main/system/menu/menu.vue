<template>
  <div class="menu">
    <page-content
      :pageName="pageName"
      :createName="createName"
      :contentTableConfig="contentTableConfig"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    >
      <template #permission="scope">
        {{ scope.row.permission ? "有权限" : "" }}
      </template>
      <template #menuType="scope">
        {{ formatMenuType(scope.row.type) }}
      </template>
      <template #parentMenu="scope">
        {{ formatParentMenu(scope.row.parentId) }}
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
import { defineComponent, ref, computed } from "vue"
import { useStore } from "@/store"

import { contentTableConfig } from "./config/content-config"
import { modalConfig } from "./config/modal-config"

import { usePageModal } from "@/hooks/use-page-modal"
import { mapIdToMenuName, mapMenusToOptions } from "@/utils/map-menus"

export default defineComponent({
  name: "Menu",
  setup() {
    const pageName = "menu"
    const store = useStore()
    const menuList = computed(() => store.state.entireMenu)
    const menuValue = ref({})

    const {
      pageModalRef,
      defaultInfo,
      createName,
      dialogTitle,
      handleNewData,
      handleEditData
    } = usePageModal(pageName)

    const formatMenuType = (type: number) => {
      switch (type) {
        case 1:
          return "一级菜单"
        case 2:
          return "二级菜单"
        case 3:
          return "按钮权限"
      }
    }

    const formatParentMenu = (id: number) => {
      return mapIdToMenuName(id, menuList.value)
    }

    const modalConfigRef = computed(() => {
      const parentMenu = modalConfig.formItems.find(
        (item) => item.field === "parentId"
      )
      const options = mapMenusToOptions(menuList.value)

      parentMenu!.selectOptions = options

      return modalConfig
    })
    return {
      pageName,
      pageModalRef,
      defaultInfo,
      createName,
      dialogTitle,
      contentTableConfig,
      modalConfigRef,
      menuValue,
      menuList,
      handleNewData,
      handleEditData,
      formatMenuType,
      formatParentMenu
    }
  }
})
</script>

<style scoped></style>
