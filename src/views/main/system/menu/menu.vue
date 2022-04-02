<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { contentTableConfig } from "./config/content-config"

export default defineComponent({
  name: "my-menu",
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
