/*
 * @Author: Jasper-code-web 1156657702@qq.com
 * @Date: 2022-08-10 10:05:19
 * @LastEditors: Jasper-code-web 1156657702@qq.com
 * @LastEditTime: 2022-08-10 11:31:21
 * @FilePath: \code\code\ES6\1.let and const\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// "use strict"
var temporal = 'jas'
var a = 1
if(true) {
    console.log('a',a) // a 1
    // console.log('temporal',temporal) //Uncaught ReferenceError: Cannot access 'temporal' before initialization
    let temporal = 'Jasper'
}

console.log(typeof undeclared_variable) //undefined
// console.log(typeof x) //Uncaught ReferenceError: Cannot access 'x' before initialization
let x

//IIFE Immediately Invoked Function Expression
(function () {
    // var tmp
}())

function f() {console.log('I am outside')}
(function () {
    console.log(f) //undefined
    if(false) {
        function f() {console.log('I an inside')}
        console.log('a')
    }
    // f() //Uncaught TypeError: f is not a function
}())


// if(true) let x = 1 //error
if(true) {
    let x = 1
}

if(true) {
    function f1() {}
}
// if(true) var t1 = 1