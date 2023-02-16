// Create the fromJson method that takes in a json as parameter and returns an object of type Person.

class Person {
  constructor(json) {
    console.log(json);
    this.id = json.id;
    this.firstName = json.firstName;
    this.lastName = json.lastName;
    this.age = json.age;
  }

  static toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    const obj = JSON.parse(json);
    return new Person(obj);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);

console.log(developer);
console.log(developer instanceof Person);

// "fromJson doesn't create a Person instance, it just returns a literal object. Try to use the "new" keyword in the formJson() function"
// Your fromJson still doesn't create a new Person(). Try to create a variable and use JSON.parse() to save the information there, and then use v.id,
// v.firstName etc in the new Person()'s constructor"

// Instead of returning every variable I just returned all variables as a object and then used to create a Person instance. If it's still not correct I will do with the way you said. 
