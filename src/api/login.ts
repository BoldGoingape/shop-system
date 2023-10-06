/**
 * 登录接口
 */
import serverConfig from '@/assets/config/server.config'
import { request, handleError } from './request'

//基本url
const BASE_URL = serverConfig.url.baseUrl

//登录url
const LOGIN = BASE_URL + '/api/admin/acl/index/login'

/**
 * 登录
 * @param {String} account 账号
 * @param {String} password 密码
 * @returns {Object} res 返回结果
 */ //account: string, password: string
export const doLogin = async (data: any) => {
  try {
    console.log(LOGIN)
    const params = new URLSearchParams()
    // params.append('username', data.username)
    // params.append('password', data.password)
    const res = await request.post(LOGIN, {
      username: data.username,
      password: data.password,
    })
    return res.data
    console.log(data, 123)
  } catch (err) {
    handleError(err)
  }
}
