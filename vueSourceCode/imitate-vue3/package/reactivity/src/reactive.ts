import { isObject } from "@vue/shared";

export function reactive(target) {
    if(!isObject(target)) return
    
    // let target = {
    //     name: 'jasper',
    //     get alias() {
    //         console.log('this',this)
    //         return this.name   
    //     }
    // }
    const proxy = new Proxy(target, {
        get(target, key, receiver) {
            console.log(key)
            return Reflect.get(target, key, receiver)
        },
        set(target, key, value, receiver) {
            return Reflect.set(target, key, value, receiver)
        }
    })
    return proxy
}