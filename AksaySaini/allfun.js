
// const arr = [5,1,2,33,2,6]

import { it } from "node:test";



// const output = arr.reduce((acc,curr)=>{
//     if(curr>acc){
//         acc = curr;
//     }
//     return acc
// },0)

// console.log(output);


// function maxValue(arr){
//     let max = 0;
//     for(let i =0;i<=arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(maxValue(arr));




// const s = arr.filter((t)=>
//      t>4)

// console.log(s);


// const out = arr.reduce(function(acc,current){
//     acc = acc+current;
//     return acc;
// },0)
// console.log(out);


const users = [
  { firstname: "Raxit", lastname: "Zora", age: 24 },
  { firstname: "Amit", lastname: "Shah", age: 35 },
  { firstname: "Priya", lastname: "Patel", age: 28 },
  { firstname: "Neha", lastname: "Joshi", age: 24 }
];

// const less_age = users.filter((x)=>x.age<30).map((x)=>x.firstname)

const less_age = users.filter((x)=>{
    return x.age<30
}).map((x)=>{
    return x.firstname
})

console.log(less_age);




//list of age





//list of full name

// const fullname = users.map(i=>i.firstname.concat(i.lastname))
// console.log(fullname);
