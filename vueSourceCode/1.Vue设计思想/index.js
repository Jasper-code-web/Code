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