# 概括

作用：给对象添加一个代理拦截，可以在拦截器中对对象进行操作

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

# 实例方法

## get()

> 作用: 拦截对象的访问操作

get方法接受3个参数，第一个是目标对象，第二个是对应的属性名，第三个是proxy本身。

如果访问一个不存在的属性只会返回undefined，不会报错

```javascript
let person = {
    name: 'Jasper'
}
let proxy = new Proxy(person, {
    get(target, propKey, receiver) {
        if(propKey in person) {
            console.log('target',target)
            return target[propKey]
        }
        else throw new ReferenceError(`Prop name ${propKey} does not exist`)
    }
})
console.log('proxy.name',proxy.name) //Jasper
console.log('proxy.age',proxy.age) //Uncaught ReferenceError 未设置则返回undefined
```

如果在对象原型（prototype）上定义了拦截器，实例对象访问继承属性。拦截器也会生效


```javascript
let proto = new Proxy({}, {
    get(target, propKey, receiver) {
        console.log('GET ' + propKey)
        return target[propKey]
    }
})
let obj = Object.create(proto)
obj.foo //GET foo
```



















