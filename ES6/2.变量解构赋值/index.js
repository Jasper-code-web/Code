/*
 * @Author: Jasper-code-web 1156657702@qq.com
 * @Date: 2022-08-12 15:58:50
 * @LastEditors: Jasper-code-web 1156657702@qq.com
 * @LastEditTime: 2022-08-12 17:17:22
 * @FilePath: \code\code\ES6\2.变量解构赋值\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)

// let [foo] = []
// console.log('foo',foo)

// let [foo = true] = []
// console.log('foo',foo)


// let [x = 1] = [undefined]
// let [y = 2] = [null]
// console.log('x,y',x,y)

// function f() {
//     console.log('aaa')
// }
// let [x = f()] = [1]
// console.log(x)

// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// console.log('baz',baz)

let x
{x} = {x: 1} //Uncaught SyntaxError: Unexpected token '='