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
      prop: "oldPrice",
      label: "原价",
      minWidth: "80",
      slotName: "oldPrice"
    },
    {
      prop: "newPrice",
      label: "现价",
      minWidth: "80",
      slotName: "newPrice"
    },
    {
      prop: "inventoryCount",
      label: "库存",
      minWidth: "80"
    },
    {
      prop: "saleCount",
      label: "已售",
      minWidth: "80"
    },
    {
      prop: "favorCount",
      label: "喜欢",
      minWidth: "80"
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
  ]
}
