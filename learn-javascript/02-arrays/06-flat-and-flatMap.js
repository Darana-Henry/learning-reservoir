const singleLevel = [1, [2, 3, 4], 5, [6, 7, 8], 9];
const multiLevel = [1, [2, [3, 4]], 5, [6, [7, 8]], 9];
const forFlatMap = [
  [1, 2],
  [3, 4],
  [5, 6],
  1,
  [2, 3],
  4,
  [5, 6],
  [1, 2],
  [],
  [3, 4],
  [],
  [5, 6],
  "hello",
  [1, 2, 3],
  "world",
  [4, 5, 6],
  1,
  [2, [3, 4]],
  5,
];

// flat Method:
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// For multiLevel, which contains nested arrays up to two levels deep,
//flat(1) will concatenate only the first level of sub-arrays into the parent array.

console.log("--------------------------");
console.log("Flat Method");
console.log("--------------------------");
console.log("Flat » " + singleLevel.flat());
console.log("One Level Flat » " + multiLevel.flat(1));
console.log("Two Level Flat » " + multiLevel.flat(2));

// flatMap Method:
// The flatMap() method first maps each element using a mapping function, then flattens the result into a new array.
// This is often useful for manipulating and flattening data in a single pass.
// For forFlatMap, it will apply the provided mapping function to each element, which in this case is just returning the element itself.
// After mapping, it flattens the array by one.

console.log("--------------------------");
console.log("Flat Map Method");
console.log("--------------------------");
console.log("Flat Mapped » " + forFlatMap.flatMap((data) => data));
