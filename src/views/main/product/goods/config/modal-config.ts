import { IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称",
      rules: [
        {
          required: true,
          message: "必须输入商品名称",
          trigger: "blur"
        }
      ]
    },
    {
      field: "imgUrl",
      type: "input",
      label: "图片地址",
      placeholder: "请输入图片地址",
      rules: [
        {
          required: true,
          message: "必须输入图片地址",
          trigger: "blur"
        }
      ]
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
      selectOptions: [],
      rules: [
        {
          required: true,
          message: "必须选择商品类别",
          trigger: "blur"
        }
      ]
    },
    {
      field: "oldPrice",
      type: "input",
      label: "原价",
      placeholder: "请输入原价",
      rules: [
        {
          required: true,
          message: "必须输入原价",
          trigger: "blur"
        },
        {
          pattern: /^[0-9]+$/,
          message: "请输入数字",
          trigger: "blur"
        }
      ]
    },
    {
      field: "newPrice",
      type: "input",
      label: "现价",
      placeholder: "请输入现价",
      rules: [
        {
          required: true,
          message: "必须输入现价",
          trigger: "blur"
        },
        {
          pattern: /^[0-9]+$/,
          message: "请输入数字",
          trigger: "blur"
        }
      ]
    },
    {
      field: "inventoryCount",
      type: "input",
      label: "库存数量",
      placeholder: "请输入库存数量",
      rules: [
        {
          required: true,
          message: "必须输入库存数量",
          trigger: "blur"
        },
        {
          pattern: /^[0-9]+$/,
          message: "请输入数字",
          trigger: "blur"
        }
      ]
    },
    {
      field: "saleCount",
      type: "input",
      label: "已售数量",
      placeholder: "请输入已售数量",
      rules: [
        {
          required: true,
          message: "必须输入原价",
          trigger: "blur"
        },
        {
          pattern: /^[0-9]+$/,
          message: "请输入数字",
          trigger: "blur"
        }
      ]
    }
  ],
  itemStyle: {
    paddingTop: "10px"
  },
  colLayout: {
    span: 24
  },
  showFormPadding: false
}
