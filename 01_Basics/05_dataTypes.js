
const id = Symbol('123');
const idanother = Symbol('123');
console.log(id == idanother);

const bigNum = 2312301230110200202n;
console.log(typeof bigNum);
console.log(typeof id);

console.log(id);

// 1.Primitive DataTypes 
// Number => number 
// String => string
// Boolean => boolean 
// undefined => undefined 
// Symbol =>  symbol
// BigInt => bigint
// null => Object

// 2.Non Primitive DataTypes
// Arrays => Object
// Function => function
// Object => object


let name = "Sachin";

let anotherName = name;
anotherName = "chai aur code"
console.log(anotherName);
console.log(name);

let userOne = {
    email: "user@google.com",
    upi : "user@gpt"
}

let userTwo = userOne;
userTwo.email = "sachin@hotmail.com"
console.log(userOne.email);
console.log(userTwo.email);
