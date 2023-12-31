function setUsername(username){
    this.username = username;
}

function createUser(username , email, pass){
    setUsername.call(this,username);

    this.email = email;
    this.pass = pass;
}

const chaiCutting = new createUser("chai","chai@fb.com","123");
console.log(chaiCutting)