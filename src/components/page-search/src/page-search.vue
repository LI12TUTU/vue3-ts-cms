<template>
  <div class="page-search">
    <my-form v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="handle-btns">
          <!-- <el-button
            v-if="showSortBtn"
            icon="sort"
            type="primary"
            @click="handleSortClick"
          >
            排序
          </el-button> -->
          <el-button icon="refresh" type="success" @click="handleResetClick">
            重置
          </el-button>
          <el-button icon="search" type="primary" @click="handleQueryClick">
            搜索
          </el-button>
        </div>
      </template>
    </my-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue"
import MyForm from "@/base-ui/form"
import { IForm } from "@/base-ui/form"

export default defineComponent({
  components: {
    MyForm
  },
  props: {
    searchFormConfig: {
      type: Object as PropType<IForm>,
      required: true
    }
    // showSortBtn: {
    //   type: Boolean,
    //   default: false
    // }
  },
  emits: ["resetBtnClick", "queryBtnClick"],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }
    const formData = ref(formOriginData)
    const handleResetClick = () => {
      formData.value = formOriginData
      emit("resetBtnClick")
      //#region
      // for (const key in formOriginData) {
      //   formData.value[key] = formOriginData[key]
      // }
      //#endregion
    }

    const handleQueryClick = () => {
      emit("queryBtnClick", formData.value)
    }

    // const handleSortClick = () => {
    //   emit("sortBtnClick", formData.value["sort"])
    // }

    return {
      formData,
      handleQueryClick,
      handleResetClick
    }
  }
})
</script>

<style scoped lang="less">
.page-search {
  width: 100%;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
