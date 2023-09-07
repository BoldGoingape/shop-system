<template>
  <div>
    <h1>孙子组件{{ car }}</h1>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
const car = inject("key");
console.log(inject("key"));
</script>

<style scoped></style>
