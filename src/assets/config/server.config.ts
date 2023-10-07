/**
 * 服务基本配置
 */
import { ObjectUtil } from '@/util/ObjectUtil'
import { OUTER, LOCAL, TEXT, CUR_EVN, PROJECT_URL } from './evn.config'

//请求基本url
const BASE_URL_CONFIG: any = {
  // [OUTER]: "http://39.107.252.31:18889/",
  // [OUTER]: 'http://139.198.104.58:8212',
  [TEXT]: 'http://127.0.0.1:8080',
  // 开发环境 代理
  // [LOCAL]: PROJECT_URL + "/api/"
  [LOCAL]: 'http://127.0.0.1:18889/',
}

//图片请求基本url
const IMAGE_BASE_URL_CONFIG: any = {
  [OUTER]: 'http://139.198.104.58:8212',
  [LOCAL]: 'http://192.168.18.41:8080/download/',
}

//请求基本url
// const BASE_URL = BASE_URL_CONFIG[CUR_EVN];
// const BASE_URL = BASE_URL_CONFIG[OUTER]
const BASE_URL = BASE_URL_CONFIG[TEXT];
//图片请求基本url
const IMAGE_BASE_URL = IMAGE_BASE_URL_CONFIG[OUTER]
//浏览器下载路径
const CHROME_DOWNLOAD_URL = IMAGE_BASE_URL + 'chrome/chrome.exe'

//默认配置
const DEFAULT_CONFIG = {
  //url相关
  url: {
    //请求基本url
    baseUrl: BASE_URL,
    //图片请求基本url
    imageBaseUrl: IMAGE_BASE_URL,
    //浏览器下载路径
    browserDownloadUrl: CHROME_DOWNLOAD_URL,
  },
}

//服务配置
// export default ObjectUtil.deepObjectMerge(
//   DEFAULT_CONFIG,
//   (<any>window).AppConfig.server || {},
// )
export default DEFAULT_CONFIG
