import axios from "axios"
import type { AxiosInstance } from "axios"
import type { RyRequestInterceptors, RyRequestConfig } from "./type"

import { ElLoading, ElMessage } from "element-plus"
import { LoadingInstance } from "element-plus/es/components/loading/src/loading"
import "element-plus/theme-chalk/el-loading.css"

import { localCache } from "@/utils/cache"
import { TOKEN_KEY } from "@/constants/storage-key"

class RyRequest {
  instance: AxiosInstance
  interceptors?: RyRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: RyRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? true
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
        const data = res.data

        this.loading?.close()

        if (data.code !== 0) {
          return data
        } else {
          return data.data
        }
      },
      (err) => {
        this.loading?.close()

        if (err.message.includes("400")) {
          ElMessage.error("密码错误")
        } else {
          ElMessage.error("请求失败")
        }

        return err
      }
    )
  }

  request<T = any>(config: RyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求的请求和响应拦截
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      const DEFAULT_LOADING = this.showLoading
      this.showLoading = config.showLoading ?? DEFAULT_LOADING

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          if (this.showLoading !== DEFAULT_LOADING) {
            this.showLoading = DEFAULT_LOADING
          }
          resolve(res)
        })
        .catch((err) => {
          if (this.showLoading !== DEFAULT_LOADING) {
            this.showLoading = DEFAULT_LOADING
          }
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
