import { IForm } from "@/base-ui/form"

export const modalConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "部门名称",
      placeholder: "请输入部门名称",
      rules: [
        {
          required: true,
          message: "必须输入部门名称",
          trigger: "blur"
        }
      ]
    },
    {
      field: "leader",
      type: "input",
      label: "领导",
      placeholder: "请输入领导姓名",
      rules: [
        {
          required: true,
          message: "必须输入领导姓名",
          trigger: "blur"
        }
      ]
    },
    {
      field: "parentId",
      type: "select",
      label: "上级部门",
      placeholder: "请输入上级部门",
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
