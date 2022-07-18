import axios from 'axios'
export function getRouters (params) {
  return axios({
    baseURL: 'http://localhost:8888/ruleMock/router',
    timeout: 2 * 1000,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method:'get',
    params
  })
}