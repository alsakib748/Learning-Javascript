"use strict";

let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "Promise One!");
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "Promise Two!");
});

p1.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log(e);
});

p2.then((v) => {
  console.log(v);
}).catch((e) => {
  console.log(e);
});

// console.log(p1);
// console.log(p2);

function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("You got an iPhone!");
      } else {
        reject("You didn't pass the exam, no iPhone for you!");
      }
    }, 2000);
  });

  //   return promise;
}

getIphone(false)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

// console.log(getIphone(false));

console.log("Fetch API Example");

const BASE_URL = "https://jsonplaceholder.typicode.com";

// let res = fetch(`${BASE_URL}/users/1`);
// console.log(res);

// fetch(`${BASE_URL}/users/1`)
//   .then((res) => {
//     console.log(res.json());
//   })
//   .catch((e) => {
//     console.log(e);
//   });

fetch(`${BASE_URL}/users/1`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return Promise.resolve("Something");
  })
  .then((str) => {
    console.log(str);
    return Promise.resolve("Another Promise");
  })
  .then((another) => {
    console.log(another);
  })
  .catch((e) => {
    console.log(e);
  });
