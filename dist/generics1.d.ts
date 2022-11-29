declare function logIn<T>(arg: T): T;
interface HasAge {
    age: number;
}
declare function getMax<T extends HasAge>(people: T[]): T;
declare const peoples: HasAge[];
declare const people: HasAge;
