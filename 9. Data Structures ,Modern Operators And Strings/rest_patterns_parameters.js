"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  opeingHours: {
    thu: {
      open: 12,
      close: 22
    },
    fri: {
      open: 11,
      close: 23
    },
    sat: {
      open: 0,
      close: 24
    }
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

//  SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu
];

console.log(pizza, risotto, otherFood);

// todo: Objects

const { sat, ...weekdays } = restaurant.opeingHours;
console.log(weekdays);

//todo:  2. Functions
const add = function (...numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("Mushrooms", "Spinach", "Olives", "Cheese");

restaurant.orderPizza("Mushrooms");

restaurant.numGuests = 0;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("Hello" && 23 && null && "Jonas");

console.log("The Nullish Coalesing Operator");

restaurant.numGuests = 0;
const guests3 = restaurant.numGuests || 10;
console.log(guests3);

// todo: Nullish : null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log("Logical Assignment Operators");

const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi"
};

//  OR Assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//  nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner = rest1.owner && "<ANONYMOUS>";
rest2.owner = rest2.owner && "<ANONYMOUS>";

rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
