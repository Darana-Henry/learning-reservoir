const { faker } = require("@faker-js/faker");

// Function to calculate the number of days passed between two dates
const calcDaysPassed = (date1, date2) =>
  Math.round((date1 - date2) / (1000 * 60 * 60 * 24), 0);

// Print the number of days passed between a future date and a past date
console.log(
  `${calcDaysPassed(faker.date.future(), faker.date.past())} days passed`
);

// Generate a random integer
const num = faker.number.int();

// Define options for formatting the number as a temperature in Celsius
const options = { style: "unit", unit: "celsius" };

// Format the number according to different locales
let locale = "en-US";
console.log(locale, new Intl.NumberFormat(locale, options).format(num));
locale = "en-IN";
console.log(locale, new Intl.NumberFormat(locale, options).format(num));
