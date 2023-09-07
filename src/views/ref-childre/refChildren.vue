<template>
  <div>
    <h1>父组件:{{ money }}</h1>
    <el-button @click="handler">子组件-10</el-button>
    <el-button @click="handler2">子组件-方法</el-button>
    <h1>Peovide与Inject</h1>
    <Son ref="son"></Son>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import Son from "@/views/ref-childre/son.vue";
const money = ref(100000);
const son = ref();
console.log(son);
const car = ref("拖拉机");
const handler = () => {
  son.value.number -= 10;
};
const handler2 = () => {
  son.value.fly();
};
provide("key", car);
</script>

<style scoped></style>
