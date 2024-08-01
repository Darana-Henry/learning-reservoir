// Conversion
console.log(+"27"); // Converts the string "27" to the number 27

// Parsing
console.log(Number.parseInt("37px")); // Extracts the integer 37 from the string "37px"
console.log(Number.parseFloat("2.5rem")); // Extracts the floating-point number 2.5 from the string "2.5rem"
console.log(Number.isNaN("Who is this")); // Checks if the value is NaN (Not-a-Number), returns false since the input is a string
console.log(Number.isFinite(+"32")); // Checks if the value is a finite number, returns true since "32" is converted to 32

// Math operations
console.log(Math.max()); // Returns the largest of zero or more numbers
console.log(Math.min()); // Returns the smallest of zero or more numbers
console.log(Math.random()); // Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.sqrt(16)); // Returns the square root of a number, for example, 4 for 16
console.log(Math.round(4.5)); // Rounds a number to the nearest integer, for example, 5 for 4.5
console.log(Math.trunc(4.9)); // Truncates the decimal part, returning the integer part only, for example, 4 for 4.9
console.log(Math.ceil(4.2)); // Rounds a number up to the next largest integer, for example, 5 for 4.2
console.log(Math.floor(4.7)); // Rounds a number down to the next smallest integer, for example, 4 for 4.7

console.log(Math.PI); // Outputs the value of PI (3.141592653589793)

// Rounding
console.log((2.7).toFixed(1)); // Rounds the number to 1 decimal place, outputting "2.7"
console.log((2.7).toFixed(3)); // Rounds the number to 3 decimal places, outputting "2.700"
console.log((2.173).toFixed(2)); // Rounds the number to 2 decimal places, outputting "2.17"
