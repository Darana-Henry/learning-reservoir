const transactions = [100, -50, 100, -70, 100, 100, -200, -40];

console.log("--------------------------");
console.log("For Loop");
console.log("--------------------------");
// Using a for...of loop with entries() method to iterate over the transactions array
for (const [i, transaction] of transactions.entries()) {
  if (transaction > 0) console.log(`${i + 1}. ${transaction} deposited.`);
  else console.log(`${i + 1}. ${Math.abs(transaction)} withdrawn.`);
}

console.log("--------------------------");
console.log("For Each Loop");
console.log("--------------------------");
// Using forEach() method to iterate over the transactions array
transactions.forEach(function (transaction, index, array) {
  if (transaction > 0) console.log(`${index + 1}. ${transaction} deposited.`);
  else console.log(`${index + 1}. ${Math.abs(transaction)} withdrawn.`);
});

const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["JPY", "Japanese Yen"],
  ["GBP", "British Pound Sterling"],
  ["AUD", "Australian Dollar"],
  ["CAD", "Canadian Dollar"],
  ["CHF", "Swiss Franc"],
  ["CNY", "Chinese Yuan"],
  ["SEK", "Swedish Krona"],
  ["NZD", "New Zealand Dollar"],
]);

console.log("--------------------------");
console.log("For Each Loop => Currencies");
console.log("--------------------------");
// Using forEach() method to iterate over the currencies Map
currencies.forEach(function (value, key, map) {
  console.log(`${key} is ${value}`);
});
