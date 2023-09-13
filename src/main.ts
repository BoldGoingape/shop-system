import './assets/scss/index.scss'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import pinia from './stores'
import ElementPlus from 'element-plus'
// svg插件配置代码
import 'virtual:svg-icons-register'
import 'element-plus/dist/index.css'
// 或略ts检查
import App from './App.vue'
// import router from './router'
import { router } from '@/router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.use(createPinia())
app.use(pinia)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)

app.mount('#app')
