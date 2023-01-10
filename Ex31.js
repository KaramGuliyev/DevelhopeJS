// Create a function called ageAverage that takes in an array of people and returns the average age.

function ageAverage(persons) {
  let average = persons.reduce((acc, i) => {
    return acc + i.age;
  }, 0);
  average = average / persons.length;
  return Math.round(average);
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const average = ageAverage(persons);
console.log(persons);
console.log(average);
