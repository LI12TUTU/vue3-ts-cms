<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb
      :separator="separatorOptions.separator"
      :separator-icon="separatorOptions.separatorIcon"
    >
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { IBreadcrumb, ISeparatorOption } from "../types"

export default defineComponent({
  props: {
    breadcrumbs: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    },
    separatorOptions: {
      type: Object as PropType<ISeparatorOption>,
      default: () => {
        return {
          separator: "",
          separatorIcon: "ArrowRight"
        }
      }
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
