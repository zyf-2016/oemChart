import axios from 'axios'

// 创建 axios 实例
let http = axios.create({
  // headers: {'Content-Type': 'application/json'},
  timeout: 80000
})

// 设置默认 Content-Type
http.defaults.headers.post['Content-Type'] = 'application/json'

// 添加响应拦截器
http.interceptors.response.use(response => {
  let { data } = response
  return data
}, error => {
  return Promise.reject(error)
})

export default function() {
  return http
}