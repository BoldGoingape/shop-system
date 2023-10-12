// 用户信息厂库
import { defineStore } from 'pinia'
import type { loginForm } from '@/api/user/type'
// 引入路由 常量路由
import { constantRoute } from '@/router/routes'
import { doLogin } from '@/api/login'
import { requserInfo } from '@/api/user'
// 创建
const useUserStore = defineStore('User', {
  // 小仓库存数据
  state: (): any => {
    return {
      token: localStorage.getItem('TOKEN'),
      userName: '',
      menuRoutes: constantRoute,
    }
  },
  //   异步|逻辑地方
  actions: {
    //用户登录
    async userLogin(data: loginForm) {
      // 断言写法 （value as string）
      const val :any = await doLogin(data)
      if (val.code == 200) {
        this.token=val.data
        localStorage.setItem('TOKEN',val.data)
        return true
      } else {
        return false
      }
    },
    // 获取用户信息
    async userInfo(){
      let result:any =await requserInfo();
      console.log(result,1111);
      if (result.code==200) {
        this.userName=result.data.checkUser.username;
        this.avatar=result.data.checkUser.avatar;
        return 'ok'
      }else{
        return Promise.reject("获取用户信息失败");
      }
    },
    // 退出登录
    userLogout() {
      this.token = ''
      this.username = ''
      localStorage.removeItem('TOKEN')
    },
  },
  //
  getters: {},
})
export default useUserStore
