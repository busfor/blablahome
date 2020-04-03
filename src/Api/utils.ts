import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json'

const prepareData = (data: {}) => {
  const preparedData: { [x: string]: string | boolean } & { signature?: string } = {
    ...data,
  }
  return preparedData
}

export const postRequest = <T = {}>(
  endpoint: string,
  params = {},
  axiosConfig: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
  const data = prepareData(params)
  return new Promise((resolve, reject) =>
    axios
      .post<T>(endpoint, data, axiosConfig)
      .then(resolve)
      .catch((error) => {
        reject(error)
      })
  )
}

export const patchRequest = <T = {}>(
  endpoint: string,
  params = {},
  axiosConfig: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
  const data = prepareData(params)
  return new Promise((resolve, reject) =>
    axios
      .patch<T>(endpoint, data, axiosConfig)
      .then(resolve)
      .catch((error) => {
        reject(error)
      })
  )
}

export const getRequest = <T = {}>(
  endpoint: string,
  params = {},
  axiosConfig: AxiosRequestConfig = {}
): Promise<AxiosResponse<T>> => {
  const preparedParams = prepareData(params)
  return new Promise((resolve, reject) =>
    axios
      .get<T>(endpoint, { ...axiosConfig, params: preparedParams })
      .then(resolve)
      .catch((error: AxiosError) => {
        reject(error)
      })
  )
}

export const BASE_API_URL = 'https://blablahome.lazureykis.dev/api'
