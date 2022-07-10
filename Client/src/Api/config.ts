import axios, { AxiosInstance } from 'axios';


const BACKEND_URL = 'http://localhost:4000';

export const axiosInstance = (): AxiosInstance => {
  const authHeader = {};

  const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    headers: {
      ...authHeader,
      'Access-Control-Allow-Origin': '*'
    }
  })

  axiosInstance.interceptors.response.use(
    res => res, err => {
      if (!err.response) {
        return Promise.reject({
          message: "Server error",
          code: '500'
        })
      }

      switch (err.response.status) {
        case 500:
        case 502:
        case 503:
          return Promise.reject({
            message: "Server error",
            code: '500'
          })
        case 404:
          window.location.href = '/not-found'
          return Promise.reject(err);
        case 403: {
          return Promise.reject(err);
        }
        case 409:
          return Promise.reject(err);
        case 400:
          return Promise.reject(err);
        case 401: {
          window.location.href = '/login'
          return Promise.reject(err)
        }
        case undefined: {
          window.location.href = '/not-found'
          return Promise.reject({
            message: 'Server error',
            code: '500'
          })
        }
        default:
          return Promise.reject({
            message: 'Server error',
            code: '500'
          })
      }
    }
  )

  return axiosInstance;
}