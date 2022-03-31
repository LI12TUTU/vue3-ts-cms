<template>
  <div class="my-table">
    <div class="my-table-header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      style="width: 100%"
      v-bind="tableOptions"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        width="60"
        align="center"
      ></el-table-column>
      <el-table-column
        v-if="showColumnIndex"
        type="index"
        label="序号"
        width="80px"
        align="center"
      ></el-table-column>
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="my-table-footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    },
    listData: {
      type: Array,
      required: true
    },
    propsList: {
      type: Array as PropType<any[]>,
      required: true
    },
    showColumnIndex: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    },
    tableOptions: {
      type: Object,
      default: () => {
        return {
          border: true
        }
      }
    }
  },
  emits: ["selectionChange"],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit("selectionChange", value)
    }
    return {
      handleSelectionChange
    }
  }
})
</script>

<style scoped lang="less">
.my-table-header {
  display: flex;
  height: 45px;
  padding: 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.my-table-footer {
  margin-top: 15px;

  .el-pagination {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
