# let and const

## 特点

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































