"use strict";
// typeScript is only for development not for production
// let add: (x: number, y: number) => number;
// let sum:(a:number,b:string) =>number;
// let add: (a: number, b: number) => number =
//     function (x: number, y: number) {
//         return x + y;
//     };
//     let num1:number = 3; // we cannot assign sting to num1
//     function calc(a:number,b:number){
//         return a+b;
//     }
//    console.log(calc(num1,5));
function getTotal(numbers) {
    return numbers.reduce((acc, item) => {
        return acc + item;
    }, 0);
}
console.log(getTotal([3, 5, 7]));
const user = {
    name: "ravi dhawan",
    role: "user",
    age: 4
};
console.log(user.name);
const ravi = {
    name: "ravi dhawan",
    age: 34,
    phoneNo: 2345678999
};
console.log(ravi);
