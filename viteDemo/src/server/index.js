// import axios from 'axios'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// const service = axios.create({
//     baseURL: process.env.VUE_APP_API,
//     timeout: 5000
// })

// service.interceptors.request.use((config) => {
//     if(store.getters.token) {
//         config.headers['X-Token'] = getToken()
//     }
//     return config
// }, (error) => {
//     console.log('error',error)
//     return Promise.reject(error)
// })

// service.interceptors.response.use(
//     response => {
//         const res = response.data
//         if(res.code !== 20000) {
//             return Promise.reject(new Error(res.message || 'Error'))
//         } else {
//             return res
//         }
//     },
//     error => {
//         return reject(error)
//     }
// )

// export default service