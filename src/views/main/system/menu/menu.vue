<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      :pageName="pageName"
      :createName="createName"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { contentTableConfig } from "./config/content-config"

export default defineComponent({
  name: "Menu",
  setup() {
    const pageName = "menu"
    const createName = "新建菜单"
    return {
      pageName,
      createName,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
