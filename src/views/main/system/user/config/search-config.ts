import { IForm } from "@/base-ui/form"

export const formConfig: IForm = {
  formItems: [
    {
      type: "input",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名"
    },
    {
      type: "password",
      label: "密码",
      rules: [],
      placeholder: "请输入密码"
    },
    {
      type: "select",
      label: "运动",
      rules: [],
      placeholder: "请选择运动",
      options: [
        { title: "篮球", value: "basketball" },
        { title: "足球", value: "football" }
      ]
    },
    {
      type: "datapicker",
      label: "时间",
      rules: [],
      otherOptions: {
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间",
        type: "date-range"
      }
    }
  ]
}
