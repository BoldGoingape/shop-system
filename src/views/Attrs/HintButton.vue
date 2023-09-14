<template>
  <div>
    <!-- <el-button :type="$attrs.type"></el-button> -->
    <el-button :="$attrs"></el-button>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
// 接收父组件传递过来的数据
// defineProps(["type", "size", "icon"]);
const $attrs = useAttrs()
console.log($attrs)
</script>

<style lang="scss" scoped></style>
