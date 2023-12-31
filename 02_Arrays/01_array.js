const marvel_heros = ['ironman', 'thor', 'ant-man'];
const dc_heros = ['superman','batman','flash'];
const all_heros = [...marvel_heros,...dc_heros];
// console.log(all_heros);

const another_array = [1,2,[4,5,6,[2,3,4]],8,9,0,-1];
const new_another_arr = another_array.flat(2);
// console.log(new_another_arr);

// console.log(Array.from({name:"123"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
