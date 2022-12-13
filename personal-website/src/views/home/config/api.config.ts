import request from "@/config/request"

export function login(): any {
    return request.post('/login')
}

