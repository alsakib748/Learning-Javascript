"use strict";

console.log("-----------Sets----------");

const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza"
]);

console.log(orderSet);

console.log(new Set("Jonas"));

console.log(orderSet.size);

console.log(orderSet.has("Pizza"));

console.log(orderSet.has("Bread"));

orderSet.add("Garlic Bread");

orderSet.add("Garlic Bread");

orderSet.delete("Risotto");

orderSet.clear();

console.log(orderSet[0]);

for (const order of orderSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// console.log(
//   new Set[("Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter")].size()
// );

console.log(new Set("Al Sakib").size);

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basic"
]);

const mexicanFoods = new Set([
  "tartillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic"
]);

const commonFoods = italianFoods.intersection(mexicanFoods);

console.log("Intersection", commonFoods);

console.log([...commonFoods]);

const italianMexicanFusion = italianFoods.union(mexicanFoods);

console.log("Union: ", italianMexicanFusion);

console.log(new Set([...italianFoods, ...mexicanFoods]));

const uniqueItalianFoods = italianFoods.difference(mexicanFoods);

console.log("Difference italian ", uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log("Difference mexica", uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);

console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjoinFrom(mexicanFoods));

// todo: Maps
console.log("--------------Maps--------------");

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);

const arr = [1, 2];
console.log(rest);
console.log(rest.size);
rest.clear();

rest.set([1, 2], "Test");
console.log(rest);
console.log(rest.size);

rest.get(rest.get(arr));

console.log("................Maps Iteraition.................");

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct!"],
  [false, "Try again!"]
]);

console.log(question);

// console.log(Object.entries(openingHours));

//  Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer"));
const answer = 3;
console.log(answer);

console.log(question.get(question.get("correct") === answer));

// todo: Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
