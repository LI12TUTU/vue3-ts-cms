import { ref, watch, computed } from "vue"
import { useStore } from "@/store"
import { CHANGE_PAGE_INFO } from "@/store/main/system/system-mutation-type"

export function usePageData(pageName: string) {
  const store = useStore()

  const pageInfo = ref({
    currentPage: 1,
    pageSize: 10
  })

  const defaultInfo = computed(() => store.state.system.queryInfo)

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
      getPageData(defaultInfo.value)
      store.commit(`system/${CHANGE_PAGE_INFO}`, newValue)
    },
    { immediate: true }
  )

  return {
    pageInfo,
    getPageData
  }
}
