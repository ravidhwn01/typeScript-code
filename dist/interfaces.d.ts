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
