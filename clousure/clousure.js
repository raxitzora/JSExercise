function outer(){
    let counter = 0
    return function(){
        counter++
        return counter
    }
}

let incre= outer()
console.log(incre());
