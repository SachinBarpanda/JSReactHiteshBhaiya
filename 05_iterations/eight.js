const myNums = [1,2,3];
const myTotal = myNums.reduce(function (acc,currval){
    console.log(`acc : ${acc}`);
    return acc+currval
} , 3)

console.log(myTotal);

const myTotal1 = myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal1);

const shoppingCart = [
    {
        itemName : 'js Course',
        price : 499
    },
    {
        itemName : 'java Course',
        price : 399
    },
    {
        itemName : 'mobile Course',
        price : 599
    },
    {
        itemName : 'data science Course',
        price : 99
    }

]

const totalPrice = shoppingCart.reduce((acc,item) => acc+item.price , 0);
console.log(totalPrice);

