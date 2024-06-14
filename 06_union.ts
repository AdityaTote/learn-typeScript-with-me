// Union

let output: number | string;

output = 8;
output = "qwertyuiop"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let person1: User | Admin = {
    name: "P1",
    id: 4
}

function getId(id: number | string){
    if(typeof id === "string")
        id.toLowerCase();

}

// Array

const data: number[] = [1,2,3,6,5,47,8]
const data1: string[] = ["1",'2','3','6']
const data2: number[] | string[] = [1,2,3,6,5,47,8,"l"]  // provide either num or string otherwise :- gives error
const data3: (number | string)[] = [1,2,3,6,5,47,8,"l"]  