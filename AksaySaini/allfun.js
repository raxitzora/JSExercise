import { loadavg } from "node:os";

const arr = [5,1,3,2,6]

function isOdd(x){
    return x%2;
}


const fil= arr.filter(isOdd)
console.log(fil);
