const rules = {
  name: [
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
  ],
  password: [
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

export default rules
