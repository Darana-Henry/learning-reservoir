const transactions = [100, -50, 100, -70, 100, 100, -200, -40, 150];
const rateUSD2INR = 83.36;

console.log("--------------------------");
console.log("Map Method");
console.log("--------------------------");
// Map Method using function expression:
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const transactionsINR = transactions.map(function (transaction) {
  return Math.round(transaction * rateUSD2INR);
});

console.log(`All your transactions in ${transactionsINR}`);

console.log("--------------------------");
const transactionsINRWithArrow = transactions.map((transaction) =>
  Math.round(transaction * rateUSD2INR)
);
console.log(`All your transactions in ${transactionsINRWithArrow}`);

console.log("--------------------------");
const detailedTransactions = transactions.map((transaction, index) => {
  return `${index + 1}. ${Math.abs(transaction)} ${
    transaction > 0 ? "deposited" : "withdrawn"
  }.`;
});

console.log(detailedTransactions);

console.log("--------------------------");
console.log("Filter Method");
console.log("--------------------------");
//Filter Method

const deposits = transactions.filter(function (transaction) {
  return transaction > 0;
});

console.log(`All the deposits ${deposits}`);

const withdrawls = transactions.filter(function (transaction) {
  return transaction < 0;
});

console.log(`All the withdrawls ${withdrawls}`);

console.log("--------------------------");
console.log("Reduce Method");
console.log("--------------------------");
//Reduce Method

const balance = transactions.reduce(function (
  total,
  transaction,
  index,
  transactions
) {
  return total + transaction;
},
0);

console.log(`Your balance is: ${balance}`);

const largestDeposit = transactions.reduce(function (
  total,
  transaction,
  index,
  transactions
) {
  return total > transaction ? total : transaction;
  a;
},
0);

console.log(`Your largest deposit is: ${largestDeposit}`);

const largestWithdrawal = transactions.reduce(function (
  total,
  transaction,
  index,
  transactions
) {
  return total < transaction ? total : transaction;
  a;
},
0);

console.log(`Your largest withdrawal is: ${largestWithdrawal}`);

console.log("--------------------------");
console.log("Method Chaining");
console.log("--------------------------");

const depositsInINR = transactions
  .filter((transaction) => transaction > 0)
  .map((transaction) => transaction * rateUSD2INR)
  .reduce((deposited, transaction) => deposited + transaction, 0);

console.log(`Your deposit total is: ${depositsInINR}`);
