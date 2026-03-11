// var x = 1;
// a();
// b();
// console.log(x);

// function a(){
//     var x = 10;
//     console.log(x);
    
// }

// function b(){
//     var x = 100;
//     console.log(x);
    
// }


function loginUser(username,password){
    if(!username || !password){
        return "Please fill all fields"
    }
    return `Your username is ${username} and your password is ${password}`
}


console.log(loginUser("raxit","asd"));

