import { router } from './router/index'
// 路由鉴权
// 全局前置守卫
router.beforeEach((to: any, from: any, next: any) => {
  console.log(to, from, next)
})
// 后置全局守卫
router.afterEach((to: any, from: any) => {})
