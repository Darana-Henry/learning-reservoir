const names = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "David Wilson",
  "Eve Davis",
];
const transactions = [100, -50, 100, -70, 100, 100, -200, -40, 150];

// sort Method:
// The sort() method sorts the elements of an array in place and returns the sorted array.
// By default, it sorts strings alphabetically.
// For names, this sorts the array alphabetically based on the first name.
// The result may vary based on the implementation of JavaScript engines.

console.log("--------------------------");
console.log("Sort Method");
console.log("--------------------------");
console.log("Sorted Names » " + names.sort());
console.log("Sorted Asc Transactions » " + transactions.sort((a, b) => a - b));
console.log("Sorted Desc Transactions » " + transactions.sort((a, b) => b - a));
