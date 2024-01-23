function BankAccount(name, balance = 0) {
  this.name = name;
  this.AccountNum = Date.now();
  this.balance = balance;

  this.deposite = function (amount) {
    this.balance += amount;
  }
  this.withdraw = (amount) => {
    this.balance -= amount;
  }
}
const omprakashAcoount = new BankAccount("omprakash", 1000);
const prakashAccount = new BankAccount("prakash");
omprakashAcoount.balance = 200000;
omprakashAcoount.withdraw(70000);

console.log(omprakashAcoount);
console.log(prakashAccount);
