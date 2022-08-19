/*
 * @Author: Jasper-code-web 1156657702@qq.com
 * @Date: 2022-08-15 08:48:53
 * @LastEditors: shenqing 1156657702@qq.com
 * @LastEditTime: 2022-08-19 17:56:30
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

// const dom = new Proxy(
//   {},
//   {
//     get(target, property) {
//       return function (attrs = {}, ...children) {
//         const el = document.createElement(property);
//         for (let prop of Object.keys(attrs)) {
//           el.setAttribute(prop, attrs[prop]);
//         }
//         for (let child of children) {
//           if (typeof child === 'string') {
//             child = document.createTextNode(child);
//           }
//           el.appendChild(child);
//         }
//         return el;
//       };
//     },
//   }
// );

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

const target = Object.defineProperties({}, {
  foo: {
    value: 123,
    writable: false,
    configurable: false
  }
})

const handler = {
  get(target, propKey) {
    return 'abc'
  }
}

const proxy = new Proxy(target, handler)

proxy.foo