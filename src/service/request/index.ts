import axios from "axios"
import type { AxiosInstance } from "axios"
import type { RyRequestInterceptors, RyRequestConfig } from "./type"

import { ElLoading } from "element-plus"
import { LoadingInstance } from "element-plus/es/components/loading/src/loading"
import "element-plus/theme-chalk/el-loading.css"

import { localCache } from "@/utils/cache"
import { TOKEN_KEY } from "@/constants/storage-key-const"

const DEFAULT_LOADING = true

class RyRequest {
  instance: AxiosInstance
  interceptors?: RyRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: RyRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    this.interceptor()
  }

  interceptor(): void {
    // 单个实例的请求和响应拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 所有实例的请求和响应拦截
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "request",
            background: "rgba(0, 0, 0, 0.5)"
          })
        }

        const token = localCache.getItem(TOKEN_KEY)
        if (token) {
          config.headers!.Authorization = `Bearer ${token}`
        }

        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data.data

        this.loading?.close()

        if (data.returnCode === "-1001") {
          console.log("请求失败")
        } else {
          return data
        }
      },
      (err) => {
        this.loading?.close()

        if (err.response.status === "404") {
          console.log("404")
        }
        return err
      }
    )
  }

  request<T>(config: RyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求的请求和响应拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // if (config.showLoading === false) {
      //   this.showLoading = config.showLoading
      // }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          // this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          // this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }

  get<T = any>(config: RyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T = any>(config: RyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T = any>(config: RyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T = any>(config: RyRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default RyRequest
