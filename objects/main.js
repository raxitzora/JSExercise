class CryptoWallet {
    #balance;

    //made constructor
    constructor(balance){
        this.#balance = balance
    }

    deposit(money){
        if(money<=0){
            throw new Error("Negative number !!!")
        }
        this.#balance +=money
    }
    withdraw(money){
        if(money>=this.#balance){
            throw new Error("balance exceed");
        }
        this.#balance -=money
    }

    getBalance(){
        return this.#balance
        
    }
}

const wallet1 = new CryptoWallet(50000);

wallet1.getBalance()
wallet1.deposit(1000)
wallet1.withdraw(2000)

wallet1.getBalance()
