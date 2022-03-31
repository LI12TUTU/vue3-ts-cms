<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig"></page-search>

    <div class="content">
      <my-table
        :title="'用户列表'"
        :listData="userList"
        :propsList="propsList"
        :showColumnIndex="isShowColumnIndex"
        :showSelectColumn="true"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { searchFormConfig } from "./config/search-config"
import PageSearch from "@/components/page-search"
import MyTable from "@/base-ui/table"
import { useStore } from "@/store"

export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    MyTable
  },
  setup() {
    const store = useStore()
    store.dispatch("system/getPageListAction", {
      pageUrl: "/users/list",
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const propsList = [
      {
        prop: "name",
        label: "用户名",
        minWidth: "100"
      },
      {
        prop: "realname",
        label: "真实姓名",
        minWidth: "100"
      },
      {
        prop: "cellphone",
        label: "手机号码",
        minWidth: "120"
      },
      {
        prop: "enable",
        label: "状态",
        minWidth: "100",
        slotName: "status"
      },
      {
        prop: "createAt",
        label: "创建时间",
        minWidth: "250",
        slotName: "create"
      },
      {
        prop: "updateAt",
        label: "更新时间",
        minWidth: "250",
        slotName: "update"
      },
      {
        label: "操作",
        minWidth: "120",
        slotName: "handler"
      }
    ]
    const isShowColumnIndex = true
    // const userCount = computed(() => store.state.system.userCount)
    return {
      searchFormConfig,
      userList,
      propsList,
      isShowColumnIndex
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid @page-content-bgColor;
}
</style>
