<template>
  <div>
    <div class="layout_container">
      <!-- 左侧菜单 -->
      <div
        class="layout_slider"
        :class="{ fold: LayOutSettingStore.fold ? true : false }">
        <Logo></Logo>
        <!-- 展示菜单 -->
        <!-- 滚动组件 -->
        <el-scrollbar class="scrollbar">
          <el-menu
            background-color="#001529"
            text-color="white"
            :default-active="$route.path"
            :collapse="LayOutSettingStore.fold ? true : false"
            active-text-color="blue">
            <!-- 菜单组件 -->
            <Menu :menuList="userStore.menuRoutes"></Menu>
          </el-menu>
        </el-scrollbar>
      </div>
      <!-- 顶部导航 -->
      <div
        class="layout_tabbar"
        :class="{ fold: LayOutSettingStore.fold ? true : false }">
        <Tabbar></Tabbar>
      </div>
      <!-- 内容展示 -->
      <div
        class="layout_main"
        :class="{ fold: LayOutSettingStore.fold ? true : false }">
        <Main></Main>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Logo from './logo/logo.vue'
import Menu from './menu/index.vue'
import useUserStore from '@/stores/modules/user'
import Main from '@/views/layout/main/index.vue'
import Tabbar from '@/views/layout/tabbar/index.vue'
import useLayOutSettingStore from '@/stores/modules/setting'
const LayOutSettingStore = useLayOutSettingStore()

const userStore = useUserStore()
import { useRoute } from 'vue-router'
const $route = useRoute()
console.log($route.path)
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;

  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    color: white;
    background-color: $base-menu-backgroun;
    transition: all 0.5s;
    .scrollbar {
      width: 100%;

      height: calc(100vh - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout_tabbar {
    transition: all 0.5s;
    position: fixed;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    top: 0px;
    left: $base-menu-width;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }

  .layout_main {
    position: absolute;
    transition: all 0.5s;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    left: $base-menu-width;
    top: $base-tabbar-height;
    padding: 20px;
    overflow: auto;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
