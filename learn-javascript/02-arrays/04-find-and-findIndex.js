const transactions = [100, -50, 100, -70, 100, 100, -200, -40, 150];

console.log("--------------------------");
console.log("Find Method");
console.log("--------------------------");

const firstWithdrawal = transactions.find((transaction) => transaction < 0);
const firstDeposit = transactions.find((transaction) => transaction > 0);
console.log(`First Withdrawal is ${firstWithdrawal}`);
console.log(`First Deposit is ${firstDeposit}`);

console.log("--------------------------");
console.log("Find Index Method");
console.log("--------------------------");

const indexOfFirstWithdrawal = transactions.findIndex(
  (transaction) => transaction < 0
);
const indexOfFirstDeposit = transactions.findIndex(
  (transaction) => transaction > 0
);
console.log(`Index Of First Withdrawal is ${indexOfFirstWithdrawal}`);
console.log(`Index Of First Deposit is ${indexOfFirstDeposit}`);
