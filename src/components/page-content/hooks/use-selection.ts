import { ref } from "vue"
import { useStore } from "@/store"

export function useSelection(pageName: string) {
  const store = useStore()
  //批量删除
  const selectInfo = ref<any[]>()
  //保存表格中选中的行
  const handleSelectionChange = (selectValue: any[]) => {
    selectInfo.value = selectValue
  }
  const handleSomeClick = () => {
    selectInfo.value?.forEach((item) => {
      store.dispatch("system/deletePageDataAction", {
        pageName: pageName,
        id: item.id
      })
    })
  }

  return {
    handleSelectionChange,
    handleSomeClick
  }
}
