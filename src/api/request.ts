/**
 * 请求实例
 */
import axios from 'axios'
import { SUCCESS, TOKEN_EXPIRE } from '@/assets/constant/errors'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import useUserStore from '@/stores/modules/user'

//创建请求实例
export const request = axios.create()
//请求拦截器
request.interceptors.request.use(
  (config: any) => {
    // 在发送请求之前做些什么
    //设置token
    // if (!config.headers.token) {
    //   const userStore = useUserStore()

    //   if (userStore.token) {
    //     config.headers.token = userStore.token
    //   }
    // }
    return config
  },
  (err: any) => {
    // 对请求错误做些什么
    return Promise.reject(err)
  },
)

//响应拦截器
request.interceptors.response.use(
  (res: any) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (SUCCESS.includes(res.data.code)) {
      return res.data
    } else {
      if (res.data.code === TOKEN_EXPIRE) {
        clearToken()
      }
      return Promise.reject(res.data.message)
    }
  },
  (err: any) => {
    return Promise.reject(err)
  },
)

/**
 * 设置令牌
 * @param {String} token 令牌
 */
export const setToken = (token: string) => {
  request.defaults.headers.common['token'] = token
}

/**
 * 清除token
 */
export const clearToken = () => {
  const store = useUserStore()
  store.$reset()
  const router = useRouter()
  request.defaults.headers.common['token'] = ''
  router.replace('/login')
}

/**
 * 处理异常
 * @param {Error|String|Object} err 异常信息
 */
export const handleError = (err: any) => {
  let errMsg
  if (typeof err === 'string') {
    errMsg = err
  } else if (err instanceof Error) {
    errMsg = err.message
  } else {
    errMsg = JSON.stringify(err)
  }
  ElMessage.error(errMsg)
  throw new Error(errMsg)
}
