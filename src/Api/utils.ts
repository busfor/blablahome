import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import MockAdapter from 'axios-mock-adapter'

export const BASE_API_URL = 'https://blablahome.lazureykis.dev/api'

// const mock = new MockAdapter(axios)

// mock.onGet(`${BASE_API_URL}/activities`).reply(200, [
//   {
//     cover:
//       'https://storage.googleapis.com/blablahome/uploads/activities/covers/62bed2d2-1ce4-49c0-a068-031d69aa1117/0.jpeg?v=63753130513',
//     days: 7,
//     description: 'Testing',
//     id: '62bed2d2-1ce4-49c0-a068-031d69aa1117',
//     name: 'Test',
//     user: {
//       id: '0ac2009f-584b-4462-906a-4d1028d32e5f',
//       name: 'Pavel Lazureykis',
//     },
//     participants_count: 666,
//     completions_count: 999,
//     fails_count: 666,
//   },
// ])

// mock.onGet(/.*\/users\/.*\/participations/).reply(200, [
//   {
//     id: 'c59c229e-3a53-462c-b4e2-2d41c07f59b3',
//     progress: 4,
//     completed_at: null,
//     user: {
//       id: '0ac2009f-584b-4462-906a-4d1028d32e5f',
//       name: 'Pavel Lazureykis',
//     },
//     activity: {
//       cover:
//         'https://storage.googleapis.com/blablahome/uploads/activities/covers/62bed2d2-1ce4-49c0-a068-031d69aa1117/0.jpeg?v=63753130513',
//       days: 7,
//       description: 'Testing',
//       id: '62bed2d2-1ce4-49c0-a068-031d69aa1117',
//       name: 'Test',
//       user: {
//         id: '0ac2009f-584b-4462-906a-4d1028d32e5f',
//         name: 'Pavel Lazureykis',
//       },
//     },
//   },
//   {
//     id: 'c59c229e-3a53-462c-b4e2-2d41c07f59b4',
//     progress: 7,
//     completed_at: null,
//     user: {
//       id: '0ac2009f-584b-4462-906a-4d1028d32e5f',
//       name: 'Pavel Lazureykis',
//     },
//     activity: {
//       cover:
//         'https://storage.googleapis.com/blablahome/uploads/activities/covers/62bed2d2-1ce4-49c0-a068-031d69aa1117/0.jpeg?v=63753130513',
//       days: 7,
//       description: 'Testing',
//       id: '62bed2d2-1ce4-49c0-a068-031d69aa1117',
//       name: 'Test',
//       user: {
//         id: '0ac2009f-584b-4462-906a-4d1028d32e5f',
//         name: 'Pavel Lazureykis',
//       },
//     },
//   },
//   {
//     id: 'c59c229e-3a53-462c-b4e2-2d41c07f59b5',
//     progress: 0,
//     completed_at: 'DATE',
//     user: {
//       id: '0ac2009f-584b-4462-906a-4d1028d32e5f',
//       name: 'Pavel Lazureykis',
//     },
//     activity: {
//       cover:
//         'https://storage.googleapis.com/blablahome/uploads/activities/covers/62bed2d2-1ce4-49c0-a068-031d69aa1117/0.jpeg?v=63753130513',
//       days: 7,
//       description: 'Testing',
//       id: '62bed2d2-1ce4-49c0-a068-031d69aa1117',
//       name: 'Test',
//       user: {
//         id: '0ac2009f-584b-4462-906a-4d1028d32e5f',
//         name: 'Pavel Lazureykis',
//       },
//     },
//   },
// ])

// mock.onGet(`${BASE_API_URL}/activities/62bed2d2-1ce4-49c0-a068-031d69aa1117/participations`).reply(200, [
//   {
//     id: 'c59c229e-3a53-462c-b4e2-2d41c07f59b3',
//     progress: 3,
//     completed_at: null,
//     user: {
//       id: '0ac2009f-584b-4462-906a-4d1028d32e5f',
//       name: 'Pavel Lazureykis',
//     },
//     activity: {
//       cover:
//         'https://storage.googleapis.com/blablahome/uploads/activities/covers/62bed2d2-1ce4-49c0-a068-031d69aa1117/0.jpeg?v=63753130513',
//       days: 7,
//       description: 'Testing',
//       id: '62bed2d2-1ce4-49c0-a068-031d69aa1117',
//       name: 'Test',
//       user: {
//         id: '0ac2009f-584b-4462-906a-4d1028d32e5f',
//         name: 'Pavel Lazureykis',
//       },
//     },
//   },
// ])

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
