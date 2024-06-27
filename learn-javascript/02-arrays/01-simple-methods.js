let arr = ["a", "b", "c", "d", "e"];

// slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));

//splice
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

//reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

//concate
const letter = arr.concat(arr2);
console.log(letter);

//join
console.log(letter.join(" | "));
