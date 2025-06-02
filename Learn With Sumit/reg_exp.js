"use strict";

let text = "Visit w3schools!";
let n = text.search("w3schools");
console.log(n); // 6

let str = "Hello world, welcome to the universe.";
let n1 = str.search(/world/);
console.log(n1); // 6

let str1 = "Hello world, welcome to the world.";
let n2 = str1.replace(/world/gi, "w3schools");
console.log(n2); // Hello w3schools, welcome to the universe.

let number = "123456789";
let result = number.match(/[1-4]/g);
console.log(result);

let color = "red, green, blue, green, yellow, black, white";
let colorResult = color.match(/(red|green)/g);
console.log(colorResult); // [ 'red', 'green' ]

let text1 = "HELLO, LOOK AT YOU!";
let textResult1 = text1.search(/\bLO/);
console.log(textResult1); // 7

let text2 = "Hellooo World! Hello W3Schools!";
let textResult2 = text2.match(/lo*/g);
console.log(textResult2); // [ 'loo', 'looo' ]

const pattern = /e/;
let patternTest = pattern.test("The best things in life are free!");
console.log(patternTest); // true

const obj = /e/.exec("The best things in life are free!");
console.log(obj); // [ 'e', index: 2, input: 'The best things in life are free!' ]
