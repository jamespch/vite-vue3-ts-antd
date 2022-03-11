import axios from 'axios'
import qs from 'querystring'
import { message } from 'ant-design-vue';
interface ApiConfig {
  data: object,
  body: object
}

async function request(url: string, options: ApiConfig) {
  // 创建 axios 实例
  const service = axios.create({
    baseURL: "", // api base_url
    timeout: 6000 // 请求超时时间
  });

  // 请求拦截
  service.interceptors.request.use(
    (config) => {
      if (options && options.body) {
        // config.data = options.body
        let data = options.body
        config.data = qs.stringify(data)
      }
      return config;
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  // 返回拦截
  service.interceptors.response.use(
    (response) => {
      /**
       * 根据你的项目实际情况来对 response 和 error 做处理
       * 这里对 response 和 error 不做任何处理，直接返回
       */
      return response.data || response
    }, (error) => {
      if (error.response && error.response.data) {
        const code = error.response.status
        const msg = error.response.data.message
        message.error(`Code: ${code}, Message: ${msg}`)
        console.error(`[Axios Error]`, error.response)
      } else {
        message.error(`${error}`)
      }
      return Promise.reject(error)
    }
  )
  return service(url, options);
}

export default request;