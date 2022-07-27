import { ref, watchEffect } from "vue";

function userStorage(name: string, value = []) {
    const data = ref(JSON.parse(localStorage.getItem(name) || '[]'));
    if(value) data.value = value
    watchEffect(() => {
        localStorage.setItem(name, JSON.stringify(data.value))
    })
    return data
}

export default userStorage