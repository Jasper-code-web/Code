// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)

// let [foo] = []
// console.log('foo',foo)

// let [foo = true] = []
// console.log('foo',foo)


// let [x = 1] = [undefined]
// let [y = 2] = [null]
// console.log('x,y',x,y)

function f() {
    console.log('aaa')
}
let [x = f()] = [1]
console.log(x)

let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log('baz',baz)