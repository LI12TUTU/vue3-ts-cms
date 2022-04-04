<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
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
      <div class="menu-tree">
        <el-tree
          ref="elTreeRef"
          :data="menus"
          :props="{ children: 'children', label: 'name' }"
          node-key="id"
          show-checkbox
          @check="handleCheckChange"
        />
      </div>
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

import { usePageModal } from "@/hooks/use-page-modal"
import { mapMenuToLeafKeys } from "@/utils/map-menus"

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
        const leafKeys = mapMenuToLeafKeys(item.menuList)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }

    const {
      pageModalRef,
      defaultInfo,
      createName,
      dialogTitle,
      handleNewData,
      handleEditData
    } = usePageModal(pageName, undefined, editCallback)

    return {
      menus,
      pageName,
      createName,
      dialogTitle,
      pageModalRef,
      elTreeRef,
      defaultInfo,
      otherInfo,
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleNewData,
      handleEditData,
      handleCheckChange
    }
  }
})
</script>

<style scoped lang="less">
.menu-tree {
  margin-left: 40px;
}
</style>
