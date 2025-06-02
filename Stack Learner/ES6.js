"use strict";

function sayMyName(name) {
  //   let result;
  setTimeout(() => {
    // result = name;
    // console.log("I have done ...");
    console.log(name);
    // return result;
  }, 3000);
  //   return result;
}

let output = sayMyName("Md. Al Sakib");
console.log(output);

function getRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    }
  };

  xhr.send();
}

getRequest("https://jsonplaceholder.typicode.com/users", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(res);
    res.forEach((r) => alert(r.name));
  }
});

getRequest("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(res);
    res.forEach((r) => console.log(r.title));
  }
});
