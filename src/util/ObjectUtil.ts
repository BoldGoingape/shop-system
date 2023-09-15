/**
 * 对象工具
 */

export const ObjectUtil = {
  /**
   * 是否为空对象
   * @param object 对象
   * @returns 是否为空
   */
  isEmpty(object: any) {
    if (object) {
      const keys = Object.keys(object);
      if (keys.length === 0) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  },
  /**
   * 深度合并
   * @param target 目标对象
   * @param source 源对象
   * @returns 合并后对象
   */
  deepObjectMerge(target: any, source: any) {
    if (source) {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] =
            target[key] && typeof target[key] === "object"
              ? this.deepObjectMerge(target[key], source[key])
              : (target[key] = source[key]);
        }
      }
    }
    return target;
  }
};
