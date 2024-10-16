import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
//引入样式
import 'normalize.css'
import '@/assets/css/index.less'
import 'element-plus/dist/index.css'
import 'virtual:uno.css'

import App from './App.vue'

const app = createApp(App)
app.use(router).use(store).mount('#app')
