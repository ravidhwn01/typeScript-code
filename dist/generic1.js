"use strict";
// function getRandom(array: string[]): string {
//   const diceRoll = Math.floor(Math.random() * array.length);
//   return array[diceRoll];
// }
// const names = ["ravi", "aalu", "kalu", "kaju", "kala", "kali", "raja", "raju"];
// const randomName = getRandom(names);
// console.log(randomName);
// Path: src\generic2.ts
function getRandom(array) {
    const diceRoll = Math.floor(Math.random() * array.length);
    return array[diceRoll];
}
const names = ["ravi", "aalu", "kalu", "kaju", "kala", "kali", "raja", "raju"];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const randomName = getRandom(names);
const numName = getRandom(nums);
console.log(randomName);
console.log(numName);
