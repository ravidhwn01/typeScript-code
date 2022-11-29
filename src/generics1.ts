// generics
// reusability of a function
 function logIn <T>(arg:T):T{
    console.log(arg)
    return arg;
 }

 logIn([5]);
 logIn(["5"]);
 logIn("this is generic fun");
 logIn(6);

// generics
 interface HasAge{
   age:number;
 }

 function getMax<T extends HasAge> (people:T[]):T{
   return people.sort((a,b)=>b.age-a.age)[0]
 }

 const peoples:HasAge[] = [{age:30},{age:20},{age:1}];
 const people = getMax(peoples);
 
 console.log(people.age)