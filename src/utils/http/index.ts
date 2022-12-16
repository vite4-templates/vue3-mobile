// src/utils/http/index.ts

import service, { AxiosRequestConfig } from './axios'

export const request = <T>(config: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve) => {
    service
      .request(config)
      .then((res) => {
        // 一些业务处理
        resolve(res.data)
      })
      .catch((err) => {
        console.log('request fail:', err)
      })
  })
}

const http = {
  get<T>(url: string, params = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({ url, params, ...config, method: 'GET' })
  },
  post<T>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({ url, data, ...config, method: 'POST' })
  },
  put<T>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({ url, data, ...config, method: 'PUT' })
  },
  delete<T>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({ url, data, ...config, method: 'DELETE' })
  },
  // 上传文件，指定 'Content-Type': 'multipart/form-data'
  upload<T>(url: string, data = {}, config?: AxiosRequestConfig): Promise<T> {
    return request({
      url,
      data,
      ...config,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
    })
  },
}

export default http
