import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface RyRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface RyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RyRequestInterceptors<T>
  showLoading?: boolean
}
