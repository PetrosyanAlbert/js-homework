
 //OBJECT

// function Account (accountHolder, accountNumber, balance = 0){
//     return {
//         accountHolder: accountHolder,
//         accountNumber: accountNumber,
//         balance: balance,
//         deposit: function(amount){
//             if(amount <= 0){
//                 console.log("Amount must be positive");
//             }else{
//                 this.balance += amount;
//                 console.log(`Your balance: ${this.balance}`);
//             }
//         },
//         withdraw: function(amount){
//             if(amount > this.balance){
//                 console.log("Can't");
//             }else{
//                 this.balance -= amount;
//                 console.log(`Your balnce ${this.balance}`);
//             }
//         },
//         getBalance: function(){
//             return this.balance;
//         }
//     }
// }

// function Bank(){
//     return {
//         accounts: [],

//         addAccount: function(account){
//             this.accounts.push(account);
//             console.log("Hashivy avelacvac e");
//         },
        
//         findAccount: function(accountNumber){
//             for(let i = 0; i < this.accounts.length; ++i){
//                 if(this.accounts[i].accountNumber === accountNumber){
//                     return this.accounts[i];
//                 }
//             }
//             return null;
//         },

//         getTotalBalance: function(){
//             let total = 0;
//             for(let i = 0; i < this.accounts.length; ++i){
//                 total += this.accounts[i].getBalance();
//             }
//             return total;
//         }
//     };
// }

// let acc1 = Account("John", 1234);
// let acc2 = Account("Mary", 5678);

// acc1.deposit(1000);
// acc1.withdraw(500);
// acc2.deposit(300);

// let myBank = Bank();
// myBank.addAccount(acc1);
// myBank.addAccount(acc2);

// console.log("Общий баланс:", myBank.getTotalBalance()); 
// console.log("Поиск счёта:", myBank.findAccount(1234));   




//CONSTRUCTOR FUNCTION


// function Account(accountHolder, accountNumber, balance = 0){
//     this.accountHolder = accountHolder;
//     this.accountNumber = accountNumber;
//     this.balance = balance;

//     this.deposit = function(amount) {
//         if (amount <= 0) {
//             console.log("Amount must be positive");
//         } else {
//             this.balance += amount;
//             console.log(`Your balance: ${this.balance}`);
//         }
//     }

//     this.withdraw = function(amount){
//         if (amount > this.balance) {
//             console.log("Can't");
//         } else {
//             this.balance -= amount;
//             console.log(`Your balance: ${this.balance}`);
//         }
//     }

//     this.getBalance = function() {
//         return this.balance;
//     }
// }


// let myAcc = new Account("John", "1324");
// myAcc.deposit(100);
// myAcc.withdraw(50);
// console.log(myAcc.getBalance());

// function Bank() {
//     this.accounts = [];

//     this.addAccount = function(account){
//         this.accounts.push(account);
//     }

//     this.findAccount = function(accountNumber){
//         for(let i = 0; i < this.accounts.length; ++i){
//                  if(this.accounts[i].accountNumber === accountNumber){
//                      return this.accounts[i];
//                  }
//              }
//              return null;
//     }
//     this.getTotalBalance = function(){
//         let total = 0;
//              for(let i = 0; i < this.accounts.length; ++i){
//                  total += this.accounts[i].getBalance();
//              }
//              return total;
//     }
    
// }

// let myBank = new Bank;

// myBank.addAccount(myAcc);
// console.log(myBank.getTotalBalance());

//Class

// class Account {
//     #balance;
//   constructor(accountHolder, accountNumber, balance = 0) {
//     this.accountHolder = accountHolder;
//     this.accountNumber = accountNumber;
//     this.#balance = balance;
//   }

//   deposit(amount) {
//     if (amount <= 0) {
//       console.log("Amount must be positive");
//     } else {
//       this.#balance += amount;
//       console.log(`Your balance: ${this.#balance}`);
//     }
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       console.log("Can't");
//     } else {
//       this.#balance -= amount;
//       console.log(`Your balance: ${this.balance}`);
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }


// const myAccount = new Account("John Doe", 12345, 100);

// myAccount.deposit(50);    
// myAccount.withdraw(30);
// myAccount.withdraw(200);  

// console.log(myAccount.getBalance()); 



// class Bank {
//   constructor() {
//     this.accounts = [];
//   }

//   addAccount(account) {
//     this.accounts.push(account);
//     console.log(`Account ${account.accountNumber} added.`);
//   }

//   findAccount(accountNumber) {
//     for (let i = 0; i < this.accounts.length; i++) {
//       if (this.accounts[i].accountNumber === accountNumber) {
//         return this.accounts[i];
//       }
//     }
//     return null;
//   }

//   getTotalBalance() {
//     let total = 0;
//     for (let i = 0; i < this.accounts.length; i++) {
//       total += this.accounts[i].getBalance();
//     }
//     return total;
//   }
// }

// const bank = new Bank();

// bank.addAccount(myAccount);
// console.log(bank.getTotalBalance());