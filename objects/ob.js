const tinder = {
        
}

tinder.name = "he";
tinder.id = 5;
tinder.isLoggedin = false

const regulerUser = {
    name:"r@email.com",
    fullname:{
        userfullname:{
            firstname:"Hitesh",
            lastname:"chaudhray"
        }
    }
}


// console.log(regulerUser.fullname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

const obj3 = {...obj1,...obj2}
// console.log(obj3);
const course = {
    name:"BCA",
    price:123,
    edu:"harivandana"
}

const {edu,name,price} = course

console.log(edu);
