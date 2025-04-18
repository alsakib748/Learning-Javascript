// console.log("Lifting weights repetition 1 🏋️‍♂️");

for (let rep = 5; rep <= 10; rep++) {
  //   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

// for (let i = 0; ; i++) {
//   console.log(i);
// }

const sakib = [
  "Al Sakib",
  "Ayon",
  2025 - 2000,
  "Developer",
  ["Michael", "Steven", "Peter"],
  true
];

const types = [];

for (let i = 0; i < sakib.length; i++) {
  //   console.log(sakib[i]);
  //   types.push(typeof sakib[i]);
}

// console.log(types);

const years = [1991, 1984, 2008, 2020];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}

// console.log(ages);

for (let i = 0; i < sakib.length; i++) {
  if (typeof sakib[i] !== "string") continue;
  //   console.log(sakib[i]);

  //   types.push(typeof sakib[i]);
  //   console.log(sakib[i], typeof sakib[i]);
}

for (let i = 0; i < sakib.length; i++) {
  if (typeof sakib[i] === "number") break;
  //   console.log(sakib[i]);

  //   types.push(typeof sakib[i]);
  //   console.log(sakib[i], typeof sakib[i]);
}

// todo: While Loop

let rep = 1;

while (rep <= 10) {
  console.log("Lifting weights repetition " + rep + " 🏋️‍♂️");
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
// let dice = Math.random() * 6;
console.log(dice);

// while (dice !== 6) {
//   //   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }
