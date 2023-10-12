import { router } from './router/index'
import nprogress from 'nprogress'
import "nprogress/nprogress.css"
import pinia  from './stores'
import useUserStore from './stores/modules/user'
import setting from './setting'
const userStore= useUserStore(pinia)
nprogress.configure({ showSpinner: false });
// 路由鉴权
// 全局前置守卫
router.beforeEach(async(to: any, from: any, next: any) => {
  document.title=`${setting.title}-${to.meta.title}`
  nprogress.start()
  const token = userStore.token;
  const username=userStore.userName
  if (token) {
    if (to.path=='/login') {
      //登录成功不访问login
      next({path:'/'})
    }else{
     //有用户信息
      if(username){
        next()//有用户信息
      }else{
      // 发请求 获取用户信息
      try {
        await userStore.userInfo();
        next()
      } catch (error) {
        new Error('error')
      }
      }
    }
  }else{
    //未登录
    if (to.path=='/login') {
      next()
    }else{
      next({path:'/login',query:{redirect:to.path}})
    }
  }
})
// 后置全局守卫
router.afterEach((to: any, from: any) => {
  nprogress.done()
})
