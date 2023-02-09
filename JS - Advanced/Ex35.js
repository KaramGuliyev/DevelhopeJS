// Define inside the class Person a static method called fromObject that takes in an object literal as parameter and instantiate a Person object.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(obj) {
    return new Person(obj.firstName, obj.lastName);
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

// console.log(Person.fromObject(obj));

const personObj = Person.fromObject(obj)

console.log(personObj);

// console.log(person.firstName + " " + person.lastName);

// "You have to return a new Person object from the fromObject function. Right now you return a literal object, that's not of type Person.
// Use the "new" keyword inside the fromObject function"
