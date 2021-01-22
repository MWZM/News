import axios from 'axios'
import store from '../store'

// 设置跟路径
const requset = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
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
