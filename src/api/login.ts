/**
 * 登录接口
 */
import serverConfig from '@/assets/config/server.config'
import { request, handleError } from './request'

//基本url
const BASE_URL = serverConfig.url.baseUrl

//登录url
const LOGIN = BASE_URL + '/api/admin/acl/index/login'
enum API{
  LOFIN_URL="/admin/acl/index/login",
  USERINFO_URL="/api/admin/acl/index/info",
  LOGOUT_URL="/api/admin/acl/index/logout"
}
/**
 * 登录
 * @param {String} account 账号
 * @param {String} password 密码
 * @returns {Object} res 返回结果
 */ //account: string, password: string
export const doLogin = async (data: any) => {
  try {
    const params = new URLSearchParams()
    const res = await request.post(LOGIN, {
      username: data.username,
      password: data.password,
    })
    return res
  } catch (err) {
    handleError(err)
  }
}
//获取用户信息
export const requserInfo=async()=>{
  try {
    const res=await request.get(BASE_URL+API.USERINFO_URL)
    console.log(res);
    return res
    
  } catch (error) {
    handleError(error)
  }
}
//退出登录
export const logout =async()=>{
  try {
    const res = await request.post(BASE_URL+API.LOGOUT_URL)
    return res
  } catch (error) {
    handleError(error)
  }
}