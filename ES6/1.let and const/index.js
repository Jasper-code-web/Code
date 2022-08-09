var temporal = 'jas'
var a = 1
if(true) {
    console.log('a',a) // a 1
    // console.log('temporal',temporal) //Uncaught ReferenceError: Cannot access 'temporal' before initialization
    let temporal = 'Jasper'
}

console.log(typeof undeclared_variable)
console.log(typeof x) //Uncaught ReferenceError: Cannot access 'x' before initialization
let x