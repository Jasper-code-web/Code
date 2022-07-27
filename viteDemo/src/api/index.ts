import axios from "axios";
import { getToken } from '@/utils/token'
import { message } from 'ant-design-vue';
const service = axios.create({
    baseURL: '/',
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        const token = getToken()
        if (token) {
            // For reference: https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication
            config && config.headers && (config.headers['Authorization'] = `Bearer ${token}`)
        }
        return config
    },
    error => {
        console.log(error)
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        console.log(response.data)
        const res = response.data
        if (res.code === 401) {
            message.error('登录失败，请重新登录')
            return Promise.reject(new Error(res.data || 'Error'))
        }
        if (res.code !== 20000) {
            console.log(res)
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default service