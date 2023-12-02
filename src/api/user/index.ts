import { request } from "../request";
enum API{
    LOFIN_URL="/admin/acl/index/login",
    USERINFO_URL="/api/admin/acl/index/info",
    LOGOUT_URL="/admin/acl/index/logout"
}
//登录接口
export const reqLogin=(data:any)=>{
    // request.post(API.LOFIN_URL,data)
}
//获取用户信息接口
export const requserInfo=()=>{
    
    // request.get(API.USERINFO_URL)
}
//退出登录
export const reqLogOut=()=>{
    request.post(API.LOGOUT_URL)
}