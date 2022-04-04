<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="dialogTitle"
      width="30%"
      center
      destroy-on-close
    >
      <my-form
        ref="myFormRef"
        v-bind="modalConfig"
        v-model="formData"
      ></my-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfimClick">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue"
import { useStore } from "@/store"
import MyForm from "@/base-ui/form"
import { IForm } from "@/base-ui/form"
import { IDefaultInfo } from "../types"

export default defineComponent({
  props: {
    modalConfig: {
      type: Object as PropType<IForm>,
      required: true
    },
    defaultInfo: {
      type: Object as PropType<IDefaultInfo>,
      default: () => {}
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    dialogTitle: {
      type: String,
      required: true
    }
  },
  components: {
    MyForm
  },
  setup(props) {
    const formData = ref<IDefaultInfo>({})
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[item.field] = newValue[item.field] ?? ""
        }
      }
    )

    const store = useStore()
    const myFormRef = ref<InstanceType<typeof MyForm>>()
    const dialogVisible = ref(false)
    const handleConfimClick = async () => {
      let isValid
      try {
        // 拿到表单验证结果，验证不通过就不发送网络请求
        isValid = await myFormRef.value?.confimAction()
      } catch (err) {
        return
      }
      if (!isValid) return
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }

    return {
      myFormRef,
      dialogVisible,
      formData,
      handleConfimClick
    }
  }
})
</script>

<style scoped></style>
