<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    ></page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      :pageName="pageName"
      :createName="createName"
      @newBtnClick="handleNewData"
      @editBtnClick="handleEditData"
    ></page-content>
    <page-modal
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      :pageName="pageName"
      :dialogTitle="dialogTitle"
    >
      <template #default>
        <div class="menu-tree">
          <span class="title">权限分配</span>
          <el-tree
            ref="elTreeRef"
            :data="menus"
            :props="{ children: 'children', label: 'name' }"
            node-key="id"
            show-checkbox
            @check="handleCheckChange"
          />
        </div>
      </template>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, nextTick } from "vue"
import { useStore } from "@/store"
import { ElTree } from "element-plus"

import { searchFormConfig } from "./config/search-config"
import { contentTableConfig } from "./config/content-config"
import { modalConfig } from "./config/modal-config"

import { usePageSearch } from "@/hooks/use-page-search"
import { usePageModal } from "@/hooks/use-page-modal"
import { mapMenusToLeafKeys } from "@/utils/map-menus"

export default defineComponent({
  name: "Role",
  setup() {
    const pageName = "role"

    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      nextTick(() => {
        const leafKeys = mapMenusToLeafKeys(item.menuList)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const { pageContentRef, handleResetClick, handleQueryClick } =
      usePageSearch()
    const {
      pageModalRef,
      defaultInfo,
      createName,
      dialogTitle,
      handleNewData,
      handleEditData
    } = usePageModal(pageName, undefined, editCallback)

    return {
      pageContentRef,
      pageModalRef,
      elTreeRef,
      menus,
      pageName,
      createName,
      dialogTitle,
      defaultInfo,
      otherInfo,
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleNewData,
      handleEditData,
      handleResetClick,
      handleQueryClick,
      handleCheckChange
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  width: 100%;
  display: flex;

  .title {
    width: 100px;
    padding-right: 12px;
    box-sizing: border-box;
    flex: 0 0 auto;
    font-size: 14px;
    color: #606060;
    text-align: right;
  }
}
</style>
