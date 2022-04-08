import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "address",
      type: "input",
      label: "地区",
      placeholder: "请输入地区"
    },
    {
      field: "categoryId",
      type: "select",
      label: "商品类别",
      placeholder: "请选择商品类别",
      selectOptions: []
    },
    {
      field: "createAt",
      type: "datapicker",
      label: "创建时间",
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
        unlinkPanels: true
      }
    }
    // {
    //   field: "sort",
    //   type: "select",
    //   label: "排序",
    //   placeholder: "请选择排序字段",
    //   selectOptions: [
    //     {
    //       label: "原价",
    //       value: "oldPrice"
    //     },
    //     {
    //       label: "现价",
    //       value: "newPrice"
    //     },
    //     {
    //       label: "库存",
    //       value: "inventoryCount"
    //     },
    //     {
    //       label: "已售",
    //       value: "saleCount"
    //     },
    //     {
    //       label: "收藏",
    //       value: "favorCount"
    //     }
    //   ]
    // }
  ]
}
