"use strict";

let arr = [1, 2, 3, 4, 5];

// let squrArr = arr.map(function (v) {
//   return v * v;
// });

let squrArr = arr.map((v) => v * v);

// console.log(squrArr);

function asyncMap(arr, cb) {
  return arr.map((v) => {
    // setTimeout(cb.bind(null, v), 0);
    setTimeout(() => cb(v), 0);
  });
}

// let qbArr = asyncMap(arr, (v) => v * v * v);
let qbArr = asyncMap(arr, (v) => {
  console.log(v);
});
console.log(qbArr);

const BASE_URL = "https://jsonplaceholder.typicode.com/";

getRequest(`${BASE_URL}/posts/1`, (err, res) => {
  if (err) {
    throw new Error("Error Occurred");
  }

  let { userId } = res;

  getRequest(`${BASE_URL}/users/${userId}`, (err, res) => {
    if (err) {
      throw new Error("Error Occurred");
    }

    getRequest(`${BASE_URL}/posts/1/comments/${res.id}`, (err, res) => {
      if (err) {
        throw new Error("Error Occurred");
      }

      console.log(res);
    });
  });
});
