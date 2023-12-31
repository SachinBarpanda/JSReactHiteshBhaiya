class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password}`.toUpperCase();//then comes here--> 2
    }

    set password(value){
        this._password = value;//the value of constructor first comes here--> 1
    }

}

const sachin = new User("sac@gamil.com",123);

console.log(sachin.password);
