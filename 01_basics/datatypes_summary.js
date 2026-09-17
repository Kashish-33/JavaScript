// Primitive 

// 7 types:String, Number, Boolean, null, undefined, Symbol, BigInt

// Refrence Type(NON Primitive)

// Array, Objects, Functions
const bignumber = 564632323567980n
console.log(typeof bignumber);

// array
const heroes = ["Shakti", "doga", "Monga"]

// object
let myobj ={
    name: "hitesh",
    age: 22
}

// function
const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

console.log(typeof myobj)

console.log(typeof heroes)

// ll non primitives are object type function is also object type

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive),  Heap(Non Primitive)

let myytname = "hitesh"

let anothername = myytname
anothername = "chai"

console.log(myytname)
console.log(anothername);

let user1 = {
    email: "123@gmail.com",
    upi: "23@ybl"
}

let user2 = user1

user2.email = "hitesg@"

console.log(user1.email);
console.log(user2.email);

