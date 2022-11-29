"use strict";
const transaction1 = {
    debit: 123,
    credit: 345,
};
const transaction2 = {
    debit: 1243,
    credit: 3445,
};
const bank = {
    accHolderName: "ravi kumar",
    accNumber: 12345678,
    balance: 1234,
    isActive: true,
    transactions: [transaction1, transaction2]
};
console.log(bank);
const books = {
    name: "asjsd",
    price: 2344,
    duration: 9,
    fileSize: 5,
    format: "pdf"
};
const superCar = {
    color: "red",
    model: "xuv",
    name: "bmw",
    speed: 455,
    type: "petrol"
};
console.log(superCar);
// narrowing
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId('hello bhai kesa hai'); //HELLO BHAI KESA HAI
printId(3); // 3
// get first three element
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree("ramkumar"));
console.log(getFirstThree([1, 2, 3, 4, 6]));
