interface Icreadential {
  username: string;
  password: string;
  age?:number;
}

function logIn1(creadentials: Icreadential): boolean {
  console.log(creadentials);
  return true;
}

// creating object  hamne isko type nhi diya 😲 that is called duck typing / structural typing
const data : Icreadential = {
  username: "ravi",
  password: "12345678",
  age:34
};
logIn1(data);


// agar 2 object ki shape  same ho to   typescript ke hisaab se vo 2no same ype ke hai



// next concept
interface Iauth{
    user:string;
    pass:string;
    log(username:string,password:string):void;  // method  in interface
}


const auth : Iauth = {
    user: "ravi dhawan",
    pass: "secrethaibhaipasswaord",
    log: function (username: "string", password: "string"): void {
       console.log("Function not implemented.");
    }
}

function logloglog(dataHai:Iauth){
    console.log(dataHai);
}
logloglog(auth)