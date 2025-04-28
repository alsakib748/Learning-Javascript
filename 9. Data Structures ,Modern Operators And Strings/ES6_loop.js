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
