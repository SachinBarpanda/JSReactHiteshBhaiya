const promiseOne = new Promise(function(resolve,reject){

    setTimeout(function(){
        resolve();
        console.log('Async task is complete');
    },1000)
});

promiseOne.then(function(){
    console.log("ab thik se resolve ho gaya");
})

// way 2 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("settimout ran")
        resolve();
    },1000)
})
.then(function(){
    console.log("Now it's resolved")
})

// way 3
const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username:'sachin123',email:'sachin@123.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

//way 4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function () {  
        let error = false
        if(!error){
            resolve({username:'sachin',pass:'123'})
        }else{
            reject('Error : something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
        return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("Promise ran successfully or rejected ")
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function () {  
        // let error = false
        let error = true
        if(!error){
            resolve({username:'sachin',pass:'123'})
        }else{
            reject('Error : JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
        console.log(response);
        
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();

// way 6
async function getAllUser(){
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json()
        console.log(data);
    }catch(error){

    }
}

getAllUser();

//the above code in fetch
fetch("https://api.github.com/users/sachinbarpanda")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error)
})