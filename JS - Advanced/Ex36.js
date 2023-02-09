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
    this.firstName = obj.firstName, 
    this.lastName = obj.lastName, 
    this.age = obj.age;
  }

  set firstName(firstName) {
    this._firstName = firstName;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  set age(age) {
    this._age = age;
  }
  get fullName() {
    return `Hello My name is ${this._firstName} ${this._lastName} and I'm ${this._age} years old.`;
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

// You don't have to surround your statements in (), so this line try to make it simpler: (this.firstName = obj.firstName), (this.lastName = obj.lastName), (this.age = obj.age); 
// Also change the name of the class properties, so it's not the same as the name of the setter and getter. If it's the same, naming collision will happen, 
// which is not the correct way of doing it. You can just add an _ to the start of the variables.
