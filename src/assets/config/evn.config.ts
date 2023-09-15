/**
 * 环境配置
 */

export const PROJECT_URL =
  window.location.protocol + '//' + window.location.host //项目路径
export const OUTER = 'outer' //外网
export const LOCAL = 'local' //本机
export const TEXT = 'text' //测试
// export const CUR_EVN = (<any>window).AppConfig.env || OUTER //当前环境
// export const CUR_EVN = TEXT; //当前环境
export const CUR_EVN = TEXT //当前环境
