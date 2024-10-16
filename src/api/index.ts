import { LOGIN_TOKEN } from '@/global'
import { localCache } from '@/utils'
import HYRequest from '../utils/request'

const baseURL = import.meta.env.VITE_APP_BASE_URL

const hyRequest = new HYRequest({
  baseURL,
  timeout: 10000,
  interceptors: {
    requestSuccessFn: (config) => {
      // 每一个请求都自动携带token
      const token = localCache.getCache(LOGIN_TOKEN)
      if (config.headers && token) {
        // 类型缩小
        config.headers.Authorization = 'Bearer ' + token
      }
      return config
    }
  }
})

export default hyRequest
