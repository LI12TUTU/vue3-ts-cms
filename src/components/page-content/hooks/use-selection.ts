import { ref } from "vue"
import { useStore } from "@/store"

export function useSelection(pageName: string) {
  const dialogVisible = ref(false)
  // 是否批量删除
  const isMore = ref(false)
  // 删除的信息
  const info = ref()
  const store = useStore()

  const handleDeleteClick = (item: any) => {
    dialogVisible.value = true
    isMore.value = false
    info.value = item
  }
  //批量删除
  const selectInfo = ref<any[]>()
  //是否展示选择框
  const showSelectColumn = ref(false)
  const handleSomeManageClick = () => {
    showSelectColumn.value = !showSelectColumn.value
  }
  //保存表格中选中的行
  const handleSelectionChange = (selectValue: any[]) => {
    selectInfo.value = selectValue
  }
  const handleSomeDeleteClick = () => {
    if (selectInfo.value?.length) {
      isMore.value = true
      dialogVisible.value = true
    }
  }

  const handleConfimClick = () => {
    dialogVisible.value = false
    if (isMore.value) {
      selectInfo.value?.forEach((item) => {
        store.dispatch("system/deletePageDataAction", {
          pageName: pageName,
          id: item.id
        })
      })
    } else {
      store.dispatch("system/deletePageDataAction", {
        pageName: pageName,
        id: info.value.id
      })
    }
  }

  return {
    dialogVisible,
    showSelectColumn,
    handleDeleteClick,
    handleSomeManageClick,
    handleSelectionChange,
    handleSomeDeleteClick,
    handleConfimClick
  }
}
