"use strict";

let a = 4;

function myFunction() {
  return a * a;
}

// let counter = 0;

// function add() {
//   let counter = 0;
//   counter++;
//   return counter;
// }

// add();
// add();
// add();

// console.log(counter);

// counter = 4;

// console.log(counter);

function temporary() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
  //   plus();
  //   return plus;
}

const add = temporary(); // add is a function at the end

console.dir(add);
add();
// console.dir(add);
// add();
// console.dir(add);
// add();
// console.dir(add);
// add();

// plus();
