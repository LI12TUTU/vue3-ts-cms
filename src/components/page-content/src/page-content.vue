<template>
  <div class="page-content">
    <my-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
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
      <template #handler>
        <div>
          <el-button type="text" size="small" icon="edit">编辑</el-button>
          <el-button type="text" size="small" icon="delete">删除</el-button>
        </div>
      </template>
    </my-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed, watch } from "vue"
import MyTable from "@/base-ui/table"
import type { ITable } from "@/base-ui/table"
import { useStore } from "@/store"

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
    }
  },
  setup(props) {
    const store = useStore()
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    })

    const getPageData = (queryInfo: any = {}) => {
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    watch(pageInfo, () => getPageData(), { immediate: true })
    const dataList = computed(() =>
      store.getters["system/pageListData"](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters["system/pageListCount"](props.pageName)
    )

    return {
      dataList,
      dataCount,
      pageInfo,
      getPageData
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
</style>
