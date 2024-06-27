// In JavaScript, call and apply are methods that allow you to invoke a function with a specified this value and arguments.
// Both methods are useful when you want to call a function in a different context than it was defined,
// enabling you to borrow methods from one object and use them on another.

"use strict";
const { faker } = require("@faker-js/faker");

const book = function (seat, name, date) {
  this.bookings.push({
    type: this.class,
    seat: seat,
    name: name,
    date: date,
    airline: `${this.airline}`,
    iataCode: `${this.iataCode}`,
  });
  console.log(this.bookings);
};

const business = {
  class: "business",
  airline: faker.airline.airline().name,
  iataCode: faker.airline.airline().iataCode,
  bookings: [],
};

const economy = {
  class: "economy",
  airline: faker.airline.airline().name,
  iataCode: faker.airline.airline().iataCode,
  bookings: [],
};

const premium = {
  class: "premium",
  airline: faker.airline.airline().name,
  iataCode: faker.airline.airline().iataCode,
  bookings: [],
};

//Call Method
// The call method invokes a function with a given this value and arguments provided individually.

// When to Use call
// Borrowing Methods: If you want to use a method from one object on another object.
// Passing Arguments Individually: When you have a function that requires multiple arguments and you want to pass them one by one.

book.call(
  business,
  faker.airline.seat(),
  faker.person.fullName(),
  faker.date.future()
);
book.call(
  economy,
  faker.airline.seat(),
  faker.person.fullName(),
  faker.date.future()
);
book.call(
  premium,
  faker.airline.seat(),
  faker.person.fullName(),
  faker.date.future()
);

//Apply Method
// The apply method is similar to call, but it takes an array (or array-like object) of arguments instead of a list of arguments.

// When to Use apply
// Using Arrays as Arguments: When you have an array of arguments to pass to a function.
// Function Argument Handling: When dealing with functions that accept a variable number of arguments, and you want to pass an array directly.

const economyFlight = [
  faker.airline.seat(),
  faker.person.fullName(),
  faker.date.future(),
];

const businessFlight = [
  faker.airline.seat(),
  faker.person.fullName(),
  faker.date.future(),
];

const premiumFlight = [
  faker.airline.seat(),
  faker.person.fullName(),
  faker.date.future(),
];

book.apply(business, businessFlight);
book.apply(economy, economyFlight);
book.apply(premium, premiumFlight);

// Summary
// call: Use when you need to invoke a function with a specific this value and arguments passed individually.
// apply: Use when you need to invoke a function with a specific this value and arguments passed as an array.
// Both call and apply are powerful tools for function borrowing and flexible function invocation in different contexts,
// making JavaScript more versatile and dynamic.

// Bind Method
// The bind method is used to create a new function that, when called, has its this keyword set to a specified value,
// with a given sequence of arguments preceding any provided when the new function is called.

// When to Use bind
// Preserving this Context: It is useful when you need to ensure that a function retains a specific this context,
// regardless of how it is called. This is common in event handlers and callbacks.
// Partial Function Application: You can create a new function with some preset arguments,
// leading to a simpler and more readable code, especially in functional programming styles.

const bindedBusiness = book.bind(business);
bindedBusiness(
  faker.airline.seat(),
  faker.person.fullName(),
  faker.date.future()
);

const bindedPremium = book.bind(premium);
bindedPremium(
  faker.airline.seat(),
  faker.person.fullName(),
  faker.date.future()
);

const bindedEconomy = book.bind(economy);
bindedEconomy(
  faker.airline.seat(),
  faker.person.fullName(),
  faker.date.future()
);

const bindedBusinessWithSameSeat = book.bind(business, faker.airline.seat());
bindedBusinessWithSameSeat(faker.person.fullName(), faker.date.future());
