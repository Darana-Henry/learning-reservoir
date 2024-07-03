const transactions = [100, -50, 100, -70, 100, 100, -200, -40, 150];

console.log("--------------------------");
console.log("Some Method");
console.log("--------------------------");

const anyDeposits = transactions.some((transaction) => transaction > 0);
const anyDepositsOver100 = transactions.some(
  (transaction) => transaction > 100
);
const anyWithdrawalsOver100 = transactions.some(
  (transaction) => transaction < 100
);

console.log(`Have any deposits happen? - ${anyDeposits}`);
console.log(`Have any deposits over $100 happen? - ${anyDepositsOver100}`);
console.log(
  `Have any withdrawals over $100 happen? - ${anyWithdrawalsOver100}`
);

console.log("--------------------------");
console.log("Every Method");
console.log("--------------------------");

let areAllTransactionsDeposits = transactions.every(
  (transaction) => transaction > 0
);
console.log(`Are All Transactions Deposits? - ${areAllTransactionsDeposits}`);

areAllTransactionsDeposits = transactions
  .filter((transaction) => transaction > 0)
  .every((transaction) => transaction > 0);
console.log(`Are All Transactions Deposits? - ${areAllTransactionsDeposits}`);
