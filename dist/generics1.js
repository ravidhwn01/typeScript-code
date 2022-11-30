"use strict";
// generics
// reusability of a function
function logIn(arg) {
    console.log(arg);
    return arg;
}
logIn([5]);
logIn(["5"]);
logIn("this is generic fun");
logIn(6);
function getMax(people) {
    return people.sort((a, b) => b.age - a.age)[0];
}
const peoples = [{ age: 30 }, { age: 20 }, { age: 1 }];
const people = getMax(peoples);
console.log(people.age);
