import { defineStore } from "pinia";

export const otherStore = defineStore('other', {
    state: () => {
        return {
            music: '欲望'
        }
    },
    getters: {
        otherMusic: (state) => {
            return 'music' + state.music
        }
    }
})