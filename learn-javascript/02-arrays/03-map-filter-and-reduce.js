const transactions = [100, -50, 100, -70, 100, 100, -200, -40];
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
