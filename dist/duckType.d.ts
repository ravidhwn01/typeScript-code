interface Icreadential {
    username: string;
    password: string;
}
declare function logIn1(creadentials: Icreadential): boolean;
declare const data: {
    username: string;
    password: string;
    age: number;
};
