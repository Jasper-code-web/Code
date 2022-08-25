function pipe(value) {
    const funcStack = []
    const proxy = new Proxy({}, {
        get({}, fn) {
            if(fn === 'get') {
                return funcStack.reduce((val, func) => {
                    console.log(func)
                    return func(val)
                }, value)
            }
            funcStack.push(window[fn])
            return proxy
        }
    })
    return proxy
}
var double = n => n * 2;
var pow    = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;
let result = pipe(3).double.pow.reverseInt.get;
console.log('result',result)