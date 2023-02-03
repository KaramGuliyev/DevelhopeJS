// In this exercise we need to filter the properties of the object person in order to convert into JSON just the values of id and age.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const str = JSON.stringify(person, ["id", "age"]);
const parsedJSON = JSON.parse(str)
console.log(parsedJSON);
console.log(str); 

// 03:29 - Night Night!