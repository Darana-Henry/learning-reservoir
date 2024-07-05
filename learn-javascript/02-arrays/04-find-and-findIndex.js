const transactions = [100, -50, 100, -70, 100, 100, -200, -40, 150];

// find Method:
// The find() method returns the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.

console.log("--------------------------");
console.log("Find Method");
console.log("--------------------------");

const firstWithdrawal = transactions.find((transaction) => transaction < 0);
const firstDeposit = transactions.find((transaction) => transaction > 0);
console.log(`First Withdrawal is ${firstWithdrawal}`);
console.log(`First Deposit is ${firstDeposit}`);

// findIndex Method:
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.
// For the transactions array, this will find the index of the first transaction that is a withdrawal.
// The result here is 1.

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
