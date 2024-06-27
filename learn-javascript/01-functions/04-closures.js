"use strict";
const { faker } = require("@faker-js/faker");

// Section 1: Secure Booking
// This section demonstrates a basic closure in JavaScript.
// The secureBooking function creates a closure that maintains a private passengers variable.
// Each time the returned inner function is called, it increments the passengers variable and logs the updated count.
// This showcases how closures can retain state between function calls.

const secureBooking = function () {
  let passengers = 0;

  return function () {
    passengers++;
    console.log(`${passengers} passengers`);
  };
};

const book = secureBooking();

book();
book();
book();

// Section 2: Random Number and Alphanumeric Generation
// This section illustrates closures by generating random values and storing them in an outer function.
// The randomNumber function generates a random numeric string and assigns a function to outer that logs this random value.
// The randomAlphaNumeric function does the same but generates an alphanumeric string.
// These examples highlight how closures can capture and retain local variables even after the outer function has executed.

let outer;

const randomNumber = function () {
  let random = faker.string.numeric(5);
  outer = function () {
    console.log(`random is ${random}`);
  };
};

randomNumber();
outer();

const randomAlphaNumeric = function () {
  let alphanumeric = faker.string.alphanumeric(5);
  outer = function () {
    console.log(`alphanumeric is ${alphanumeric}`);
  };
};

randomAlphaNumeric();
outer();

// Section 3: Passenger Boarding Simulation
// This section uses closures and setTimeout to simulate a passenger boarding process.
// The passengers function calculates the number of groups based on a random passenger count and group size.
// It then schedules a delayed message indicating the start of the boarding process and logs the total number of passengers and groups.
// This example demonstrates how closures can be used to manage state and execute delayed actions,
// maintaining access to the function's variables even after a delay.

const passengers = function (passengerCount, boardingTime) {
  let groups = Math.round(
    passengerCount / faker.number.int({ min: 2, max: 4 })
  );

  setTimeout(function () {
    console.log(`Boarding has started for all ${passengerCount} passengers`);
    console.log(`All ${groups} groups have boarded!`);
  }, boardingTime * 1000);

  console.log(`Boarding with start in ${boardingTime} seconds`);
};

passengers(
  faker.number.int({ min: 10, max: 100 }),
  faker.number.int({ min: 1, max: 5 })
);
