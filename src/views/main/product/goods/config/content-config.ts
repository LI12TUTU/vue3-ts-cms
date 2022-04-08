import type { ITable } from "@/base-ui/table"

export const contentTableConfig: ITable = {
  title: "商品列表",
  propsList: [
    {
      prop: "name",
      label: "商品名称",
      minWidth: "120"
    },
    {
      prop: "imgUrl",
      label: "商品图片",
      minWidth: "120",
      slotName: "image"
    },
    {
      prop: "address",
      label: "地区",
      minWidth: "80"
    },
    {
      prop: "categoryId",
      label: "商品类别",
      minWidth: "100",
      slotName: "category"
    },
    {
      prop: "oldPrice",
      label: "原价",
      minWidth: "80",
      slotName: "oldPrice",
      sortable: true
    },
    {
      prop: "newPrice",
      label: "现价",
      minWidth: "80",
      slotName: "newPrice",
      sortable: true
    },
    {
      prop: "inventoryCount",
      label: "库存",
      minWidth: "80",
      sortable: true
    },
    {
      prop: "saleCount",
      label: "已售",
      minWidth: "80",
      sortable: true
    },
    {
      prop: "favorCount",
      label: "收藏",
      minWidth: "80",
      sortable: true
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
  showSelectColumn: true
}
