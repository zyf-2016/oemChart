import axios from './http'

let instance = axios()
export default {
  get (url, params, headers) {
    let options = {}
    if (params) {
      options.params = params
    }
    if (headers) {
      options.headers = headers
    }
    return instance.get(url, options)
  },
  post (url, params, headers) {
    let options = {}
    if (headers) {
      options.headers = headers
    }
    return instance.post(url, params, options)
  }
}