/*
 * @Author: shenqing 1156657702@qq.com
 * @Date: 2022-08-31 15:23:13
 * @LastEditors: shenqing 1156657702@qq.com
 * @LastEditTime: 2022-09-01 16:38:31
 * @FilePath: \code\ES6\5.Promise\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//What is Promise?
//Promise是一个容器，里面一般保存着一个异步操作的结果。从语法上讲，Promise是一个对象，可以从中获取异步操作的信息。

//Promise of state
//pending fulfilled rejected
//只有异步操作的结果才能决定当前的状态，其它任何因素都不能影响其状态。

//一旦状态发生改变就不会再变

//Promise对象是一个构造函数
//Promsie接收一个函数作为参数。函数的参数为resolve、reject，它们有javascript本身提供，不用手动部署。
// const promise = new Promise((resolve, reject) => {
// })
//resolve作用：将Promise状态从pending变为resolved。在异步成功时调用，并将异步操作的结果作为参数返回。
//reject作用：将Promise状态从pending变为rejected。在异步失败时调用，并将异步操作的错误作为参数返回。

//promise实例的then方法,可以分别指定resolved和rejected方法的回调
// promise.then((value) => {

// }, (error) => {

// })

// function timeout(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms, 'done')
//     })
// }
// timeout(2000).then((value) => {
//     console.log('value',value) // done
// })

//Promise创建后会立即执行
// let promise = new Promise((resolve, reject) => {
//     console.log('Promise')
//     resolve()
// })
// promise.then((value) => {
//     console.log('resolve')
// })
// console.log('test')

const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000);
});

p2.then((result) => console.log(result)).catch((error) => console.log(error));
