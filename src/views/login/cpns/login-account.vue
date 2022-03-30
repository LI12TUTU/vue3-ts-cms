<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name" class="form-item">
        <el-input v-model="account.name" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="form-item">
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
import { ElForm } from "element-plus"
import { useStore } from "vuex"
import rules from "../config/account-config"
import { localCache } from "@/utils/cache"
import { NAME_KEY, PASSWORD_KEY } from "@/constants/storage-key"

export default defineComponent({
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
