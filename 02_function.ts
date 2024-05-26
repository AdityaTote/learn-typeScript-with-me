// Functions 
// Here tye annotation is commpulsory

function addTwo(num: number){
    return num + 2;
}
addTwo(9);


function getUpper(val: string){
    return val.toUpperCase();
}
getUpper("nhdie");


function signUpUser(name: string, email:string, isPaid:boolean){
    return `${name}, ${email}, ${isPaid}`;
}
signUpUser("John Snow", "john@snow.com", true);


let getUser = (name: string, email:string, isPaid:boolean = false) => {
    return `${name}, ${email}, ${isPaid}`;
}
getUser("1","2")


function addNum(num: number): number{
    return num + 2;
}
addNum(7);


let name = (data: string): string => {
    return data
}
name("8")


// here void means the fnction s not returning 
function getName(name: string): void{
    console.log(name);
}
getName("name")

export {}