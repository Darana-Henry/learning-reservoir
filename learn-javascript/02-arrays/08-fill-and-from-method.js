const { faker } = require("@faker-js/faker");

// fill Method:
// fill(value, start, end)
// The fill() method modifies all elements in an array to a static value,
// from a start index (default 0) to an end index (default array length).
// It returns the modified array.

// Usage:
// arr.fill(value): Fills the entire array with value.
// arr.fill(value, start): Fills the array with value starting from start index to the end of the array.
// arr.fill(value, start, end): Fills the array with value from start index up to but not including end index.

console.log("--------------------------");
console.log("Fill Method");
console.log("--------------------------");

// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array length).
// It returns the modified array.
let size = faker.number.int({ min: 7, max: 10 });
const arr1 = new Array(size);

let randomNum = faker.number.int({ min: 0, max: 100 });
arr1.fill(randomNum);
console.log(arr1);

console.log("--------------------------");

// This fills the array arr2 with randomNum starting from randomIndex to the end of the array.
size = faker.number.int({ min: 7, max: 10 });
const arr2 = new Array(size);
randomNum = faker.number.int({ min: 0, max: 100 });
let randomIndex = faker.number.int({ min: 0, max: size });
arr2.fill(randomNum, randomIndex);
console.log(arr2);

console.log("--------------------------");

//This fills the array arr3 with randomNum starting from startIndex up to but not including endIndex.
size = faker.number.int({ min: 7, max: 10 });
const arr3 = new Array(size);
randomNum = faker.number.int({ min: 0, max: 100 });
let startIndex = faker.number.int({ min: 0, max: size });
let endIndex = faker.number.int({ min: startIndex + 1, max: size });
arr3.fill(randomNum, startIndex, endIndex);
console.log(arr3);

// from Method:
// Array.from(arrayLike, mapFn, thisArg)
// The from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
// It can take a map function as the second argument, which is called on every element of the array,
// and an optional thisArg to use as this when executing the map function.

// Usage:
// Array.from(arrayLike): Converts an array-like or iterable object into an array.
// Array.from(arrayLike, mapFn): Maps each element of the array-like object using mapFn and returns a new array.
// Array.from(arrayLike, mapFn, thisArg): Maps each element of the array-like object
//using mapFn with thisArg as this value in the function and returns a new array.

console.log("--------------------------");
console.log("From Method");
console.log("--------------------------");

// The from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
// It can also take a map function as the second argument, which is called on every element of the array.
size = faker.number.int({ min: 7, max: 10 });
randomNum = faker.number.int({ min: 0, max: 100 });
const arr4 = Array.from({ length: size }, () => randomNum);
console.log(arr4);

console.log("--------------------------");

// This creates an array of length size where each element is the index i incremented by a random number.
// The array arr5 will have elements starting from i plus a random number, resulting in an array of sequential increments.
size = faker.number.int({ min: 7, max: 10 });
const arr5 = Array.from(
  { length: size },
  (_, i) => i + faker.number.int({ min: 0, max: 100 })
);
console.log(arr5);
