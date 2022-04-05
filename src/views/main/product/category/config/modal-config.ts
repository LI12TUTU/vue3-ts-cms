import { IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品类别",
      placeholder: "请输入商品类别",
      rules: [
        {
          required: true,
          message: "必须输入商品类别",
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
