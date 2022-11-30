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