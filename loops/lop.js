// let countdown = []
// let i =5;

// while(i>=0){
//     countdown.push(i);
//     i--
// }
// console.log(countdown);


// let arr = [2,4,6];
// let multipliedNumbers = [];


// for(let i =0;i<arr.length;i++){
//     let multiplied = arr[i] * 2;
//     multipliedNumbers.push(multiplied)
// }
// console.log(multipliedNumbers);

// let cities = ["Paris","NewYork","Tokyo","London"]
// let cityList = [];

// for(let i =0;i<cities.length;i++){
//     cityList.push(cities[i])
// }
// console.log(cityList);


// let arr = ["greentea","blacktea","chai","oolongtea"]
// let selectedTeas = []
// for(let i =0;i<arr.length;i++){
//     if(arr[i]==="chai") {
//         break;
//     }
//     selectedTeas.push(arr[i])
// }
// console.log(selectedTeas);


// let arr = ["London","NewYork","Paris","Berlin"]
// let visitedCities = []

// for(let i =0;i<arr.length;i++){
//     if(arr[i]==="Paris"){
//         continue;
//     }
//     visitedCities.push(arr[i])
// }
// console.log(visitedCities);

// let arr = [1,2,3,4,5];
// let smallNumber = [];
// for (const i of arr) {
//     if (i===4){
//         continue;
//     }
//     smallNumber.push(i)
// }
// console.log(smallNumber);



// let arr = ["chai","greentea","herbaltea","blacktea"]
// let prefferedTea = []
// for(const i of arr){
//     if(i==="herbaltea"){
//         continue;
//     }
//     prefferedTea.push(i)
// }
// console.log(prefferedTea);

// let citiesPopulation = {
//     "London":8900000,
//     "NewYork":8400000,
//     "Paris":2200000,
//     "Berlin":3500000
// }
// let citiesNewPopulations = {}
// for (const city in citiesPopulation) {
//     if(city==="Berlin"){
//         break
//     }
//     citiesNewPopulations[city] = citiesPopulation[city]
// }
// console.log(citiesNewPopulations);

// let arr = ["earlgrey","greentea","chai","oolongtea"]
// let availabletea = []
// arr.forEach(function(tea){
//     if(tea ==="chai"){
//         return;
//     }
//     availabletea.push(tea)
// })
// console.log(availabletea);



// let arr = ["berlin","tokyo","sydney","paris"]
// let traveledCities = []
// arr.forEach((cities)=>{
//     if(cities ==="sydney"){
//         return
//     }
//     traveledCities.push(cities)
// })
// console.log(traveledCities);

// let number = [2,5,7,9]
// let doubleNumbers = []

// for(let i=0;i<number.length;i++){
//     if(number[i]===7){
//         continue;
//     }
//     let multiplied = number[i] * 2
//     doubleNumbers.push(multiplied)
// }
// console.log(doubleNumbers);


let teas = ["chai","greentea","blacktea","jasminetea","herbaltea"]
let shortTeas = []

for (const i of teas) {
    if(i.length>=10){
        continue;
    }
    shortTeas.push(i)
    console.log(i);

}
