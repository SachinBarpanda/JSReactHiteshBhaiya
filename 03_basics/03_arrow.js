const user = {
    username : "Sachin",
    price : 999 , 

    welcomeMsg:function(){
        // console.log(`${this.username} has purchased license with ${this.price} rupees`);
        // console.log(this);
    }
}

user.welcomeMsg();
// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai();

// let chai1 = function(){
//     let username = "sachin"
//     console.log(this.username);
// }
// chai1();

// let chai = () => {
//     let username = "sachin"
//     console.log(this.username);
// }
// chai();

// const addTwo = (num1, num2) => (num1+num2);
const addTwo = (num1, num2) => ({num1:num2});
console.log(addTwo(2,3));


