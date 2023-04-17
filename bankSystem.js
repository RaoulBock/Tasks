let accounts = [];

function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
  this.transactions = [];
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.push({ type: "Deposit", amount: amount });
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount <= this.balance) {
    this.balance -= amount;
    this.transactions.push({ type: "Withdraw", amount: amount });
  } else {
    console.log("Insufficient funds.");
  }
};

BankAccount.prototype.viewBalance = function () {
  console.log(`Current balance for ${this.name}: ${this.balance}`);
};

BankAccount.prototype.viewTransactions = function () {
  console.log(`Transaction history for ${this.name}`);
  for (let i = 0; i < this.transactions.length; i++) {
    let transaction = this.transactions[i];
    console.log(`${transaction.type} of ${transaction.amount}`);
  }
};

function createAccount() {
  let name = prompt("Enter your name");
  let balance = parseFloat(prompt("Enther your initial balance: "));
  let account = new BankAccount(name, balance);

  accounts.push(account);
}

function deposit() {
  let name = prompt("Enter your name");
  let amount = parseFloat(prompt("Enter amount to deposit: "));
  let account = findAccount(name);
  if (account) {
    account.deposit(amount);
  } else {
    console.log("Account not found.");
  }
}

function withdraw() {
  let name = prompt("Enter your name");
  let amount = parseFloat(prompt("Enter amount to withdraw"));
  let account = findAccount(name);
  if (account) {
    account.withdraw(amount);
  } else {
    console.log("Account not found.");
  }
}

function viewBalance() {
  let name = prompt("Enter your name");
  let account = findAccount(name);
  if (account) {
    account.viewBalance();
  } else {
    console.log("Account not found.");
  }
}

function viewTransactions() {
  let name = prompt("Enter your name");
  let account = findAccount(name);

  if (account) {
    account.viewTransactions();
  } else {
    console.log("Account not found.");
  }
}

function findAccount(name) {
  for (let i = 0; i < accounts.length; i++) {
    let account = accounts[i];
    if (account.name === name) {
      return account;
    }
  }

  return null;
}
