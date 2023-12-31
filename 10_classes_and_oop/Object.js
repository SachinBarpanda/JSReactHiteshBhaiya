function method1(num){
    return num*5;
}
method1.power= 2;

console.log(method1(5));
console.log(method1.power);
console.log(method1.prototype);

function createUser(username, score){
    this.username = username;
    this.score = score;
}
createUser.prototype.incerment = function(){
    this.score ++;
}

createUser.prototype.printMe = function(){
    console.log(`My score is ${this.score}`);
}

let chai = new createUser("Chai wala", 25);
let tea = createUser("teacher", 240);

chai.printMe();//ans
// tea.printMe();//no idea what to do