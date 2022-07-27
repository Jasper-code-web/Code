import userStorage from "./userStorage";
export function getToken() {
    return userStorage('token').value
}