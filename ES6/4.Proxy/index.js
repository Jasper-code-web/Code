let obj = new Proxy({}, {
    get: (target, propKey, receiver) => {
        console.log(`getting ${propKey}`)
        return Reflect.get(target, propKey, receiver)
    },
    set: (target, propKey, value, receiver) => {
        console.log(`setting ${propKey}`)
        return Reflect.set(target, propKey, value, receiver)
    }
})

obj.count = 1
// setting count
++ obj.count
// getting count
// setting count