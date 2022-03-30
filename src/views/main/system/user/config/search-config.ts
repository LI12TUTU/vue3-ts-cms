import { IForm } from "@/base-ui/form"

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名"
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      rules: [],
      placeholder: "请输入密码"
    },
    {
      field: "sport",
      type: "select",
      label: "运动",
      rules: [],
      placeholder: "请选择运动",
      selectOptions: [
        { title: "篮球", value: "basketball" },
        { title: "足球", value: "football" }
      ]
    },
    {
      field: "time",
      type: "datapicker",
      label: "时间",
      rules: [],
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "daterange",
        unlinkPanels: true
      }
    }
  ]
}
