<template>
  <div class="login_container">
    <el-row>
      <el-col :xs="0" :span="12"></el-col>
      <el-col :xs="24" :span="12">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="formRef">
          <h2>Hello</h2>
          <h1>欢迎登录</h1>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import useUserStore from '@/stores/modules/user'
const formRef = ref()
const $router = useRouter()
const UseStore = useUserStore()
const loginForm = reactive({
  username: '',
  password: '',
})
// 自定义校验
const validatoruserName = (rule: any, value: any, callback: any) => {
  if (/^\d{1,5}$/.test(value)) {
    callback()
  } else {
    callback(new Error('账号长度至少为五位'))
  }
}
const rules = ref({
  // username: [{ trigger: 'blur', validator: validatoruserName }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, message: '密码至少为三位', trigger: 'blur' },
  ],
})

const login = async () => {
  const result = UseStore.userLogin(loginForm)
  const result1 = await formRef.value.validate()
  console.log(result1)

  getHours()
  if (result) {
    ElNotification({
      type: 'success',
      message: '登录成功',
      title: `Hi,${getHours()}`,
    })
    // 编程式导航 跳转路由
    $router.push('/')
  } else {
    ElNotification({
      type: 'error',
      message: '登录失败',
    })
  }
}
const getHours = () => {
  let message = ''
  const hours = new Date().getHours()
  if (hours <= 9) {
    message = '早上好'
  } else if (hours <= 12) {
    message = '上午好'
  } else if (hours <= 18) {
    message = '下午好'
  } else {
    message = '晚上好'
  }
  return message
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
    top: 25vh;
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
