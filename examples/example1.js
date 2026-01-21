//console is an object which gives ability to print to output device
/* multiple 
line
comment
 */
console.log('Hello world');

//js is loosely typed language
// undefined - you never defined it          null - we defined it null                 both are null
// datatypes - Number,string,undefined,null,boolean,Big int,symbol
//variable declaration - let ,const,var
// keyword - reserved word
// x = 10   is variable
// x is identifier

let x = 10
console.log(typeof(x))
let y = Number(10);      // other way of assigining
let z = Number("10");      // it will try to convert it into number if possible
let p = Number("Pulkit")    // its type is number but value is NaN (not a number)

console.log(typeof y)
console.log(typeof z)
console.log(typeof p)
