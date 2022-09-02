/*
 * @Author: Jasper-code-web 1156657702@qq.com
 * @Date: 2022-08-15 08:48:53
 * @LastEditors: shenqing 1156657702@qq.com
 * @LastEditTime: 2022-08-26 10:09:56
 * @FilePath: \code\code\ES6\4.Proxy\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// let obj = new Proxy({}, {
//     get: (target, propKey, receiver) => {
//         console.log(`getting ${propKey}`)
//         console.log('receiver',receiver)
//         return Reflect.get(target, propKey, receiver)
//     },
//     set: (target, propKey, value, receiver) => {
//         console.log(`setting ${propKey}`)
//         return Reflect.set(target, propKey, value, receiver)
//     }
// })

// obj.count = 1
// // setting count
// ++ obj.count
// // getting count
// // setting count

// let person = {
//     name: 'Jasper'
// }
// let proxy = new Proxy(person, {
//     get(target, propKey, receiver) {
//         if(propKey in person) {
//             console.log('target',target)
//             console.log('receiver',receiver)
//             return target[propKey]
//         }
//         else throw new ReferenceError(`Prop name ${propKey} does not exist`)
//     }
// })
// console.log('proxy.name',proxy.name) //Jasper
// console.log('proxy.age',proxy.age) //Uncaught ReferenceError

// let proto = new Proxy({}, {
//     get(target, propKey, receiver) {
//         console.log('GET ' + propKey)
//         return target[propKey]
//     }
// })
// let obj = Object.create(proto)
// console.log('obj',obj)
// obj.foo


/**
 * @discription: get
 * @return {*}
 */

// function createArray(...element) {
//     let handler = {
//         get(target, propKey, receiver) {
//             let index = Number(propKey)
//             if(index < 0) {
//                 propKey = String(target.length + index)
//             }
//             return Reflect.get(target, propKey, receiver)
//         }
//     }
//     let target = []
//     target.push(...element)
//     return new Proxy(target, handler)
// }
// let arr = createArray('a', 'b', 'c')
// console.log('arr[-2]',arr[-2])

//实现链式调用
// function pipe(value) {
//     let funcStack = []
//     let oproxy = new Proxy({}, {
//         get({}, fn) {
//             if(fn === 'get') {
//                 return funcStack.reduce((val, func) => {
//                     return func(val)
//                 }, value)
//             }
//             funcStack.push(window[fn])
//             return oproxy
//         }
//     })
//     return oproxy
// }

// var double = n => n * 2;
// var pow    = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;
// let result = pipe(3).double.pow.reverseInt.get;
// console.log('result',result)


/**
 * 通过Proxy的get方法监听dom调用的方法，方法名称就是要创建的dom
 * 返回一个函数，函数可以传入两个参数。第一个参数是dom的attribute,第二个参数是dom的children列表
 */
/**
 * 函数内部逻辑：
 * 根据监听的dom名创建一个el
 * 遍历attr并设置el的属性
 * 遍历children并把child添加到el
 * 返回el
 */
// const dom = new Proxy({}, {
//     get({}, property) {
//         return function(attrs = {}, ...children) {
//             const el = document.createElement(property)
//             for(let prop of Object.keys(attrs)) {
//                 el.setAttribute(prop, attrs[prop])
//             }
//             for(let child of children) {
//                 if(typeof child === 'string') {
//                     child = document.createTextNode(child)
//                 }
//                 el.appendChild(child)
//             }
//             return el
//         }
//     }
// })
// const el = dom.div(
//   {},
//   'Hello, my name is ',
//   dom.a({ href: '//example.com' }, 'Mark'),
//   '. I like:',
//   dom.ul(
//     {},
//     dom.li({}, 'The web'),
//     dom.li({}, 'Food'),
//     dom.li({}, "…actually that's it")
//   )
// );
// document.body.appendChild(el);

/**
 * proxy实例的getReceiver
 */
//getReceiver方法是由p提供的，所以receiver指向p
// const p = new Proxy({}, {
//   get({}, key, receiver) {
//     return receiver
//   }
// })
// console.log(p.getReceiver === p)

// const p = new Proxy({}, {
//   get({}, key, receiver) {
//     return receiver
//   }
// })
// const d = Object.create(p)
// console.log(d.s === d)

//通过writeable、configurable控制可读、可写
// const target = Object.defineProperties({}, {
//   foo: {
//     value: 123,
//     writable: false,
//     configurable: false
//   }
// })
// const handler = {
//   get(target, propKey) {
//     return 'abc'
//   }
// }
// const proxy = new Proxy(target, handler)
// proxy.foo

/**
 * set方法可以接收4个参数：对象、属性名、属性值、Proxy实例本身
 */
// let validator = {
//   set(obj, prop, value, receiver) {
//   }
// }

//利用get/set对对象属性进行拦截，每次操作以'_'开头的属性就会认为是私有属性，抛出错误
// const handler = {
//   get(target, key) {
//     invariant(key, 'get')
//     return target[key]
//   },
//   set(target, key, value) {
//     invariant(key, 'set')
//     target[key] = value
//     return true
//   }
// }
// function invariant(key, action) {
//   if(key[0] === '_') {
//     throw new Error(`Invalid attempt to ${action} private "${key}" property`)
//   }
// }
// const target = {}
// const proxy = new Proxy(target, handler)
// proxy._prop

/**
 * apply方法
 * 拦截函数的调用、call和apply操作
 * 接收3个参数：目标对象、目标对象的上下文对象(this)、目标对象的参数数组
 */
// let handler = {
//   apply(target, ctx, args) {
//     return Reflect.apply(...arguments)
//   }
// }

// let target = function(){
//   return 'I am the target'
// }
// let handler = {
//   apply(){
//     return 'I am Proxy'
//   }
// }
// const proxy = new Proxy(target, handler)
// console.log('proxy()',proxy()) // I am Proxy

// let twice = {
//   apply(target, ctx,args) {
//     return Reflect.apply(...arguments) * 2
//   }
// }
// function sum(left, right) {
//   return left + right
// }
// let p = new Proxy(sum, twice)
// console.log(p(1, 2))
// console.log(p.call(null, 2, 3))
// console.log(p.apply(null, [3, 4]))

/**
 * has方法
 * 用来拦截hasProperty操作，判断对象是否拥有某个属性。in运算符是最典型的操作
 * has监听的不是hasOwnproperty,所以不会判断属性是否是继承的
 */

//拦截_prop属性，不让in运算符识别到
// let handler = {
//   has(target, key) {
//     if(key[0] === '_'){
//       return false
//     }
//     return key in target
//   }
// }
// let obj = {
//   _prop: 1,
//   prop: 2
// }
// let p = new Proxy(obj, handler)
// console.log('_prop' in p)

//Object.preventExtensions把对象标记为不可扩展(不可添加，但是可以删除)
// let obj = {a: 1}
// Object.preventExtensions(obj)
// obj.b = 2
// console.log(obj)
// delete obj.a
// console.log('obj',obj)

//使用Object.preventExtensions方法使监听对象不可扩展。这时使用has方法就会报错
// let obj = {a: 1}
// Object.preventExtensions(obj)
// let p = new Proxy(obj, {
//   has(target, prop) {
//     console.log(target, prop)
//     return false
//   }
// })
// console.log('a' in p)

//has()方法不拦截for...in循环
// let stu = {name: 'Jasper', score: 59}
// let stu1 = {name: 'Andy', score: 99}
// let handler = {
//   has(target, prop) {
//     if(prop === 'score' && target[prop] < 60) {
//       return false
//     }
//     return prop in target
//   }
// }
// let oproxy1 = new Proxy(stu, handler)
// let oproxy2 = new Proxy(stu1, handler)

// for(let a in oproxy1) {
//   console.log(oproxy1[a]) //Jasper 59
// }

/**
 * target: 目标对象(construct拦截的是构造函数，所以target必须是一个函数)
 * args: 构造函数的参数数组
 * newTarget: 创造实例对象时，new命令作用的构造函数(创建出来的实例)
 * 必须返回一个对象，否则会报错
 */
// const handler = {
//   construct(target, args, newTarget) {
//     return new target(...args)
//   }
// }

// const p = new Proxy(function() {}, {
//   construct(target, args, newTarget) {
//     console.log('newTarget',newTarget)
//     return {value: args[0] * 10}
//   }
// })
// console.log((new p(1)).value) //10

/**
 * 构造函数的this指向handler,不指向target
 */
// const handler = {
//   construct(target, args) {
//     console.log(this === handler)
//     return new target(...args)
//   }
// }
// const p = new Proxy(function() {}, handler)
// console.log(new p()) //true

/**
 * 拦截delete操作(如果返回false或者抛出错误，属性不会被删除)
 * @param {*} target
 * @param {*} key
 */
// deleteProperty(target, key) {}
// 目标对象自身的不可配置属性(configurable),不能被deleteProperty删除,否则报错


/**
 * @discription: 拦截Object.defineProperty()、proxy.property = value
 * @param {*} target
 * @param {*} key
 * @param {*} descriptor
 * @return {boolean}
 */
//如果目标对象不可扩展
// function defineProperty(target, key, descriptor) {}

// let handler = {
//   defineProperty(target, key, descriptor) {
//     console.log(target, key)
//   }
// }
// let p = new Proxy({}, handler)
// p.a = 1
// console.log('p',p)


//返回对象一个自有属性的属性描述符
// let obj = {
//   a: 1
// }
// let desc = Object.getOwnPropertyDescriptor(obj, 'a')
// console.log('desc',desc)

// 拦截Object.getOwnPropertyDescriptor
// handler.getOwnPropertyDescriptor(target, key)

//拦截获取对象原型的操作
// handler.getPrototypeOf(target)


//判断对象是否可扩展
//Object.isExtensible()
//handler.isExtensible(target)监听上述方法

//用来拦截对象自身属性的读取操作
//handler.ownKeys(target)
//例如：Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()、Object.keys()、for...in


//使用Proxy代理，this会指向proxy代理
// const target = {
//     m: function() {
//         console.log(this === proxy)
//         console.log('this',this)
//     }
// }
// const handler = {}
// const proxy = new Proxy(target, handler)
// target.m()
// proxy.m()
