// function outer(){
//     let message = "hello raxit";

//     function inner(){
//         console.log(message);
//     }
//     return inner;
// }
// const fn = outer();
// fn()


// function counter(){
//     let count = 0;

//     return function(){
//         count++;
//         console.log(count);
//     };
// }
// const add = counter();
// add()
// add()


// function x(){
//     var a = 7;
//     function y(){
//         console.log(a);
//     }
//     y();
    
// }
// x();

// function clickHandler(color){

//     return function colorChanger(){
//         console.log(`Color changed ${color}`);
//     }
// }
// const change = clickHandler("red")
// console.log(change);



// function x(){
//     var a= 10;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x()


function outer() {
  let x = 10;



  
  function inner() {
    console.log(x);
  }

  return inner;
}

const fn = outer();
fn();