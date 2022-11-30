interface Ipost{
    title:string;
    id:number;
    deccription:string;
}

interface Iuser{
    id:number;
    name:string;
    age:string;
}
// const fetchData1 = async (path:string):Promise<Ipost[]> => {
//     const response = await fetch(`http://example.com${path}`)
//     return response.json();
// }
// const fetchData2 = async (path:string):Promise<Iuser[]> => {
//     const response = await fetch(`http://example.com${path}`)
//     return response.json();
// }
const fetchData = async <ResultType> (path:string):Promise<ResultType[]> => {
    const response = await fetch(`http://example.com${path}`)
    return response.json();
}
// anonymous func
// (
//    async () => {
//    const posts = await fetchData1('/post')
//    posts[0].deccription;
//    posts[0].id;
//    posts[0].title;
//    }
// )();
// // anonymous func
// (
//    async () => {
//    const user = await fetchData2('/user')
//    user[0].age;
//    user[0].id;
//    user[0].name;
//    }
// )();
// ek generic fun bna liya 
    (
       async () => {
       const user = await fetchData <Iuser>('/user')
       const path = await fetchData <Iuser>('/path')
       user[0].age;
       path[0].age;
      
       }
    )();