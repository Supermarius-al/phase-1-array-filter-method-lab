// Code your solution here
const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

const findMatching = function (collection, name) {
  const match = [];
  for (const driver of collection) {
    if (driver.toLowerCase() === name.toLowerCase()) {
      match.push(driver);
    }
  }
  return match;
};

const fuzzyMatch = function (collection, name) {
  const match = [];
  for (const driver of collection) {
    if (driver.charAt(0) === name.charAt(0)) {
      match.push(driver);
    }
  }
  return match;
};

const matchName = function (collection, name) {
  const match = [];
  for (const driver of collection) {
    if (driver === name) {
      match.push(driver);
    }
  }
  return match;
};
