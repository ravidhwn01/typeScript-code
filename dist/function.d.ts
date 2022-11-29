declare function getTotal(numbers: number[]): number;
declare const user: {
    name: string;
    role: string;
    age: number;
};
declare type User = {
    name: string;
    phoneNo?: number;
    age: number;
};
declare const ravi: User;
declare function login(getData: User): User;
