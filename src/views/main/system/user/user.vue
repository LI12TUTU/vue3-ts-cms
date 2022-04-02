<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @reset-btn-click="handleResetClick"
      @query-btn-click="handleQueryClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="user"
      ref="pageContentRef"
    ></page-content>
    <page-modal :modalConfig="modalConfig"></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { searchFormConfig } from "./config/search-config"
import { contentTableConfig } from "./config/content-config"
import { modalConfig } from "./config/modal-config"

import { usePageSearch } from "@/hooks/use-page-search"

export default defineComponent({
  name: "user",
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } =
      usePageSearch()

    return {
      pageContentRef,
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped lang="less"></style>
