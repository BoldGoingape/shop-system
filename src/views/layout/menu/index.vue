<template>
  <!-- <p>{{ menuList }}</p> -->

  <template v-for="(item, index) in nenuValue.menuList" :key="item.path">
    <!-- 没有子路由，直接展示 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute">
        <template #title>
          <el-icon>
           <component :is='item.meta.icon'></component>
          </el-icon>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由，单只有一个 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item
        :index="item.children[0].path"
        v-if="!item.children[0].meta.hidden" @click="goRoute" >
        <template #title>
          <el-icon>
           <component :is='item.meta.icon'></component>
          </el-icon>
          {{ item.children[0].meta.title }}</template>
      </el-menu-item>
    </template>
    <!-- 个数大于一个 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1" >
      <template #title>
        <el-icon>
           <component :is='item.meta.icon'></component>
          </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import Menu from './index.vue'
import { useRouter } from 'vue-router';
// 接收父组件传过的数据
const $router=useRouter()
const nenuValue = defineProps(['menuList'])
// console.log(nenuValue.menuList, 123)
const goRoute = (vc: any) => {
  console.log(vc.index);
  
  $router.push(vc.index)
}
</script>
<script lang="ts">
export default {
  name: 'Menu-',
}
</script>
<style scoped></style>
