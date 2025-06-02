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

console.log("-----------------Strings------------------");

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log("B737"[0]);

console.log(airline.length);

console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3B");

console.log(new String("Sakib"));
console.log(typeof new String("Sakib"));
console.log(typeof new String("Sakib").slice(1));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = "jOnAs";

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

// Comparing email
const email = "hello@jonas.io";

const loginEmail = " Hello@Jonas.Io \n";

const lowerEmail = loginEmail.toLowerCase();

const trimmedEmail = lowerEmail.trim();

console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(email === normalizedEmail);

// todo: Replacing

const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");

console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane2 = "Airbus A320neo";
console.log(plane2.includes("A320"));
console.log(plane2.includes("Boeing"));
console.log(plane2.startsWith("Air"));

if (plane2.startsWith("Air") && plane2.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// split and join
console.log("a+very+nice+string".split("+"));
console.log("Al Sakib".split(" "));

const [firstName, lastName] = "Al Sakib".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpeer.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("Jessica and Smit Devis");
capitalizeName("Al Sakib");

// todo: Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+"));

const maskCreditCard = function (number) {
  const str = number + " ";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(4944984));
console.log(maskCreditCard(23456787793847574));
console.log(maskCreditCard(23454563546663634234));

// Repeat
const message2 = "Bad weather... All Departures Delayed... ";

console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
