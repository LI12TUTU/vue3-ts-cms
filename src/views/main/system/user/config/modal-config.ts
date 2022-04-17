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
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
      rules: [
        {
          required: true,
          message: "必须输入真实姓名",
          trigger: "blur"
        }
      ]
    },
    {
      field: "password",
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
      isHidden: false,
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
    },
    {
      field: "enable",
      type: "select",
      label: "状态",
      placeholder: "请选择用户状态",
      rules: [
        {
          required: true,
          message: "必须选择用户状态",
          trigger: "blur"
        }
      ],
      selectOptions: [
        {
          label: "启用",
          value: 1
        },
        {
          label: "禁用",
          value: 0
        }
      ]
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入手机号码",
      rules: [
        {
          required: true,
          message: "必须输入手机号码",
          trigger: "blur"
        },
        {
          pattern: /^[0-9]{11}$/,
          message: "请输入11位数字的手机号码",
          trigger: "blur"
        }
      ]
    },
    {
      field: "departmentId",
      type: "select",
      label: "部门",
      placeholder: "请选择部门",
      selectOptions: [],
      rules: [
        {
          required: true,
          message: "请选择部门",
          trigger: "blur"
        }
      ]
    },
    {
      field: "roleId",
      type: "select",
      label: "角色",
      placeholder: "请选择角色",
      selectOptions: [],
      rules: [
        {
          required: true,
          message: "请选择角色",
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
