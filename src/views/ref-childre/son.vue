<template>
  <div>
    <h1>子组件 {{ number }}</h1>
    <Sun></Sun>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Sun from "@/views/ref-childre/sun.vue";
const number = ref(20);
const fly = () => {
  console.log("我会飞");
};
defineExpose({
  number,
  fly,
});
</script>

<style lang="scss" scoped></style>
