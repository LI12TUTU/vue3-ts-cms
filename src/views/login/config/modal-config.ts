import { IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
      rules: [
        {
          required: true,
          message: "必须输入用户名",
          trigger: "blur"
        },
        {
          pattern: /^[a-z0-9]{3,10}$/i,
          message: "用户名必须是3~10个字符或者数字",
          tigger: "blur"
        }
      ]
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
      rules: [
        {
          required: true,
          message: "必须输入密码",
          trigger: "blur"
        },
        {
          pattern: /^[a-z0-9]{6,15}$/i,
          message: "用户名必须是6~15个字符或者数字",
          tigger: "blur"
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
