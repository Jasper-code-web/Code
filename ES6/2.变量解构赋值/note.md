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





