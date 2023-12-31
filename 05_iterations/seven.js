const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// Mapping for iteration
const newarrNums = myNumbers.map( (nums) => {
    return nums+10;
})

const newNums = myNumbers.map((nums)=> nums*10)
                .map((num) => num+1)
                .filter ( (num) => num > 40)
                .map ((num)=>{return  num+7})

// console.log(newarrNums);
console.log(newNums);