<template>
    <div>
        <router-view v-slot="{ Component }">
            <transition name="fade">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">

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