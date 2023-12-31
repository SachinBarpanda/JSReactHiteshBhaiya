const user = {
    username : "sachin",
    loginCount : 9,
    signedIn : true,

    getUserDetails : function(){
        console.log(this);
    }
}

// console.log(user.getUserDetails());
// console.log(this);

function User(username, password){
    this.username = username;
    this.password = password;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("Sachin","12345")
const userTwo = new User("CHai Aur Code","09876")

console.log(userOne)
console.log(userTwo.greeting())
console.log(userTwo.constructor())