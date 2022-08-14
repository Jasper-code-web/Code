# 概括

proxy对象通过new Proxy创建，Proxy(target, handler)构造函数接收2个参数，第一个参数是目标对象，第二个参数是配置对象。

```javascript
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
```





















