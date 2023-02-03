// Use the destructuring to make the check of the age easier. Try to modify the parameter that the function isAdult takes in.

function isAdult(id) {
  return id.age >= 18;
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, firstName, lastName, age} = person

console.log(isAdult(person));