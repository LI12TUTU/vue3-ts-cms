import type { ITable } from "@/base-ui/table"

export const contentTableConfig: ITable = {
  title: "菜单列表",
  propsList: [
    {
      prop: "name",
      label: "菜单名称",
      minWidth: "100"
    },
    {
      prop: "type",
      label: "菜单类型",
      minWidth: "100"
    },
    {
      prop: "premission",
      label: "按钮权限",
      minWidth: "100"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "250",
      slotName: "create"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "250",
      slotName: "update"
    },
    {
      label: "操作",
      minWidth: "120",
      slotName: "handler"
    }
  ],
  tableOptions: {
    border: true,
    rowKey: "id",
    treeProp: {
      children: "children"
    }
  },
  showFooter: false
}
