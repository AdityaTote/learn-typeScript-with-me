// Array

// While mapping we not have to specify the type it extract from the array.

const heroes = ["batman", "ironman", "deadpool"];
//  Here it automatically set to string
heroes.map(hero => {
    return `hero is ${hero}`;
});

const scores = [70, 80, 90, 86, 78];
// Here it automatically set to number.
scores.map(score => {
    return `hero is ${score}`;
});

// Array Declaration
// 1st type
let MyArr: string[] = [];
MyArr.push("")
let My2Arr: number[] = [];
My2Arr.push(5)
// 2nd Type
let My3Arr: Array<string> = [];
My3Arr.push("")
let My4Arr: Array<number> = [];
My4Arr.push(5)

// (After type)
type User = {
    name: string;
    email: string
}
let user: User[] = []
user.push({name: "", email: ""})

// Array inside Array

let num: number[][] = [
    [78],
    [4]
]

export {}