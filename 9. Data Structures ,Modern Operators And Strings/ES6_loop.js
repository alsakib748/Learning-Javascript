"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const hours = {
  [weekdays[3]]: {
    open: 12,
    close: 22
  },
  [weekdays[4]]: {
    open: 11,
    close: 23
  },
  [`day-${2 + 4}`]: {
    open: 0,
    close: 24
  }
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //   ES6 enhanced objet literals
  hours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery(obj) {
    console.log(obj);
  }
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// todo: For Of loop
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  //   console.log(item);
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);

console.log("-----------Optional Chaining----------");

if (restaurant.hours && restaurant.hours.thu)
  console.log(restaurant.hours.thu.open);

// With Optional Chaining
console.log(restaurant.hours.fri?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.hours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
// const users = [{ name: "Jonas", email: "hello@jonas.io" }];

const users = [];

console.log(users[0]?.name ?? "User array empty");

console.log(
  "-----------Looping Objects Object Keys, Values, and Entries----------"
);

const properties = Object.keys(hours);
console.log(properties);

let openStr = `We are open on ${properties.length} days `;

for (const day of properties) {
  openStr += `${day},`;
}

console.log(openStr);

// Property Values
const values = Object.values(hours);
console.log(values);

// Entire Object
const entries = Object.entries(hours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
