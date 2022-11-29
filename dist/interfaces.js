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
