<template>
  <div class="page-content">
    <my-table
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      :listData="dataList"
      :listCount="dataCount"
      @selectionChange="handleSelectionChange"
    >
      <template #headerHandler>
        <slot name="header">
          <el-button v-if="isCreate" type="primary" @click="handleNewClick">
            {{ createName }}
          </el-button>
          <el-button
            v-if="isDelete && contentTableConfig.showSelectColumn"
            type="primary"
            @click="handleSomeClick"
          >
            批量删除
          </el-button>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue"
import { useStore } from "@/store"
import MyTable from "@/base-ui/table"
import type { ITable } from "@/base-ui/table"
import { usePermission } from "@/hooks/use-premission"
import { useSelection } from "../hooks/use-selection"
import { usePageData } from "../hooks/use-page-data"

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

    const handleDeleteClick = (item: any) => {
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id
      })
    }

    const handleNewClick = () => {
      emit("newBtnClick")
    }

    const handleEditClick = (item: any) => {
      emit("editBtnClick", item)
    }

    const { pageInfo, getPageData } = usePageData(props.pageName)

    const { handleSelectionChange, handleSomeClick } = useSelection(
      props.pageName
    )

    return {
      dataList,
      dataCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      getPageData,
      handleDeleteClick,
      handleNewClick,
      handleEditClick,
      handleSomeClick,
      handleSelectionChange
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
</style>
