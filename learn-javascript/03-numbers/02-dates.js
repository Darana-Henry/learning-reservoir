const { faker } = require("@faker-js/faker");

//Creating Dates
const now = new Date();
console.log(now);

console.log(new Date("Sep 30 2004 12:00:01"));
console.log(new Date("December 18, 2012"));
console.log(new Date(2030, 11, 21, 9, 45, 21));

//Working with Dates
const future = faker.date.future();
console.log(`future is ⋙ ${future}`);
console.log(`future.getFullYear() is ⋙  ${future.getFullYear()}`);
console.log(`future.getMonth() is ⋙  ${future.getMonth()}`);
console.log(`future.getDate() is ⋙  ${future.getDate()}`);
console.log(`future.getDay() is ⋙  ${future.getDay()}`);
console.log(`future.getHours()) is ⋙  ${future.getHours()}`);
console.log(`future.getMinutes() is ⋙  ${future.getMinutes()}`);
console.log(`future.getSeconds() is ⋙  ${future.getSeconds()}`);
console.log(`future.toISOString() is ⋙  ${future.toISOString()}`);
console.log(`future.getTime() is ⋙  ${future.getTime()}`);

console.log(Date.now());

future.setFullYear(faker.date.future({ years: 10 }).getFullYear);
console.log(`future is ⋙  ${future}`);
