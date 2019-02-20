import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { getAccessToken } from '@/utils/access_token'
import Qs from 'qs'
axios.defaults.withCredentials = true // axios支持跨域cookie
// 创建axios实例
const axiosInstance = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000 // 请求超时时间
})
// request拦截器
axiosInstance.interceptors.request.use(config => {
  // Do something before request is sent
  config.headers['Access-Token'] = getAccessToken()
  const token = getToken()
  if (token) {
    config.headers['Authorization'] = token
  }

  if (store.getters.token) {
    config.headers['Access-Token'] = getAccessToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
  }
  if (store.getters.auth_token && token) {
    config.headers['Authorization'] = token
  }
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
axiosInstance.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data
    if (res.code === 2000) {
      // Message({
      //   message: "res.msg",
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 4001) {
        // MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        //   confirmButtonText: '重新登录',
        //   cancelButtonText: '取消',
        //   type: 'warning'
        // }).then(() => {
        //   store.dispatch('FedLogOut').then(() => {
        //     location.reload()// 为了重新实例化vue-router对象 避免bug
        //   })
        // })
      }
      // return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    //请求失败后弹框提示
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default axiosInstance
export function /* eslint-disable */api_request (config, options) {
  const pars = { ...config }
  if (config.requestBody) {
    pars.data = options
    pars.method = 'post'
    return axiosInstance(pars)
  }
  switch (config.method) {
    case 'get':
      pars.params = options
      return axiosInstance(pars)
    case 'post':
      pars.data = options
      return axiosInstance.post(config.url, Qs.stringify(options))
  }
}
