#  Vue设计思想

* 拆分代码：Vue3.0更注重模块上的拆分，在2.0中无法单独使用部分模块。需要引入完整的Vuejs(例如：只想使用响应式部分，但是需要引入完整的Vuejs), Vue3中的模块之间耦合度低，模块可以独立使用。
* 重写API：Vue2中很多方法挂载到实例中导致没有使用也会被打包（很多组件也是一样）。通过构建工具Tree-shaking机制按需引入，减少用户打包后的体积。
* 扩展更方便：Vue3允许自定义渲染器，扩展能力强。不会发生以前的事情，改写Vue源码改造渲染方式。

## 声明式架构

### 命名式和声明式的区别

* 命名式框架的重要特点是主要关注过程，比如jQuery

* 声明式架构更加关注结果。命令式的代码都封装到Vuejs中，过程靠Vuejs实现

  > 声明式代码更加简单，不需要关注实现，按照要求填代码就可以（给上原材料就可以输出相应结果）

```javascript
//命名式：自己实现累加过程
let numbers = [1, 2, 3, 4, 5]
let total = 0
for(let i = 0; i < numbers.length; i ++) {
    total += numbers[i]
}
console.log('total',total)


//声明式：使用已经设定好的reduce方法实现累加
let total2 = numbers.reduce((memo, current) => {
    return memo + current
}, 0)
console.log('total2',total2)
```

## 采用虚拟DOM

传统更新页面，拼接一个完整的字符串innerHTML全部重新渲染。添加虚拟DOM后，可以比较新旧虚拟节点，找到变化再进行更新。虚拟DOM就是一个对象，用来描述真实DOM的。

## 区分编译时和运行时

* 我们需要有一个虚拟DOM，调用渲染方法将虚拟DOM渲染成真实DOM（缺点就是虚拟DOM编写麻烦）
* 专门写个编译时可以将模板编译成虚拟DOM（在构建的时候进行编译性能更高，不需要在运行的时候进行编译，Vue3在编译中做了很多优化）

## 环境搭建

pnpm初始化

```
npm i pnpm -g

npmp init
```









































