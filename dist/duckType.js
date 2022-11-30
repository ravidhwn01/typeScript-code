"use strict";
function logIn1(creadentials) {
    console.log(creadentials);
    return true;
}
// creating object  hamne isko type nhi diya 😲 that is called duck typing / structural typing
const data = {
    username: "ravi",
    password: "12345678",
    age: 34
};
logIn1(data);
const auth = {
    user: "ravi dhawan",
    pass: "secrethaibhaipasswaord",
    log: function (username, password) {
        console.log("Function not implemented.");
    }
};
function logloglog(dataHai) {
    console.log(dataHai);
}
logloglog(auth);
