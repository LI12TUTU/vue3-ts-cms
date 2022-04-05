import type { ITable } from "@/base-ui/table"

export const contentTableConfig: ITable = {
  title: "商品分类",
  propsList: [
    {
      prop: "name",
      label: "商品类别",
      minWidth: "100"
    },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "230",
      slotName: "create"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "230",
      slotName: "update"
    },
    {
      label: "操作",
      minWidth: "140",
      slotName: "handler"
    }
  ],
  showColumnIndex: true,
  showSelectColumn: true
}
