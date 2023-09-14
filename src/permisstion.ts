import { router } from './router/index'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
// 路由鉴权
// 全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  nprogress.start()
  next()
})
// 后置全局守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})
