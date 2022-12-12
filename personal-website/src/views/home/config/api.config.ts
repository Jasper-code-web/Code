import { getCurrentInstance } from "vue";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $login: any
    }
}


// console.log('getCurrentInstance', getCurrentInstance.proxy)
const { proxy }: any = getCurrentInstance();

export function login() {
    return proxy.$request('/login')
}

