"use strict";
const { faker } = require("@faker-js/faker");

const flight = faker.airline.airline().name;
console.log(flight);
