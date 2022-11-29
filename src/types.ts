export interface User{
    name?: string;
    age: number;
    role:Role;
    friends?:User[];
}
export type Role= "admin" |"user"|"superadmin";
