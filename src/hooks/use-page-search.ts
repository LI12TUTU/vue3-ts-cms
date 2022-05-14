import { ref } from "vue"
import { ElMessage } from "element-plus"
import { useStore } from "@/store"
import { CHANGE_QUERY_INFO } from "@/store/main/system/system-mutation-type"
import PageContent from "@/components/page-content"

/**
 * usePageSearch 实现功能为查询，重置功能
 * @returns {
 *  pageContentRef // 页面表格内容组件实例
 *  handleResetClick // 监听重置按钮点击函数
 *  handleQueryClick // 监听搜索按钮点击函数
 * }
 */
export function usePageSearch() {
  const store = useStore()
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  // const sortField = ref<string>("")

  const handleResetClick = () => {
    // 没有权限时直接return
    if (!pageContentRef.value?.isQuery) return
    // 保存搜索内容到store中
    store.commit(`system/${CHANGE_QUERY_INFO}`, {})
    // 发送网络请求
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick = (queryInfo: any) => {
    if (!pageContentRef.value?.isQuery) {
      ElMessage.error("没有查询权限")
      return
    }
    store.commit(`system/${CHANGE_QUERY_INFO}`, queryInfo)
    pageContentRef.value?.getPageData(queryInfo)
    ElMessage.success("查询成功")
  }

  // const handleSortClick = (sort: string) => {
  //   sortField.value = sort
  // }

  return {
    // sortField,
    pageContentRef,
    handleResetClick,
    handleQueryClick
    // handleSortClick
  }
}
