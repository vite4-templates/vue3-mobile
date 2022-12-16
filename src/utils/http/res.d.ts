// src/utils/http/types.ts

// 和后端约定好接口返回的数据结构
interface Response<T> {
  code: number | string
  message: string
  result: T
}
