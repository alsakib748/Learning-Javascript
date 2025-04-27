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
    (starterIndex = 1),
      (mainIndex = 0),
      (time = "22:30"),
      (address = "Via del Sole, 21");
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  }
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr = [1, 2, ...arr];

console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// todo: Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// todo: Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

// todo: Iterables: arrays, strings, maps, sets. Not objects

const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Sakib`);

const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt("Ingredient 2?"),
  //   prompt("Ingredient 3?")
];

console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
//  todo: Instead of above we can use spread operator to pass the array as arguments
restaurant.orderPasta(...ingredients);

// todo: objects

const newRestaurant = { ...restaurant, founder: "Guiseppe", foundedIn: 1998 };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
