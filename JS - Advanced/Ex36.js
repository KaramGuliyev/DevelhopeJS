// Define a class called Person that takes in three parameters in the constructor (firstName, lastName and age).
// Create the getters and setters methods for each property and a getter method called fullName that returns the full name.

class Person {
  firstName;
  lastName;
  age;

  static fromObject(obj) {
    return {
      firstName: obj.firstName,
      lastName: obj.lastName,
      age: obj.age,
    };
  }

  constructor(obj) {
    (this.firstName = obj.firstName), (this.lastName = obj.lastName), (this.age = obj.age);
  }

  set firstName(firstName) {
    this.firstName = firstName;
  }
  set lastName(lastName) {
    this.lastName = lastName;
  }
  set age(age) {
    this.age = age;
  }
  get fullName() {
    return `Hello My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`;
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const person = new Person(Person.fromObject(obj));
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
