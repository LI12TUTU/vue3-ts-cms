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
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="my-table-footer" v-if="showFooter">
      <slot name="footer">
        <el-pagination
          :currentPage="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[10, 20, 30]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
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
    listCount: {
      type: Number,
      default: 0
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
    },
    page: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  emits: ["selectionChange", "update:page"],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit("selectionChange", value)
    }

    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage })
    }

    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize })
    }
    return {
      handleSelectionChange,
      handleCurrentChange,
      handleSizeChange
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
