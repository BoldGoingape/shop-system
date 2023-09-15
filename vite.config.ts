import { fileURLToPath, URL } from 'node:url'
// 引入svg需要的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
// https://vitejs.dev/config/

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import"./src/assets/scss/variable.scss";',
        },
      },
    },
    //代理跨域
    server: {
      proxy: {
        '/api': {
          target: 'http://139.198.104.58:8212',
          changeOrigin: true, //代理跨域
          pathRewrite: {
            '^/api': '', //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
          },
        },
      },
      host: '0.0.0.0',
    },
  }
})
