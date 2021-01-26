import axios from 'axios'
import store from '../store'
import JSONbig from 'json-bigint'

// 设置跟路径
const requset = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/',
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    try {
      return JSONbig.parse(data)
    } catch (err) {
      return data
    }
  }]
})

// 设置请求拦截器

requset.interceptors.request.use(function (config) {
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export default requset
