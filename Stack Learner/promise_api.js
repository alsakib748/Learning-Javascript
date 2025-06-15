"use strict";

// import "./promise.js"; // Use relative path and named import

// todo: Promise API
// const delay = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

// delay(2).then(() => console.log("2 Seconds Delay"));

// delay(1).then(() => console.log("1 Seconds Delay"));

// delay(3).then(() => console.log("3 Seconds Delay"));

// delay(2).then(() => console.log("2 Seconds Delay"));

// delay(5).then(() => console.log("5 Seconds Delay"));

// let p1 = Promise.resolve("Test");
// p1.then((v) => console.log(v));

// let p2 = Promise.reject("Rejected");
// p2.catch((e) => console.log(e));

// p2.catch(function (e) {
//   console.log(e);
// });

// console.log(p1);

// todo: Promise.all() function and Promise array

// let p1 = Promise.resolve("One");
// let p2 = Promise.resolve("Two");
// let p3 = Promise.resolve("Three");

// let promiseArr = [p1, p2, p3];
// Promise.all(promiseArr).then((arr) => {
//   console.log(arr);
// });

// let p1 = new Promise((resolve) => {
//   setTimeout(resolve, 5000, "One");
// });

// let p2 = new Promise((resolve) => {
//   setTimeout(resolve, 3000, "Two");
// });

// let p3 = new Promise((resolve) => {
//   setTimeout(resolve, 4000, "Three");
// });

// let promiseArr = [p1, p2, p3];

// Promise.all(promiseArr).then((arr) => console.log(arr));

// todo: Promise race() function

// Promise.race(promiseArr).then((v) => console.log(v));

const BASE_URL = "https://jsonplaceholder.typicode.com";

// todo: Fetch API

// fetch(`${BASE_URL}/users/1`)
//   // .then((res) => {
//   //   console.log(res.json());
//   // })
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     return Promise.resolve("Something");
//   })
//   .then((str) => {
//     console.log(str);
//     return Promise.resolve("Another Promise");
//   })
//   .then((another) => {
//     console.log(another);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// console.log(res);

// todo: Reference
// function getRequest(url, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);

//   xhr.onreadystatechange = function (e) {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         let response = JSON.parse(xhr.response);
//         callback(null, response);
//       } else {
//         callback(xhr.status, null);
//       }
//     }
//   };

//   xhr.send();
// }

// todo: Promise with XMLHttpRequest

// function getRequest(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);

//     xhr.onreadystatechange = function (e) {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           let response = JSON.parse(xhr.response);
//           resolve(response);
//         } else {
//           // reject(xhr.status);
//           reject(new Error("Error Occurred"));
//         }
//       }
//     };

//     xhr.send();
//   });
// }

// let res = getRequest(`${BASE_URL}/users/1`);

// console.log(res);

// getRequest(`${BASE_URL}/users/1445`)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e.message);
//   });

// todo: Promise with custom delay function

// const delay = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

// function delayDemo(s) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, s * 1000);
//   });
// }

// delay(2).then(() => console.log("2 Seconds Delay"));
// delay(1).then(() => console.log("1 Seconds Delay"));
// delay(3).then(() => console.log("3 Seconds Delay"));
// delay(4).then(() => console.log("4 Seconds Delay"));
