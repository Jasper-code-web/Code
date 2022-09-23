import { isObject } from "@vue/shared";

export function  reactive(target) {
    if(!isObject(target)) return
    
    const proxy = new Proxy(target, {
        get(target, key, receiver) {
            console.log('key',key)
            return Reflect.get(target, key, receiver)
        },
        set(target, key, value, receiver) {
            target[key] = value
            return true
        }
    })
    return proxy
}