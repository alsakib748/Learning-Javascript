"use strict";

const status = true;

console.log("Task 1");

// todo: Promise Definition
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (status) {
      //   console.log("Task 2");
      resolve("Task 2 completed");
    } else {
      //   console.log("failed");
      reject("Task 2 failed");
    }
  }, 2000);
});

// todo: Promise call
promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("Task 3");
