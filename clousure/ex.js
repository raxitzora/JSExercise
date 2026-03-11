// function outer(){
//     const message = "raxit";

//     function inner(){
//         console.log(message);
//     }
//     return inner;
// }

// const dn = outer();
// dn()

function greet(name){
    return function(){
        console.log("Hello"+name);
    };
}

const greeting = greet("raxit")
greeting();
