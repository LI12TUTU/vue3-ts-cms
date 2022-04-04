import { ref, watch } from "vue"
import { useStore } from "@/store"
import { CHANGE_PAGE_INFO } from "@/store/main/system/system-mutation-type"

export function usePageData(pageName: string) {
  const store = useStore()

  const pageInfo = ref({
    currentPage: 1,
    pageSize: 10
  })

  const getPageData = (queryInfo: any = {}) => {
    store.dispatch("system/getPageListAction", {
      pageName: pageName,
      queryInfo: {
        offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
        size: pageInfo.value.pageSize,
        ...queryInfo
      }
    })
  }

  watch(
    pageInfo,
    (newValue) => {
      getPageData()
      store.commit(`system/${CHANGE_PAGE_INFO}`, newValue)
    },
    { immediate: true }
  )

  return {
    pageInfo,
    getPageData
  }
}
