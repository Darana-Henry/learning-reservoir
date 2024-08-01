const { faker } = require("@faker-js/faker");

// Generate a random dog name immediately
const dog = faker.animal.dog();
console.log(`From console log: ${faker.animal.dog()}`);

// Generate a random dog name after a 2-second delay
setTimeout(() => console.log(`From setTimeout: ${faker.animal.dog()}`), 2000);

// Generate a random person's full name and phone number
const fullName = faker.person.fullName();
const phoneNumber = faker.phone.number();

// Print a message with the name and phone number after a 4-second delay
setTimeout(
  (name, num) => console.log(`Please call ${name}, this is his number ${num}`),
  4000,
  fullName,
  phoneNumber
);

// Generate a random number for time delay (up to 5000 milliseconds) and a random lucky number (up to 10)
const time = faker.number.int(5000);
const lucky = faker.number.int(10);

// Set a timeout to print the lucky number after the specified time delay
const timer = setTimeout(
  () => console.log(`The lucky number is ${lucky}`),
  time
);

// If the lucky number is 6, cancel the timeout and print a cancellation message
if (lucky === 6) {
  clearTimeout(timer);
  console.log(`Timeout cancelled since number is ${lucky}`);
}

// Set an interval to print a random person's full name every random time interval (up to 5000 milliseconds)
setInterval(
  () => console.log(`Interval Name: ${faker.person.fullName()}`),
  faker.number.int(5000)
);
