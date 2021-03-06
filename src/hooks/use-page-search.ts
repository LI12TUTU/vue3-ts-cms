import { ref } from "vue"
import { ElMessage } from "element-plus"
import { useStore } from "@/store"
import { CHANGE_QUERY_INFO } from "@/store/main/system/system-mutation-type"
import PageContent from "@/components/page-content"

export function usePageSearch() {
  const store = useStore()
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  // const sortField = ref<string>("")

  const handleResetClick = () => {
    if (!pageContentRef.value?.isQuery) return
    store.commit(`system/${CHANGE_QUERY_INFO}`, {})
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
