<template>
  <div>
    <div class="box">
      <h1>全局事件总线</h1>
      <el-button type="success" @click="handler">点击兄弟加1</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import $bus from "@/bus/index.ts";
const handler = () => {
  $bus.emit("xxx", { name: "张三" });
};
</script>

<style scoped>
.box {
  width: 250px;
  height: 250px;
  color: black;
  background-color: greenyellow;
}
</style>
