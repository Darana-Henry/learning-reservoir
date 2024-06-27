"use strict";
const { faker } = require("@faker-js/faker");

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};

const namedGreet = greet("Hello");
namedGreet(faker.person.firstName("female"));
greet("Hello")(faker.person.firstName("male"));

const proGreet = (jobTitle) => (name) => console.log(`${jobTitle} ${name}!`);
proGreet(faker.person.jobTitle())(faker.person.firstName("male"));
