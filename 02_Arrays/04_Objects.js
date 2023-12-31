const tinderUser = new Object();
tinderUser.id = "123abc"
tinderUser.name= "Renus"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        firstName : {
            semiFirstName : "Sachin",
            lastName : "Barpanda"
        }
    }
}
// console.log(regularUser.fullname.firstName.semiFirstName);

// console.log(regularUser.fullname?.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {11:"x",21:"y"}
const obj4 = {111:"x",121:"y"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

const obj3 = {...obj1,...obj2,...obj4};
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));
// console.log(Object.entries(obj3));

const course = {
    courseName : 'js in hindi',
    price : 999,
    courseInstructor : "Sachin"
}

// const {courseInstructor} = course;
// console.log(courseInstructor)

// const {courseInstructor:instructor} = course;
// console.log(instructor);

