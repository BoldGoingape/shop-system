/// <reference types="vite/client" />
declare module 'vite-plugin-svg-icons'
declare module '*.vue0' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

declare module 'nprogress'