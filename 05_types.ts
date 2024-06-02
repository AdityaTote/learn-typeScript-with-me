// Type Keyword

type User = {
    name: string;
    email: string
}

function creatUser(user: User){}

creatUser({name: "",email: ""})

function createUser1():User{
    return {name:"", email:""}
}

// Readony: used where the data cannot be changed.As name suggest it is used for read pupose only. 
type User1 = {
    readonly _id: string;
    name: string;
    email: string
}

let person1: User1 = {
    _id: "789654123",
    name: "P1",
    email: "P1@gmail.com"
}

// Optional ? : this is optional if provided then ok and if not then also works 
type User2 ={
    name: string;
    email: string;
    cardCredential?: number
}

let person2:User2 = {
    name: "P2",
    email: "P2@gmail.com"
    // here i will not provide cardCredential beacuse it is not neccesary.
}

// Merging  types

type cardName = {
    cardname: string
}
type cardNumber = {
    cardname: string
}

type cardDetail = cardName & cardNumber & {
    cvv: number
}
// the above is bad pratice

type cardCvv = {
    cvv: number
}

type cardDetails = cardName & cardNumber & cardCvv


export {}