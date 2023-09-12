<template>
  <div>
    <div class="layout_container">
      <!-- 左侧菜单 -->
      <div class="layout_slider">
        <Logo></Logo>
        <!-- 展示菜单 -->
        <!-- 滚动组件 -->
        <el-scrollbar class="scrollbar">
          <el-menu background-color="#001529" text-color="white">
            <!-- 菜单组件 -->
            <Menu :menuList="userStore.menuRoutes"></Menu>
          </el-menu>
        </el-scrollbar>
      </div>
      <!-- 顶部导航 -->
      <div class="layout_tabbar"></div>
      <!-- 内容展示 -->
      <div class="layout_main">
        <p style="height: 10000px">内容展示</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from './logo/logo.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/stores/modules/user'
const userStore = useUserStore()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-backgroun;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: cyan;
    top: 0px;
    left: $base-menu-width;
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
  }
}
</style>
