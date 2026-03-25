import { loadavg } from "node:os";

const arr = [5,1,3,2,6]


const s = arr.filter((t)=>{
    return t%2
})

console.log(s);

