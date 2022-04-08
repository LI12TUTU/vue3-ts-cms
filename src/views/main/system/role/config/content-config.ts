import type { ITable } from "@/base-ui/table"

export const contentTableConfig: ITable = {
  title: "角色列表",
  propsList: [
    {
      prop: "name",
      label: "角色名",
      minWidth: "100"
    },
    {
      prop: "intro",
      label: "权限介绍",
      minWidth: "100"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "create",
      sortable: true
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "250",
      slotName: "update",
      sortable: true
    },
    {
      label: "操作",
      minWidth: "120",
      slotName: "handler"
    }
  ],
  showColumnIndex: true
}
