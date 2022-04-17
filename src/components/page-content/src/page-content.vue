<template>
  <div class="page-content">
    <my-table
      ref="myTableRef"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      :listData="dataList"
      :listCount="dataCount"
      :showSelectColumn="showSelectColumn"
      @selectionChange="handleSelectionChange"
    >
      <template #headerHandler>
        <slot name="header">
          <div class="btn-container">
            <el-button v-if="isCreate" type="primary" @click="handleNewClick">
              {{ createName }}
            </el-button>
            <el-button
              v-if="showExportBtn"
              type="primary"
              @click="handleExportClick"
            >
              导出
            </el-button>
            <el-button
              v-if="isDelete"
              type="primary"
              @click="handleSomeManageClick"
            >
              批量管理
            </el-button>
            <el-button
              v-if="isDelete"
              type="danger"
              @click="handleSomeDeleteClick"
            >
              批量删除
            </el-button>
          </div>
        </slot>
      </template>
      <template #status="scope">
        <el-button
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          size="small"
        >
          {{ scope.row.enable ? "启用" : "禁用" }}
        </el-button>
      </template>
      <template #create="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #update="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div>
          <el-button
            v-if="isUpdate"
            type="text"
            size="small"
            icon="edit"
            @click="handleEditClick(scope.row)"
          >
            编辑
          </el-button>
          <el-button
            v-if="isDelete"
            class="delete-btn"
            type="text"
            size="small"
            icon="delete"
            @click="handleDeleteClick(scope.row)"
          >
            删除
          </el-button>
        </div>
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </my-table>
    <el-dialog
      v-model="dialogVisible"
      title="提示"
      top="30vh"
      width="20%"
      center
      show-close
      append-to-body
      destroy-on-close
    >
      <div class="dialog-content">
        <el-icon class="warning-icon" color="#e6a23c" :size="20">
          <warning-filled />
        </el-icon>
        <span>是否删除数据？</span>
      </div>
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
import { defineComponent, PropType, computed } from "vue"
import { useStore } from "@/store"
import MyTable from "@/base-ui/table"
import type { ITable } from "@/base-ui/table"
import { usePermission } from "@/hooks/use-permission"
import { useSelection } from "../hooks/use-selection"
import { usePageData } from "../hooks/use-page-data"
import { useExport } from "../hooks/use-export"

export default defineComponent({
  components: {
    MyTable
  },
  props: {
    contentTableConfig: {
      type: Object as PropType<ITable>,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    createName: {
      type: String,
      required: true
    },
    showExportBtn: {
      type: Boolean,
      default: true
    }
  },
  emits: ["newBtnClick", "editBtnClick"],
  setup(props, { emit }) {
    const store = useStore()

    //查询相关权限
    const isCreate = usePermission(props.pageName, "create")
    const isDelete = usePermission(props.pageName, "delete")
    const isUpdate = usePermission(props.pageName, "update")
    const isQuery = usePermission(props.pageName, "query")

    //获取页面数据和数据总数
    const dataList = computed(() =>
      store.getters["system/pageListData"](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters["system/pageListCount"](props.pageName)
    )

    //获取页面的其他插槽
    const otherPropSlots = props.contentTableConfig.propsList.filter((item) => {
      if (!item.slotName) return false
      if (item.slotName === "status") return false
      if (item.slotName === "create") return false
      if (item.slotName === "update") return false
      if (item.slotName === "handler") return false
      return true
    })

    const handleNewClick = () => {
      emit("newBtnClick")
    }

    const handleEditClick = (item: any) => {
      emit("editBtnClick", item)
    }

    const { pageInfo, getPageData } = usePageData(props.pageName)

    const {
      dialogVisible,
      showSelectColumn,
      handleDeleteClick,
      handleSomeManageClick,
      handleSelectionChange,
      handleSomeDeleteClick,
      handleConfimClick
    } = useSelection(props.pageName)

    const { myTableRef, handleExportClick } = useExport(
      props.contentTableConfig?.title
    )

    return {
      myTableRef,
      dataList,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      showSelectColumn,
      dialogVisible,
      handleSomeManageClick,
      getPageData,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
      handleSomeDeleteClick,
      handleSelectionChange,
      handleExportClick,
      handleConfimClick
    }
  }
})
</script>

<style scoped lang="less">
.page-content {
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  border-top: 20px solid @page-content-bgColor;
}

.delete-btn {
  color: red;
}

.btn-container {
  display: flex;
  justify-content: flex-end;
  min-width: 400px;
}

.dialog-content {
  display: flex;
  justify-content: center;
  align-items: center;
  .warning-icon {
    margin-right: 5px;
  }
}
</style>
