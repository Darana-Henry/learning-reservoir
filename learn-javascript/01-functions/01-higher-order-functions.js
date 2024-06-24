// Here’s a section to demonstrate the use of higher-order functions in JavaScript, along with an explanation:

// What Are Higher-Order Functions?
// A higher-order function is a function that either:

// Takes one or more functions as arguments.
// Returns a function as its result.
// By leveraging higher-order functions, you can create more abstract and flexible code structures.
//This capability is particularly useful for tasks such as iteration, asynchronous operations, and event handling.

"use strict";
const { faker } = require("@faker-js/faker");

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const firstUpperWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

const transformer = function (str, fn) {
  console.log("------------------");
  console.log(`Used method: ${fn.name} to transformed.`);
  console.log(`Transformed string: ${fn(str)}`);
};
transformer(faker.lorem.sentence(5), firstUpperWord);
transformer(faker.lorem.sentence(5), oneWord);
