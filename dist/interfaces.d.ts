interface Transaction {
    debit: number;
    credit: number;
}
interface Bank {
    accNumber: number;
    accHolderName: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[];
}
declare const transaction1: Transaction;
declare const transaction2: Transaction;
declare const bank: Bank;
interface Book {
    name: string;
    price: number;
}
interface EBook extends Book {
    format: string;
    fileSize: number;
}
interface AudioBook extends EBook {
    duration: number;
}
declare const books: AudioBook;
interface car {
    name: string;
    color: string;
    speed: number;
}
interface car {
    type: string;
}
interface car {
    model: string;
}
declare const superCar: car;
declare type Id = number | string;
declare function printId(id: Id): void;
declare function getFirstThree(x: string | number[]): string | number[];
