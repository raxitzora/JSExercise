// function greet(name){
//     console.log("Hello "+ name);

const { useCallback } = require("react");

    
// }

// function processUser(callback){
//     let name = "raxit"
//     callback(name)
// }

// processUser(greet)







//simple function 
// function a(){
//     console.log("A is here");
// }
// a()


//function with parameters.
// function sum(a,b){
//     console.log(a+b);
// }
// sum(5,5)


// function hello(){
//     console.log("Hello");
// }

// function runFunction(fn){
//     fn()
// }

// runFunction(hello)

// function a(){
//     console.log("a is here");
// }

// function b(){
//     console.log("B is here");
    
// }
// b(a)

function makePizza(callback) {
  console.log("Pizza ban raha hai...");
  callback(); 
}

function ready() {
  console.log("Pizza ready hai!");
}

makePizza(ready);