let arr = ["a", "b", "c", "d", "e"];

// slice() method:
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));

// splice() method:
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

// reverse() method:
// The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

// concat() method:
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays but instead returns a new array.
const letter = arr.concat(arr2);
console.log(letter);

// join() method:
// The join() method joins all elements of an array into a string and returns this string. You can specify a separator string to be placed between each pair of adjacent elements.
console.log(letter.join(" | "));

// at() method:
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
console.log(arr.at(Math.floor(Math.random() * arr.length)));
console.log(arr.at(-1));
