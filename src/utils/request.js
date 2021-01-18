import axios from 'axios'

const requset = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/'
})

export default requset
