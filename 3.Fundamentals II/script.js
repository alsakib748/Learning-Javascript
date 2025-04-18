// todo: Function Declaration
function age(birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  return age;
}

const myAge = age(2000);

// console.log(myAge);

// todo: Annonymous function / Function Expression
const storeAge = function (birthYear) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - birthYear;
  return age;
};

const ownAge = storeAge(1995);
// console.log(ownAge);
// console.log(storeAge(1755));

// todo: Arrow function
const calculateAge = (birthYear) => 2025 - birthYear;
const myAge2 = calculateAge(2000);
// console.log(myAge2);

// todo: Arrow Function
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

const retirement = yearsUntilRetirement(2000, "John");
// console.log(retirement);

// todo: Array
const friends = ["Michael", "Steven", "Peter"];
friends.push("Jay");
// console.log(friends);
friends.unshift("John");
// console.log(friends);
friends.pop();
// console.log(friends);
friends.shift();
// console.log(friends);
// console.log(friends.indexOf("Steven"));
// console.log(friends.includes("Steven"));
// console.log(friends.includes("John"));

// console.log("Length : " + friends.length);
// console.log(friends[friends.length - 1]);

const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// todo: Object

const sakib = {
  firstName: "Sakib",
  lastName: "Ayon",
  birthYear: 2000,
  job: "Developer",
  friends: ["Michael", "Steven", "Peter"]
};
// console.log(sakib.firstName);
// console.log(sakib.friends);
// console.log(sakib["lastName"]);

const nameKey = "Name";

// console.log(sakib["first" + nameKey]);
// console.log(sakib["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Sakib? Choose between firstName, lastName, age, job, friends"
);

// console.log(interestedIn);
// console.log(sakib["interestedIn"]);

if (sakib[interestedIn]) {
  // console.log(sakib[interestedIn]);
} else {
  // console.log(
  //   "Wrong request! Choose between firstName, lastName, age, job, friends"
  // );
}

const ayon = {
  firstName: "Sakib",
  lastName: "Ayon",
  birthYear: 2000,
  job: "Developer",
  friends: ["Michael", "Steven", "Peter"],

  calcAge: function (birthYear) {
    this.age = 2025 - birthYear;
    return this.age;
  }
};

console.log(ayon.calcAge(2000));
