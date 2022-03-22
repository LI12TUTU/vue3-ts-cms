import RyRequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const ryRequest = new RyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
  // interceptors: {
  //   requestInterceptor: (config) => {
  //     const token = ""
  //     if (token) {
  //       config.headers!.Authorization = `Bearer ${token}`
  //     }
  //     console.log("单个实例的请求拦截")
  //     return config
  //   },
  //   requestInterceptorCatch: (err) => {
  //     return err
  //   },
  //   responseInterceptor: (res) => {
  //     console.log("单个实例的响应拦截")
  //     return res
  //   },
  //   responseInterceptorCatch: (err) => {
  //     return err
  //   }
  // }
})

export default ryRequest
