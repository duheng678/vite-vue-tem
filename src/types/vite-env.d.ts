/// <reference types="vite/client" />
// declare module '*.vue' {
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent<{}, {}, any>
//   export default component
// }
declare global {
  // 声明 import.meta 对象，并指定其 url 属性类型为 string
  namespace NodeJS {
    interface ProcessEnv {
      // 扩展环境变量类型
      NODE_ENV: 'development' | 'production' | 'test'
      BASE_URL: string
      // 其他环境变量
    }
  }

  // 扩展 import.meta
  interface ImportMeta {
    url: string
  }
}
