<template>
  <div>
    <h1>useAttrs</h1>
    <el-button type="primary" size="small" :icon="Edit"></el-button>
    <!-- 自定义组件 -->
    <HintButton
      type="primary"
      size="small"
      :icon="Edit"
      title="啦啦啦"></HintButton>
  </div>
</template>

<script setup lang="ts">
import HintButton from '@/views/Attrs/HintButton.vue'
import { Edit } from '@element-plus/icons-vue'
</script>

<style scoped></style>
