/**
 * 通用工具
 */
//获取所有store文件
const storeFiles = import.meta.glob("@/stores/**/*.ts", { eager: true });
/**
 * 防抖
 * @param fn  回调函数
 * @param delayTime 延迟时间，默认500ms
 * @returns
 */
export const antiShake = (fn: Function, delayTime: number = 500) => {
  let timer: any = null;
  return function (this: any, ...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    const callNow: any = !timer;
    timer = setTimeout(() => {
      timer = null;
    }, delayTime);
    if (callNow) fn.apply(this, args);
  };
};
/**
 * 重置pinia中所有值
 * @param path 文件路径
 */
export const resetStore = () => {
  //遍历文件
  for (const key in storeFiles) {
    const file = storeFiles[key] as any;
    //遍历文件中属性和方法
    for (const k in file) {
      const fn = file[k];
      if (typeof fn === "function") {
        //判断类型为方法时执行
        const store = fn();
        if (store.$reset) {
          //如果存在$reset方法执行
          store.$reset();
        }
      }
    }
  }
};
