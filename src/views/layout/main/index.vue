<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" v-if="flag" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import useLayOutSettingStore from '@/stores/modules/setting'
const LayOutSettingStore = useLayOutSettingStore()
const flag = ref(true)

watch(
  () => LayOutSettingStore.refsh,
  () => {
    flag.value = false
    setTimeout(() => {
      flag.value = true
    }, 50)
    // nextTick(() => {
    //   flag.value = true
    // })
  },
)
</script>

<style scoped lang="scss">
// .fade-enter{
//     opacity:0;
//     transform:scale(0)
// }
// .fade-enter-active{
//     transition:all 3s
// }
// .fade-enter-to{
// opacity:1;
// transform:scale(1)
// }
</style>
