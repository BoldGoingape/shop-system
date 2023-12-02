//品牌管理模块
import {request,BASE_URL} from'@/api/request'

enum API{
//获取已有品牌接口
TRADEMARK_URL='/admin/product/baseTrademark/',
}
//分页获取品牌
export const reqHasTrademark=(page:number,limit:number)=>{
    request.get(BASE_URL+API.TRADEMARK_URL+`${page}/${limit}`)
}