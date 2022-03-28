<template>
  <div class="user">
    <my-form v-bind="formConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import MyForm from "@/base-ui/form"
import { formConfig } from "./config/search-config"

export default defineComponent({
  name: "user",
  components: {
    MyForm
  },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
