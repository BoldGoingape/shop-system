<template>
  <div>
    <div class="box">
      我是父组件我有 {{ money }}
      <div class="container">
        <!-- <Child
          :name="childName"
          :age="age"
          :addAge="addAge"
          @xxx="change"
          :money="money"
          @update:ModelValue="handler1"
        ></Child> -->
        <!-- <Child :money="money" @update:ModelValue="handler1"></Child> -->
        <Child v-model="money"></Child>
        <EventBus></EventBus>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Child from '@/views/child.vue'
import EventBus from '@/views/eventBus.vue'
const childName = ref('张三')
const age = ref(25)
const money = ref(1000)
const addAge = () => {
  console.log('啦啦啦')
  age.value + 5
}
const change = (...value: any) => {
  console.log('change', ...value)
}
// 自定义事件回调
const handler1 = (val: any) => {
  console.log(val)
  money.value = val
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 500px;
  background-color: aqua;
}
.container {
  display: flex;
  justify-content: space-between;
}
</style>
