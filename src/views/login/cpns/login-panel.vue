<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="currentTab" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon>
              <user />
            </el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="loginAccountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon>
              <cellphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="loginPhoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary" @click="handleForgetClick">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="handleLoginClick">
      立即登录
    </el-button>
    <!-- <page-modal
      ref="pageModalRef"
      :pageName="pageName"
      :dialogTitle="dialogTitle"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
    ></page-modal> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { ElMessage } from "element-plus"
import LoginAccount from "./login-account.vue"
import LoginPhone from "./login-phone.vue"
// import { modalConfig } from "../config/modal-config"
// import { usePageModal } from "@/hooks/use-page-modal"

export default defineComponent({
  name: "LoginPanel",
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>()
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref("account")

    const handleLoginClick = () => {
      if (currentTab.value === "account") {
        loginAccountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log(loginPhoneRef.value)
      }
    }

    // const pageName = "user"
    // const { pageModalRef, defaultInfo, dialogTitle, handleEditData } =
    //   usePageModal(pageName)

    const handleForgetClick = () => {
      ElMessage.warning("请联系管理员修改密码")
    }

    return {
      isKeepPassword,
      loginAccountRef,
      loginPhoneRef,
      currentTab,
      handleLoginClick,
      handleForgetClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 120px;
  width: 350px;

  .title {
    text-align: center;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .login-btn {
    width: 100%;
  }
}
</style>
