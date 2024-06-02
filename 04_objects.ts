// Object

let User = {
    name: "John",
    email: "john@gmail.com",
    isBoole: true
}

// Object in Function
function createUser({ name: String, isPaid: boolean}){}
createUser({name: "John", isPaid: true})

// Function with argument ,Return type and defination 
function createCourse():{name: String, price: number }{
    return {name: "Java Full Stack", price: 49999}
}

function createUser1({ name: String, isPaid: boolean}){}
createUser({name: "John", isPaid: true, email: "hello@mail.com"}) // Gives error as two parameter is required but only three are passed. 

// Bad Behavior of Object 
function createUser2({name: String, isPaid: boolean}){}
let user = {
    name: "John",
    isPaid: true, 
    email: "hello@mail.com"
}
createUser2(user)

export {}