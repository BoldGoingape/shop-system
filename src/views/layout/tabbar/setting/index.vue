<template>
  <el-button
    type=""
    size="default"
    icon="Refresh"
    circle
    @click="updateRefsh"></el-button>
  <el-button
    type=""
    size="default"
    icon="FullScreen"
    circle
    @click="fullScreen"></el-button>
  <el-button type="" size="default" icon="Setting" circle></el-button>
  <img
    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    style="width: 25px; height: 25px; margin: 0px 10px" />
  <el-dropdown>
    <span class="el-dropdown-link">
      Admin
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
        <el-dropdown-item>修改密码</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import useUserStore from '@/stores/modules/user'
import useLayOutSettingStore from '@/stores/modules/setting'
const LayOutSettingStore = useLayOutSettingStore()
const userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()
// 刷新按钮刷新
const updateRefsh = () => {
  LayOutSettingStore.refsh = !LayOutSettingStore.refsh
}
// 全屏按钮点击回调
const fullScreen = () => {
  const full = document.fullscreenElement // 判断当前是否为全屏 ， 全屏 true ，反之null
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    // 使用方法实现全屏
    document.exitFullscreen()
  }
}
const logout = () => {
  //清空数据
  userStore.userLogout()
  // 跳转路由
  $router.push({ path: '/login', query: { redirect: $route.path } })
}
</script>

<style scoped></style>
