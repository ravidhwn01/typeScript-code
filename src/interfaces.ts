// interfaces bhi ek tarah se object ka face hota hai
// = ka use nhi krne (like a class)
interface Transaction {
        debit:number;
        credit:number;
}

interface Bank{
    accNumber :number;
    accHolderName:string;
    balance: number;
    isActive:boolean;
    transactions:Transaction[];
}
const transaction1:Transaction = {
    debit:123,
    credit:345,
}
const transaction2:Transaction = {
    debit:1243,
    credit:3445,
}
const bank:Bank = {
accHolderName:"ravi kumar",
accNumber:12345678,
balance:1234,
isActive:true,
 transactions:[transaction1,transaction2]
}
console.log(bank)