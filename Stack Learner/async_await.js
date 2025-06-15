"use strict";

// todo: markdown:: when function is async, it returns a promise
// async function test() {
//   return "Test Async Await";
// }

// console.log(test());

// test().then((v) => alert(v));

// todo:

// let p1 = new Promise((resolve) => {
//   setTimeout(resolve, 3000, "Test Async Await");
// });

// async function myAsyncFunction() {
//   //   p1.then((v) => alert(v));
//   let v = await p1;
//   console.log(v);
// }

// myAsyncFunction();

// todo:
// ** await can only be used inside an async function
// ** async await also use can alternative to .then() and .catch()
// ** handling errors with try/catch alternative to .catch()
async function fetchData() {
  try {
    // todo: Fetch API Returns a promise
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    let data = await res.json();
    //   console.log(data);

    let names = data.map((u) => u.name);
    console.log(names);
  } catch (e) {
    console.log(e.message);
  }
}

fetchData();

let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];

async function promiseAll() {
  let result = await Promise.all(promises);
  console.log(result);
}

promiseAll();
