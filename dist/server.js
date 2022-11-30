"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const fetchData1 = async (path:string):Promise<Ipost[]> => {
//     const response = await fetch(`http://example.com${path}`)
//     return response.json();
// }
// const fetchData2 = async (path:string):Promise<Iuser[]> => {
//     const response = await fetch(`http://example.com${path}`)
//     return response.json();
// }
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://example.com${path}`);
    return response.json();
});
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield fetchData('/user');
    const path = yield fetchData('/path');
    user[0].age;
    path[0].age;
}))();
