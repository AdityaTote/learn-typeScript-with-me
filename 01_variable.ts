//  String, Number, Boolean

// Always specefing the type of varible is not good practice if you are assigning value next to itbeacuse typeSrcitp understans the value and directly provides the type to variable. 
// In Variales the tye annotation is optional

// String
let greetings:string  = "Good Morning"; // this is normal string it cannot include int in it 

console.log(greetings);

// Number
let numbers: number = 785  // Number in type script consit of +ve, -ve, float all in a single Number. 

console.log(numbers);

// Boolean
let isLoggedIn: boolean = false;

console.log(isLoggedIn);

// Any
let output:any;

function getUser(){
    return "JohnSnow";
}

output = getUser();
// Here what function returns is not know someone will return id as a number or someone will be provide name.
// So in this case any is used for unknow type or to stop ttype checking.
// This is a bad practice DOnt Use it.....

export {}  // For Cannot redeclare block-scoped variable ERROR