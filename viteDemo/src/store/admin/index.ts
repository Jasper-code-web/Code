import {defineStore} from 'pinia'
import {otherStore} from './other'

export const useStore = defineStore('admin', {
    state: () => {
        return {
            name: 'Jasper',
            count: 1,
            task: ['student', 'sleep'],
            users: [
                {
                    name: 'jasper',
                    id: 1
                },
                {
                    name: 'admin',
                    id: 2
                }
            ]
        }
    },
    getters: {
        // doubleCount: (state) => {
        //     return state.count * 2
        // },
        // doublePlusOne(): number {
        //     return this.count * 2 + 1
        // },
        // dDouble(): number {
        //     return this.doubleCount * 2
        // },
        getUserId: (state) => {
            return (userId: number) => state.users.find((user) => user.id === userId)?.name
        },
        doubleCount: (state) => state.count * 2,
        doublePlusCount(): number {
            return this.count * 2 + 1
        },
        otherMusicCount: (state) => {
            const otherStoreData = otherStore()
            return otherStoreData.music
        }
    },
    actions: {
        increment() {
            this.count ++
        }
    }
})