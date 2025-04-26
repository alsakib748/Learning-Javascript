"use strict";

const calAge = function (birthYear) {
  const age = 2025 - birthYear;
  // console.log(age);
  // console.log(this);
};

calAge(2000);

const calAgeArrow = () => {
  const age = 2025 - 1990;
  // console.log(age);
  // console.log(this);
};

calAgeArrow();

const sakib = {
  year: 2000,
  calAge: function () {
    // console.log(this);
    // console.log(2045 - this.year);
  }
};

sakib.calAge();

const matilda = {
  year: 2017
};

matilda.calAge = sakib.calAge;
matilda.calAge();

const f = sakib.calAge;
// f();

var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    // console.log(2037 - this.year);
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();
  }

  // greet: () => {
  //   console.log(this);
  //   // console.log(`Hey ${this.firstName}`);
  // }
};

// jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  // console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"]
};

// todo: Shallow Copies
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Davis";

console.log(jessicaCopy, jessica);
// jessicaCopy.family.push("Mary");
// jessicaCopy.family.push("John");

// console.log("Before: ", jessica);
// console.log("After: ", jessicaCopy);

// todo: Deep Copies

const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("Mary");
jessicaClone.family.push("John");

console.log("Original: ", jessica);
console.log("Clone: ", jessicaClone);
