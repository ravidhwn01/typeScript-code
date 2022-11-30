interface Icreadential {
    username: string;
    password: string;
    age?: number;
}
declare function logIn1(creadentials: Icreadential): boolean;
declare const data: Icreadential;
interface Iauth {
    user: string;
    pass: string;
    log(username: string, password: string): void;
}
declare const auth: Iauth;
declare function logloglog(dataHai: Iauth): void;
