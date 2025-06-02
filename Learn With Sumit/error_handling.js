"use strict";

try {
  let result = 10 / 0;
  console.log(result);
} catch (err) {
  console.log(err);
}

try {
  addalert("Welcome guest!");
} catch (err) {
  console.log(err.message);
}

let x = 12;

try {
  if (x == "") throw "empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10)
    throw {
      message: "Too high",
      name: "High Error"
    };
} catch (err) {
  //   message.innerHTML = "Input is " + err;
  console.log(err);
} finally {
  console.log("The finally block is always executed");
}

console.log("The Numbe is 5");

let num = 1;

try {
  num.toPrecision(500);
} catch (err) {
  console.log(err.name);
}
