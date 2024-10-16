import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path, { resolve } from 'path'
import ViteRestart from 'vite-plugin-restart'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconResolver from 'unplugin-icons/resolver'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Icons from 'unplugin-icons/vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    ViteRestart({
      restart: ['my.config.[jt]s', 'my.config.json']
    }),
    //自动导入components下的自定义组件
    Components({
      // dirs 指定组件所在位置，默认为 src/components
      // 可以让我们使用自己定义组件的时候免去 import 的麻烦
      dirs: ['src/components/', 'src/layout'],
      // 配置需要将哪些后缀类型的文件进行自动按需引入，'vue'为默认值
      extensions: ['vue', 'ts'],
      // 解析组件，这里以 Element Plus 为例
      resolvers: [ElementPlusResolver()],
      // 遍历子目录
      deep: true,
      dts: path.resolve(pathSrc, 'types', 'components.d.ts') // 指定自动导入组件TS类型声明文件路径
    }),
    //自动导入组件
    AutoImport({
      imports: ['vue', 'vuex', 'vue-router'],
      dts: path.resolve(pathSrc, 'types', 'auto-imports.d.ts'), // 指定自动导入函数TS类型声明文件路径
      eslintrc: {
        // 一开始的时候设置为true 后面关闭就好 有更新再打开
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      resolvers: [ElementPlusResolver()]
    }),
    //自动导入图标
    Icons({ scale: 1, defaultClass: 'inline-block', autoInstall: true }),
    //vueJsx
    vueJsx({})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8818, //端口 自定义
    host: '0.0.0.0',
    cors: true, // 默认启用并允许任何源
    //代理
    proxy: {
      '/api': {
        target: 'tem/',
        ws: true, // 是否启用 WebSocket
        changeOrigin: true // 是否修改请求头中的 Origin 字段
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
