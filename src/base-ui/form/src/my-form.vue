<template>
  <div
    class="my-form"
    :style="{ paddingTop: showFormPadding ? '22px' : '0px' }"
  >
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      ref="ElFormRef"
      v-bind="formOptions"
      :model="modelValue"
      :label-width="labelWidth"
    >
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              v-bind="item.formItemOptions"
              :style="itemStyle"
              :prop="item.field"
              :label="item.label"
              :rules="item.rules"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  v-bind="item.otherOptions"
                  :placeholder="item.placeholder ?? ''"
                  :show-password="item.type === 'password'"
                  :model-value="modelValue[item.field]"
                  @update:model-value="handleValueChange($event, item.field)"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  :model-value="modelValue[item.field]"
                  @update:model-value="handleValueChange($event, item.field)"
                >
                  <el-option
                    v-for="option in item.selectOptions"
                    :key="option.value"
                    :value="option.value"
                    :label="option.label"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datapicker'">
                <el-date-picker
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  :model-value="modelValue[item.field]"
                  @update:model-value="handleValueChange($event, item.field)"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue"
import { ElForm } from "element-plus"
import { IFormItem, IModelValue } from "../types"

export default defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<IModelValue>,
      required: true
    },
    formOptions: {
      type: Object,
      default: () => ({})
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "100px"
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: "10px 20px" })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    showFormPadding: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    //#region
    // const formData = ref({ ...props.modelValue })

    // watch(
    //   formData,
    //   (newValue) => {
    //     // 对modelValue浅拷贝后得到的新对象设置回去，因此两个对象实际上指向的都是这个newValue(formData.value),
    //     // 因此修改内部属性会生效
    //     emit("update:modelValue", newValue)
    //     console.log(props.modelValue === formData.value)
    //   },
    //   {
    //     deep: true
    //   }
    // )
    //#endregion

    const ElFormRef = ref<InstanceType<typeof ElForm>>()
    const confimAction = () => {
      const validPromise = ElFormRef.value?.validate()
      return validPromise
    }

    const handleValueChange = (value: string, field: string) => {
      emit("update:modelValue", { ...props.modelValue, [field]: value })
    }

    return {
      ElFormRef,
      confimAction,
      handleValueChange
    }
  }
})
</script>

<style scoped lang="less">
.my-form {
  padding-top: 22px;
}
</style>
