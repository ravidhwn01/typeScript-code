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


// Extend
// DO NOT  REPEAT YOUR SELF

interface Book{
    name: string;
    price: number;

}
interface EBook extends Book {
    format :string;
    fileSize : number;

}
interface AudioBook extends EBook {
    duration:number;
}

const books : AudioBook = {
name:"asjsd",
price:2344,
duration:9,
fileSize:5,
format:"pdf"

}


// merging in ts  
// we can merge interfaces by creating same interface(name will be equal)
interface car{   // if this is in other library
    name:string;
    color:string;
    speed:number;

}
interface car{
    type:string;
    
}
interface car{
    
    model:string;
}

const superCar:car = {
    color :"red",
     model:"xuv",
     name:"bmw",
     speed:455,
     type:"petrol"

}