import type { ITable } from "@/base-ui/table"

export const contentTableConfig: ITable = {
  title: "部门列表",
  propsList: [
    {
      prop: "name",
      label: "部门名称",
      minWidth: "100"
    },
    {
      prop: "leader",
      label: "领导",
      minWidth: "100"
    },
    {
      prop: "parentId",
      label: "上级部门",
      minWidth: "100",
      slotName: "parentDepartment"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "230",
      slotName: "create",
      sortable: true
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "230",
      slotName: "update",
      sortable: true
    },
    {
      label: "操作",
      minWidth: "140",
      slotName: "handler"
    }
  ],
  showColumnIndex: true
}
