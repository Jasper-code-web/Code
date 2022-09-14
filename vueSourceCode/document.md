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

# Menorepo (monolithic repository)

在一个项目仓库（repo)管理多个模块（package),不同于一个仓库管理一个包。Vue3使用Memorepo方式管理。pnpm(performant npm 性能好的npm) 包管理工具提供了Menorepo方式管理包，所以使用pnpm工具管理包。

## Menorepo环境搭建（pnpm）
```javascript
npm i pnpm -g

pnpm init

//在workspace(根目录)安装一个包，不加-w会报错
pnpm i package-name -w
//比如安装vue
pnpm i vue -w
```

安装的包会放在node_modules路径下，而包的依赖包会全部放在node_modules/.pnpm路径下共享。

### 1.   .npmrc配置文件

pnpm从命令行、环境变量和.npmrc文件中获取其配置

* shamfully-hoist配置属性可以让安装的包的依赖包同样直接放在node_modules目录下，不用放在node_modules/.pnpm路径下

  <img src="E:\代码\前端\Code\vueSourceCode\note-image\.npmrc.png" align="left"  />



### 2.通过pnpm-workespace.yaml文件，定义工作空间的根目录

在根目录创建pnpm-workspace.yaml配置文件,并在里面做如下配置

```
packages: 
	- 'packapges/* '表示所有的包都放在packages目录下面
```

<img src="E:\代码\前端\Code\vueSourceCode\note-image\pnpm-workspace.yaml.png" style="zoom:100%;" align="left" />

### 3. packages目录下包的基本文件结构

<img src="E:\代码\前端\Code\vueSourceCode\note-image\目录.png" style="zoom:100%;" align="left" />

```json
打包配置 
"buildOptions": {
    "name": "VueReactivity",
    "formats": [ //打包规则
      "global", //浏览器
      "cjs", // common js
      "esm-bundler" //es module
    ]
  },
```



### 4.初始化ts

![](E:\代码\前端\Code\vueSourceCode\note-image\初始化ts.png)

```json
{
  "compilerOptions": {
    "outDir": "dist", //输出的目录
    "sourceMap": true, //采用sourceMap
    "target": "ES2016", //目标语法
    "module": "esnext", //模块格式
    "moduleResolution": "Node", //模块解析方式
    "strict": false, //严格模式
    "resolveJsonModule": true, //解析json模块
    "esModuleInterop": true, //允许通过es6语法引入commonjs模块
    "jsx": "preserve", //jsx 不转义
    "lib": ["ESNext","dom"], //支持的类库
    "baseUrl": ".", //基础路径为自己
    "paths": {
      "@vue/*": ["packages/*/src"] //当引入的路径为"@vue/*"时，去"packages路径下找文件"
    }
  }
}
```

 

































