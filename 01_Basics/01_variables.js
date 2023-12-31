const accountId = 1443245;
let accountEmail = "sachin@google.com"
var accountPassword = "123#45"
accountCity = "Mumbai"
let accoutnState ;
// accountId = 2; 

accountEmail = "sb@sb.com#.com"
accountPassword = "2132131";
accountCity = "Bengaluru"

/* 
Prefer not to use var because of issue in
block scope
*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accoutnState]);