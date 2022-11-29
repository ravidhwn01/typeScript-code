export interface User {
    name?: string;
    age: number;
    role: Role;
    friends?: User[];
}
export declare type Role = "admin" | "user" | "superadmin";
