interface Icreadential {
  username: string;
  password: string;
}

function logIn1(creadentials: Icreadential): boolean {
  console.log(creadentials);
  return true;
}

// creating object  hamne isko type nhi diya 😲 that is called duck typing
const data = {
  username: "ravi",
  password: "12345678",
  age:34
};
logIn1(data);
