// function outer(){
//     const message = "raxit";

//     function inner(){
//         console.log(message);
//     }
//     return inner;
// }

// const dn = outer();
// dn()

// function greet(name){
//     return function(){
//         console.log("Hello"+name);
//     };
// }

// const greeting = greet("raxit")
// greeting();

function outer(){
    let x = 10;

    function inner(){
        console.log(x);
    }
    return inner;
}
const fn = outer();
fn()