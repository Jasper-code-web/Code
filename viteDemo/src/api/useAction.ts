import request from './index'
import userStorage from '@/utils/userStorage'

export const login = (reqData: object) => request.post('/api/login', reqData).then(res => {
    userStorage('token', res.data)
    return res
}).catch(err => console.log(err))