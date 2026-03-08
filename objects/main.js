class BankAccount {
    constructor(balance) {
        this.balance = balance
    }

    deposit(){
        console.log("Deposit balance",this.balance);
    }
}

const b1 = new BankAccount(5000);
b1.deposit()

