"use strict";
const a = 1;
console.log(a);
let b = 'Hello World';
console.log(b);
class Person {
    constructor(name) {
        this.name = name;
    }
}
const user = new Person('guutong');
console.log(user);
let myName = "tong";
myName = 3;
console.log(myName);
let myAge = 99;
myAge = '999';
console.log(myAge);
// condition
// if () {}
// else {}
// switch (key) {
//   case value:
//     break;
//   default:
//     break;
// }
// do {
// } 
// while()
// while (condition) {
// }
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
// for (const key in object) {
//   if (Object.prototype.hasOwnProperty.call(object, key)) {
//     const element = object[key];
//   }
// }
// for (const iterator of object) {
// }
// Function
function add(n1, n2) {
    return n1 + n2;
}
add(1, 2);
function printResult(num) {
    console.log(num);
}
printResult(add(1, 2));
