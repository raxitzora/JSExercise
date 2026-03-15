function makePizza(callback) {
  console.log("Pizza ban raha hai...");
  callback(); 
}

function ready() {
  console.log("Pizza ready hai!");
}

makePizza(ready);