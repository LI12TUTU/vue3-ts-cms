import { IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "菜单名称",
      placeholder: "请输入菜单名称",
      rules: [
        {
          required: true,
          message: "必须输入菜单名称",
          trigger: "blur"
        }
      ]
    },
    {
      field: "type",
      type: "select",
      label: "菜单类型",
      placeholder: "请选择菜单类型",
      selectOptions: [
        {
          label: "一级菜单",
          value: 1
        },
        {
          label: "二级菜单",
          value: 2
        },
        {
          label: "按钮权限",
          value: 3
        }
      ],
      rules: [
        {
          required: true,
          message: "必须输入菜单类型",
          trigger: "blur"
        }
      ]
    },
    {
      field: "parentId",
      type: "select",
      label: "上级菜单",
      placeholder: "请选择上级菜单",
      selectOptions: []
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
