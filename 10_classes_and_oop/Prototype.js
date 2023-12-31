let  myName = "Sachin       ";
let myProject = "Chai     ";

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"];

let heroPower= {
    thor : "hammer",
    spiderman : "sling",

    getSpidermanPower : function(){
        console.log(`Spiderman power is ${this.spiderman}`)
    }
}

// heroPower.getSpidermanPower();

Object.prototype.sachinHere = function(){
    console.log("Sachin is present in every object")
}

// heroPower.sachinHere();
arr = [1,3,4,5]
// arr.sachinHere();

String.prototype.trueLength = function(){
    console.log(`The true length is : ${this.trim().length}`);
}

let anotherUser = "What is prototype        ";
anotherUser.trueLength();
"sachin      ".trueLength();