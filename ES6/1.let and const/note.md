# let and const

## let

### 1.不存在变量提升

只有在变量声明之后才能调用，不然会报错

### 2.暂时性死区

```javascript
var temporal = 'jas'
var a = 1
if(true) {
    console.log('a',a) // a 1
    console.log('temporal',temporal) //Uncaught ReferenceError: Cannot access 'temporal' before initialization
    let temporal = 'Jasper'
}
```

ES6规定，在区块中一旦使用let和const声明了变量，那么相应的变量就变成了封闭作用域。在该区块内，在声明之前使用该变量；即便在区块外声明了同名的变量，也会报错。这就是“暂时性死区”(Temporal Dead Zone)。

当然，这就导致了，在区块内声明了与区块外同名的变量也不会报错。

```javascript
console.log(typeof undeclared_variable) //undefined
console.log(typeof x) //Uncaught ReferenceError: Cannot access 'x' before initialization
let x
```

typeof在判断一个从未声明的变量时会返回undefined，不会报错。但是判断一个暂时未声明，但在之后使用let或const声明了该变量，就会报错。

### 3.不允许重复声明

### 4.块级作用域

ES5只有函数作用域和全局作用域。ES5中for循环的问题就是因为for循环中定义的变量为全局作用域的。

```javascript
//IIFE Immediately Invoked Function Expression
(function () {
    var tmp
}())
```

有了块级作用域，IIFE就没有存在的必要

> ES6标准规定，函数的声明调用规则和let一样。也就是在块级作用域内声明，对外部没有影响。
>
> 但是在浏览器实现中函数的声明调用规则与var一样。也就是有变量提升，也没有块级作用域。
>
>
> ```javascript
> (function () {
>  console.log(f) //undefined
>  if(false) {
>      function f() {console.log('I an inside')}
>      console.log('a')
>  }
>  f() //Uncaught TypeError: f is not a function
> }())
> ```
>

>ES6的块级作用域必须有大括号。如果没有，js引擎就会认为不存在块级作用域
>
>```javascript
>if(true) let x = 1 //error
>if(true) {
>    let x = 1
>}
>```

## const

### 1.const一旦声明就必须赋值，不然会报错

## ES6声明变量注意点

### 1.声明变量方式

ES5 2种方式：var命令、function命令

ES6 6种方式：var命令、function命令、let命令、const命令、import命令、class命令

### 2.ES6声明的全局变量不再与顶层对象挂钩























