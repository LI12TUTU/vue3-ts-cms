<template>
  <div class="login-phone">
    <el-form label-width="80px" :model="phone" :rules="rules">
      <el-form-item class="form-item" label="手机号" prop="num">
        <el-input v-model="phone.num" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item class="form-item" label="验证码" prop="code">
        <div class="code">
          <el-input v-model="phone.code" placeholder="请输入验证码"></el-input>
          <el-button class="code-btn" type="primary" @click="handleCodeClick">
            获取验证码
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue"
import { ElMessage } from "element-plus"
import rules from "../config/phone-config"

export default defineComponent({
  name: "LoginPhone",
  setup() {
    const phone = reactive({
      num: "",
      code: ""
    })

    const handleCodeClick = () => {
      ElMessage.info("手机登录功能暂未开发~")
    }

    return {
      phone,
      rules,
      handleCodeClick
    }
  }
})
</script>

<style scoped lang="less">
@import "../css/form-item.less";
.code {
  display: flex;

  .code-btn {
    margin-left: 8px;
  }
}
</style>
