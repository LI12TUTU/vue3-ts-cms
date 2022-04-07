<template>
  <div class="login-account">
    <el-form ref="formRef" label-width="60px" :rules="rules" :model="account">
      <el-form-item class="form-item" label="账号" prop="name">
        <el-input v-model="account.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="密码" prop="password">
        <el-input
          v-model="account.password"
          show-password
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "@/store"
import { ElForm } from "element-plus"
import { ElMessage } from "element-plus"

import rules from "../config/account-config"
import { localCache } from "@/utils/cache"
import { NAME_KEY, PASSWORD_KEY } from "@/constants/storage-key"

export default defineComponent({
  name: "LoginAccount",
  setup() {
    const account = reactive({
      name: localCache.getItem(NAME_KEY) ?? "",
      password: localCache.getItem(PASSWORD_KEY) ?? ""
    })

    const store = useStore()

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            localCache.setItem(NAME_KEY, account.name)
            localCache.setItem(PASSWORD_KEY, account.password)
          } else {
            localCache.removeItem(NAME_KEY)
            localCache.removeItem(PASSWORD_KEY)
          }

          store.dispatch("login/accountLoginAction", { ...account })
        } else {
          ElMessage.error("账号或密码错误")
        }
      })
    }

    return {
      account,
      rules,
      formRef,
      loginAction
    }
  }
})
</script>

<style scoped lang="less">
@import "../css/form-item.less";
</style>
