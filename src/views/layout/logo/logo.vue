<template>
  <div class="logo" :v-if="setting.logoHidden">
    <img :src="setting.logo" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
// 引用标题配置文件
import setting from '@/setting'
</script>

<style scoped lang="scss">
.logo {
  width: 100%;
  padding: 10px;
  height: $base-menu-logo-height;
  background-color: red;
  color: #fff;
  display: flex;
  align-items: center;
  p {
    font-size: $base-logo-title-fontSize;
    margin-left: 5px;
    font-weight: 800;
  }
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
