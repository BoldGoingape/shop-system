<template>
  <div>
    <div class="box">
      我是子组件 {{ name }}{{ age }}
      <h1>钱数是{{ modelValue }}</h1>
      <el-button @click="clickAdd">点击子组件+1</el-button>
    </div>
  </div>
</template>

<script setup>
import $bus from '@/bus/index.ts'
import { onMounted } from 'vue'
// const props = defineProps(["name", "age", "addAge", "modelValue"]);
// const $emit = defineEmits(["xxx", "update:ModelValue"]);

const props = defineProps(['modelValue'])
const $emit = defineEmits(['update:ModelValue'])

console.log($emit)
console.log($bus)
onMounted(() => {
  $bus.on('xxx', (val) => {
    console.log(val)
  })
})
$emit('xxx', '1', '2')
console.log(props)
const clickAdd = () => {
  $emit('update:ModelValue', props.modelValue + 1)
}
</script>

<style lang="scss" scoped>
.box {
  width: 250px;
  height: 250px;
  background-color: pink;
  color: black;
}
</style>
