<template>
  <div>
    <h1>SVG图标</h1>
    <svg style="width: 15px">
      <use :xlink:href="'#icon-' + name" fill="red "></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  //   prefix: {
  //     type: String,
  //     default: '#icon-',
  //   },
  name: String,
})
</script>

<style scoped></style>
