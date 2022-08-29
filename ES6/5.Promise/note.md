## Proxy的作用是什么？

proxy可以给对象做一层“拦截”。当外界需要对对象进行访问、修改时，必须先通过这层拦截。因此可以在proxy中对对对象的访问、修改操作进行过滤、改写。

## Proxy如何工作？

Proxy接收2个参数：

第一个参数(target): 目标对象

第二个参数(hanlder): 捕捉器对象。对象内为可配置的方法

```javascript
const target = {}
const handler = {
    get(target, protertype, receiver) {
        
    }
}
const proxy = new Proxy(target, hanlder)
```

## Handler可以配置哪些方法？分别拦截的是什么行为？传入的参数是什么？

### handler.get()

拦截的行为：拦截对象的读取属性操作

get(target, property, receiver){}

target: 目标对象

property: 读取的属性名

receiver: proxy实例、或者继承proxy的对象

```javascript
const proxy = new Proxy({}, {
    get(target, prop, receiver) {
        console.log(proxy === receiver) // true
    }
})
proxy.a
```

### handler.set()

拦截的行为：拦截设置对象属性值得操作

set(target, property, value, receiver) {}

value: 给属性设置的值

```javascript
const proxy = new Proxy({}, {
    set(target, property, value, receiver) {
        return target[property] = ++ value
    }
})
proxy.a = 1
console.log(proxy.a) //2
```

### handler.apply()

拦截的行为：拦截proxy()调用、call/apply

apply(target, args) {}

ctx: 被调用时的上下文对象

argumentList: 被调用时的参数数组

```javascript
function test(...args) {
    console.log('This is a test')
}
const proxy = new Proxy(test, {
    apply(target, ctx, argumentList) {
        target()
        console.log('ctx', ctx)
        for(let prop of argumentList) {
            console.log('prop',prop)
        }
    }
})
proxy(1, 2)
proxy.call({}, 5, 6)
```

<img src="C:\Users\Jasper\Desktop\QQ截图20220828231639.png" style="zoom:120%;" align="left" />

### handler.deleteProperty()

拦截行为：拦截delete操作

deleteProperty(target, key) {}

```javascript
let target = {
    a: 1,
    b: 2
}
let handler = {
    deleteProperty(target, key) {
        delete target[key]
    }
}
const proxy = new Proxy(target, handler)
delete proxy.a
console.log(proxy)
```

### handler.has()

拦截行为：拦截hasProperty(),判断对象是否有某个属性。例如：in操作

has(target, key) {}

### handler.construct()

拦截行为：拦截new操作。必须范湖一个对象

construct(target, argumentList, newTarget) {}

newTarget: 最初被调用的构造函数。例子中的proxy实例

```javascript
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
```

<img src="C:\Users\Jasper\Desktop\QQ截图20220828233358.png" style="zoom:120%;" align="left" />

### handler.defineProperty()

拦截行为：拦截Object.defineProperty()操作


defineProperty: function(target, property, descriptor) { }

descriptor: 属性描述符





