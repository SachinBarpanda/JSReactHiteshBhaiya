// ES 6
class User{
    constructor(username, email , password){
        this.username = username;
        this.email = email ;
        this.password = password;
    }

    capitalUsername(){
        return `${this.username}`.toUpperCase();
    }
}

const Chai = new User("chai", "chai@gmail.com","234");
console.log(Chai.capitalUsername());