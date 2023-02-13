// Create the fromJson method that takes in a json as parameter and returns an object of type Person.

class Person {
  constructor(stringJson) {
    this.id = stringJson.id;
    this.firstName = stringJson.firstName;
    this.lastName = stringJson.lastName;
    this.age = stringJson.age;
  }

  static toJson() {
    return JSON.stringify(this);
  }

  static fromJson(json) {
    return JSON.parse(json);
  }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = new Person(Person.fromJson(json));
console.log(developer);
console.log(developer instanceof Person);

// "fromJson doesn't create a Person instance, it just returns a literal object. Try to use the "new" keyword in the formJson() function"