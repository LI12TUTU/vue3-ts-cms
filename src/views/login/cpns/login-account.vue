<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"

export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: ""
    })

    const rules = {
      name: [
        {
          required: true,
          message: "必须输入用户名",
          trigger: "blur"
        },
        {
          pattern: /^[a-z0-9]{5,10}$/,
          message: "用户名必须是5~10个字符或者数字",
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
          pattern: /^[a-z0-9]{6,15}$/,
          message: "用户名必须是6~15个字符或者数字",
          tigger: "blur"
        }
      ]
    }

    return {
      account,
      rules
    }
  }
})
</script>

<style scoped></style>
