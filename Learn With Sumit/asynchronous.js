"use strict";

// function hello() {
//   console.log("Line 2 code");
// }

console.log("Line 1 code");
// hello();

// setTimeout(function () {
//   console.log("Line 2 code");
// }, 0);

// setInterval(function () {
//   console.log("Line 2 code");
// }, 5000);

console.log("Line 3 code");

// todo: Asynchronous Programming and Callback Example

const paymentSuccess = true;
const marks = 70;

function enroll(callback) {
  console.log("Course enrollment is in progress...");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment failed. Please try again.");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course is in progress...");

  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not get enough marks to get the certificate.");
    }
  }, 3000);
}

function getCertificate() {
  console.log("Preparing your certificate...");

  setTimeout(function () {
    console.log("Congratulations! Here is your certificate.");
  }, 1000);
}

// todo: Callback Hell Example
enroll(function () {
  progress(getCertificate);
});

// progress(getCertificate);

// getCertificate();

enroll(function () {
  progress(function () {
    C(function () {
      D(function () {
        E(function () {
          F();
        });
      });
    });
  });
});
