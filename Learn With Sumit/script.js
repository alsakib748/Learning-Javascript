"use strict";

const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

const person2 = {
  firstName: "John",
  lastName: "Doe"
};

let name = person1.fullName.call(person2);

console.log(name);

console.log("-------------JSON-------------");

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

console.log(text);

// todo: JSON text to object
const obj = JSON.parse(text);

console.log(obj);

console.log(obj.employees[0].firstName);

let person = {
  firstName: "Al",
  lastName: "Sakib",
  age: 25,
  eyeColor: "brown",
  language: "",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  today: new Date(),
  // get lang() {
  //   return "BN";
  // }
  set lang(value) {
    this.language = value;
  }
};

let personObj = JSON.stringify(person);

console.log(personObj);

console.log("-------------Object--------------");

let personArray = Object.values(person);

for (let personValue of personArray) {
  console.log(personValue);
}

const personText = JSON.stringify(personArray);
console.log(personText);

// console.log(personArray);

person.lang = "EN";

// console.log(person);

Object.defineProperty(person, "completeName", {
  get: function () {
    return this.firstName + " " + this.lastName + " (Complete Name)";
  }
});

console.log(person.completeName);

console.log("------------- Construction Functions -------------");

function personBluePrint(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.fullName = function () {
    return (
      "My name is " +
      this.first +
      " " +
      this.last +
      ". I am " +
      this.age +
      " years old."
    );
  };
}

let sakib = new personBluePrint("Al", "Sakib", 25);
let john = new personBluePrint("John", "Doe", 30);
let peter = new personBluePrint("Peter", "Parker", 28);
console.log(sakib.fullName());
console.log(john.fullName());
console.log(peter);

personBluePrint.prototype.country = "Bangladesh";
console.log(peter.country);

String.prototype.doingFun = function () {
  return "I am doing fun!";
};

const x = "Bangladesh";

console.log(x.doingFun());
// console.log(x);

const nums = [1, 2, 3];

console.log(nums);

const numIterator = nums[Symbol.iterator]();

console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());

const mNumbers = {};

// myNumbers[Symbol.iterator] = function () {
//   let n = 0;
//   let done = false;
//   return {
//     next() {
//       n += 10;
//       if (n == 100) {
//         done = true;
//       }
//       return {
//         value: n,
//         done: done
//       };
//     }
//   };
// };

// for (let num of myNumbers) {
//   console.log(num);
// }

console.log("-------------Functions-------------");

// todo: Self Invoking Function

(function () {
  console.log("I am a self invoking function!");
})();

// todo: Pass By Reference

function a(x) {
  x.one = 7;
  return x.one * x.two;
}

let m = {
  one: 4,
  two: 5
};

console.log(a(m));

console.log(m);

function a() {
  console.log(this);
}

console.log(a());

const personMainObject = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  }
};

const personSubObject = {
  firstName: "Al",
  lastName: "Sakib"
};

const personSubObject2 = {
  firstName: "John",
  lastName: "Doe"
};

let personResult = personMainObject.fullName.apply(personSubObject, [
  "Dhaka",
  "Bangladesh"
]);

console.log(personResult);

const numbers = [1, 2, 3, 4, 25];

const maxNumber = Math.max.apply(null, numbers);

console.log(maxNumber);
