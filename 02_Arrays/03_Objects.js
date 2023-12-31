// Declaring an object
// singletoh--> constructor wali

// literals 
const mySmb = Symbol("key1");

const user = {
    name : "Sachin",
    [mySmb] : "FirstKey",
    age : 10,
    location: "Banaras",
    email : "sam@go.in" ,
    lastDays : ["monday","saturday"]
}

// console.log(user.name);
// console.log(user['name']);
// console.log(typeof user[mySmb]);
// console.log(typeof user.mySmb);

// console.log(user);

user.greeting = function(){
    console.log("Hello everyone");
}

user.greeting();


