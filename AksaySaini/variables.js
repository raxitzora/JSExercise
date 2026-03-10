// //
// var a = 10;
// console.log(a);



// if (true) {
//   var x = 10;
// }

// console.log(x);



// var a = 10;
// var a = 20;

// console.log(a);



// console.log(a);
// var a = 5;


// var a = 10;

// console.log(window.a);

// for(var i = 0;i<=3;i++){
//     setTimeout(()=>console.log(i),100)
// }

// for (var i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i);

// let x = 10;

// {
//   let x = 20;
//   console.log(x);
// }

// console.log(x);

// let user = "Rax";
// function test(){
//     let user = "Admin";
//     console.log(user);
// }
// test()
// console.log(user);


// let a = 10;

// {
//     let a = 20;
//     console.log(a);
// }

// console.log(a);


let x = 1;

function test() {
  let x = 2;

  function inner() {
    let x = 3;
    console.log(x);
  }

  inner();
}

test();