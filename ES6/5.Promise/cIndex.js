
target = function(...args) {
    console.log(args)
}
const proxy = new Proxy(target, {
    construct(target, argumentList, newTarget) {
        console.log(proxy === newTarget)
        for(let key of argumentList) {
            console.log('key',key)
        }
        return new target(3, 4)
    }
})
console.log(new proxy(1, 2))
