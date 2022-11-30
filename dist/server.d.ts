interface Ipost {
    title: string;
    id: number;
    deccription: string;
}
interface Iuser {
    id: number;
    name: string;
    age: string;
}
declare const fetchData: <ResultType>(path: string) => Promise<ResultType[]>;
