"use strict";

// function display(some) {
//   console.log(some);
// }

function calculator(num1, num2, callback) {
  let sum = num1 + num2;
  //   return sum;

  if (callback) callback(sum);
}

// calculator(50, 10, display);

calculator(5, 10, function (result) {
  console.log(result);
});

// let result = calculator(5, 10);
// display(result);
