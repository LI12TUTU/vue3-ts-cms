import { ref } from "vue"
import PageModal from "@/components/page-modal"

type CallbackFn = (...args: any[]) => any

interface IName {
  createName: string
  editName: string
}

interface INameMap {
  [key: string | symbol]: IName
}

const nameMap: INameMap = {
  user: {
    createName: "新建用户",
    editName: "编辑用户"
  },
  role: {
    createName: "新建角色",
    editName: "编辑角色"
  }
}

export function usePageModal(
  pageName: string,
  newCb?: CallbackFn,
  editCb?: CallbackFn
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const dialogTitle = ref("")
  const createName = nameMap[pageName].createName
  const editName = nameMap[pageName].editName

  const handleNewData = () => {
    defaultInfo.value = {}
    dialogTitle.value = createName
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }

  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    dialogTitle.value = editName
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }

  return {
    pageModalRef,
    defaultInfo,
    createName,
    dialogTitle,
    handleNewData,
    handleEditData
  }
}
