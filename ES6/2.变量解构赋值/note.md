# 1.数组的结构赋值

```javascript
let [a, b, c] = [1, 2, 3]
console.log(a, b, c) //scuess

let [foo] = []
console.log('foo',foo) //undefined
```

>数组结构，如果右边不是数组（严格的说不是可遍历结构iterator）或者结构不对应，左侧变量就会是undefined

## 默认值

```javascript
let [foo = true] = []
console.log('foo',foo) //true

let [x = 1] = [undefined]
let [y = 2] = [null]
console.log('x,y',x,y) // 1  null
```

在赋值过程中，ES6会使用严格相等运算符（===）。只有右侧对应位置的值严格等于undefined，才会赋值失败，并在左侧使用默认值。

```javascript
function f() {
    console.log('aaa')
}
//函数f不会执行
let [x = f()] = [1]
console.log(x) // 1
```

```javascript
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined
```

默认值可以引用已完成解构赋值的变量

## 2对象的结构赋值

当需要定义的变量名与对象属性的名称不一样时

```javascript
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log('baz',baz) //aaa
```

赋值给一个已经声明的变量

```javascript
let x
{x} = {x: 1} //Uncaught SyntaxError: Unexpected token '='
//不能将大括号放在行首，否则js会将{x}理解成代码块，所以会报错

let x;
({x} = {x: 1}) //1
```



















