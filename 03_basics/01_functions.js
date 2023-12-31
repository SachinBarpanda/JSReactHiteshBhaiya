function calculatePrice(...num1){
    return num1;
}

// console.log(calculatePrice(20,30,40));

const user = {
    name : "sachin",
    price : 299
}

function handlePrice(obj){
    console.log(`User is ${obj.name} and price is ${obj.price}`);
}

// handlePrice(user);
handlePrice({
    name : "sam",
    price : 300
});

const newArray = [200,400,600,800];
function returnSecVal(getArr){
    return getArr[1];
}
console.log(returnSecVal(newArray));

