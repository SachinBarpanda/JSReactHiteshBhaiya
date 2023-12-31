// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());


// let myCreatedDate = new Date(2023,0,23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date("2023-01-14") ;
let myCreatedDate2 = new Date("01-14-2023") ;
console.log(myCreatedDate2.toDateString());

let myDate = new Date();
myDate.toLocaleString('default',{
    weekday:"narrow"
})
console.log(myDate);



