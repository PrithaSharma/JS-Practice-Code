// #Primitive


//7  types: String, number, Boolean, null, undefined, Symbol, BigInt

// const id = Symbol('123');
// const anotherId = Symbol ('123');
// console.log(id == anotherId);

const bigNumber = 356373829202736544n;

// #Non-Primitive/ Referece 

// Array, Objects, Functions

// const names = ["Pritha", "Phony", "Sakshi"];

// const myObj= {
//     name: "Pritha",
//     age: 22
// }

const myFunction = function(){
// console.log("Hello World");
}

// console.log(typeof myFunction);


//*******************************************************************

// Stack (Primitive), Heap (Non-primitive)


let myYoutubename = "hiteshchoudharydotcom";

let anotherName = myYoutubename;
anotherName = "chaiaurcode";

console.log(myYoutubename);
console.log(anotherName);

let UserOne = {
    email: "user1google.com",
    upi: "user@ybl"
}

let UserTwo = UserOne;

UserTwo.email = "hitesh@google.com";
console.log(UserOne.email);
console.log(UserTwo.email);
    
