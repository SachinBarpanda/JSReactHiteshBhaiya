const descripter = Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descripter);

const chai = {
    name : "ginger chai",
    price : 250,
    isAvailable : true
}

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    writable : false,
    enumerable:false,

    order : function(){console.log("Order ho gaya bhaiya")}
})

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(key, value)
    }
}