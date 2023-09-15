# vue3-learn

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

```js
git remote add origin git@github.com:BoldGoingape/shop-system.git
git branch -M main
git push -u origin main
```

```vue
<template>
  <!-- <p>{{ menuList }}</p> -->

  <template v-for="(item, index) in nenuValue.menuList" :key="item.path">
    <template v-if="!item.children">
      <!-- 没有子路由，直接展示 -->
      <el-menu-item v-if="!item.meta.hidden" :index="item.path">
        <template #title>
          <span>标</span>
          {{ item.meta.title }}
        </template>
      </el-menu-item>
    </template>
  </template>

  <template v-if="item.children && item.children.length == 1">
    <!-- 有子路由，单只有一个 -->
    <el-menu-item
      v-if="!item.children[0].meta.hidden"
      :index="item.children[0].meta.title">
      <template #title>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
  </template>

  <template>
    <!-- 个数大于一个 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1">
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import Menu from './index.vue'

// 接收父组件传过的数据
const nenuValue = defineProps(['menuList'])
console.log(nenuValue.menuList, 123)
</script>
<script lang="ts">
export default {
  name: 'Menu-',
}
</script>
<style scoped></style>
```

```vue
<template>
  <div>
    <!-- <h1>useAttrs</h1>
    <el-button type="primary" size="small" :icon="Edit"></el-button>

    <HintButton
      type="primary"
      size="small"
      :icon="Edit"
      title="啦啦啦"></HintButton> -->

    <!-- for循环创建 form表单 -->
    <div style="width: 250px">
      <el-from
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        status-icon>
        <el-form-item label="Activity name" prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>

        <!-- <div v-for="(item, index) in valueArr" :key="index">
          <el-form-item
            :label="item.label + index"
            :prop="'valueArr.' + index + '.value'">
            <el-input v-model="item.value" clearable></el-input>
          </el-form-item>
        </div> -->
      </el-from>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import HintButton from '@/views/Attrs/HintButton.vue'
import { Edit } from '@element-plus/icons-vue'
const ruleFormRef = ref()
const ruleForm = ref({
  name: '',
})
const rules = ref({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
})
</script>

<style scoped></style>
```

```txt
服务器：http://sph-api.atguigu.cn
http://39.98.123.211:8510/swagger-ui.html
http://139.198.104.58:8212/swagger-ui.html
```
