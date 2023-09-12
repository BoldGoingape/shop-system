// 用户信息厂库
import { defineStore } from 'pinia'
import type { loginForm } from '@/api/user/type'
// 引入路由 常量路由
import { constantRoute } from '@/router/routes'
// 创建
const useUserStore = defineStore('User', {
  // 小仓库存数据
  state: (): any => {
    return {
      token: localStorage.getItem('TOKEN'),
      menuRoutes: constantRoute,
    }
  },
  //   异步|逻辑地方
  actions: {
    userLogin(val: loginForm) {
      // 断言写法 （value as string）
      if (val.username == 'admin' && val.password == 'admin') {
        this.token =
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoie1wiYXV0aG9yaXRoeVwiOlwiLTFcIixcImZ1bGxOYW1lXCI6XCJcIixcImlkQ2FyZFwiOlwiSWpaT1lNNi84SThnUHhsOC9GQWJsdz09XCIsXCJtb2RlbFwiOlwiMlwiLFwibmFtZVwiOlwiYWRtaW5cIixcInBhc3N3b3JkXCI6XCJhZG1pblwifSIsImlhdCI6MTY5Mzc0Njk2OH0.W-AWvzrO5CvgoVBG_8cjf4lVVae7EUjywSBoUEku0Kw'
        localStorage.setItem('TOKEN', this.token)
        return true
      } else {
        return false
      }
    },
  },
  //
  getters: {},
})
export default useUserStore