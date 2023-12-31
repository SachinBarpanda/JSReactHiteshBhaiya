class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `231`;
    }
}
const hitesh = new User("Sachin");
// console.log(hitesh.createId())
console.log(User.createId())