const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : "swift"
}

for(const key in myObj){
    // console.log(key , "--->" , myObj[key])
}

const map = new Map()
map.set('IN',"India");
map.set('USA',"United States")
map.set('FR',"France")

// console.log(map);
// for(const [key,value] in map){
//     console.log(key , ':-', value);
// }

//map doesn't support this iteration

let arr = [2,3,4,'a','b','c'];

for(let items of arr){
    console.log(items+" " );
}