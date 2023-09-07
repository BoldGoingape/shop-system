<template>
  <div class="login_container">
    <el-row>
      <el-col :xs="0" :span="12"></el-col>
      <el-col :xs="24" :span="12">
        <el-form class="login_form">
          <h2>Hello</h2>
          <h1>欢迎登录</h1>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
              type="password"
              show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login_tn" @click="login">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
const loginForm = reactive({
  username: '',
  password: '',
})
const login = () => {
  console.log(loginForm)
}
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    border-radius: 15px;
    background: url('@/assets/images/login-form.jpg') no-repeat;
    background-size: cover;
    position: relative;
    padding: 40px;
    width: 60%;
    top: 30vh;
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 20px;
      margin: 20px 0;
    }
    .login_tn {
      width: 100%;
    }
  }
}
</style>
