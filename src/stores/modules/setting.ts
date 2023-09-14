// layout 相关配置仓库
import { defineStore } from 'pinia'
const useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //控制变量
      refsh: false,
    }
  },
})
export default useLayOutSettingStore
