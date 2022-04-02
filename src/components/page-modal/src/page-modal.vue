<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="Warning" width="30%" center>
      <my-form v-bind="modalConfig" v-model="formData"></my-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >Confirm</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue"
import MyForm from "@/base-ui/form"
import { IForm } from "@/base-ui/form"

export default defineComponent({
  props: {
    modalConfig: {
      type: Object as PropType<IForm>,
      required: true
    }
  },
  components: {
    MyForm
  },
  setup(props) {
    const formItems = props.modalConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }
    const formData = ref(formOriginData)
    const dialogVisible = ref(true)
    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped></style>
