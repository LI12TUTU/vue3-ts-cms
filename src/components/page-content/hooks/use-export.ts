import { ref } from "vue"
import MyTable from "@/base-ui/table"
import { exportTableToExcel } from "@/utils/xlsx"

export function useExport(filename = "列表") {
  const myTableRef = ref<InstanceType<typeof MyTable>>()

  // if (appendTime) {
  //   filename += formatExportExcel()
  // }

  const handleExportClick = () => {
    exportTableToExcel(myTableRef.value?.tableEl, filename + ".xlsx")
  }

  return {
    myTableRef,
    handleExportClick
  }
}
