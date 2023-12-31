const coding = ['js','python','ruby','java','cpp']

const values = coding.forEach( (item)=>{
    return item;
})
// console.log(values); // doesn't return anything

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNums.filter( (items) => items>4);
const newNums1 = myNums.filter( (items) => {
    return items>4
});//नया scope start हो गया है यहाँ, इसलिए return करना पड़ेगा।

// console.log(newNums);
// console.log(newNums1);

//another way
const newNums2 = []
myNums.forEach ( (nums) => {
    if(nums>4){
        newNums2.push(nums);
    }
})
// console.log(newNums2);

// new Example 

const books = [
    {title : 'BookOne' , genre : 'Fiction', publish : 1981},
    {title : 'BookTwo' , genre : 'Horror', publish : 1953},
    {title : 'BookThree' , genre : 'Fiction', publish : 1972}
]

// const userBooks = books.filter ( (book) => book.genre === 'Fiction')
const userBooks = books.filter ( (book) =>{return book.publish >= 1950;})
console.log(userBooks);



