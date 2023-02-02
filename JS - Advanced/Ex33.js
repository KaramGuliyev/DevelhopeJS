// Define a class called Person that takes in two arguments (firstName and lastName) in the constructor.

// const developer = new Person('Mario', 'Rossi');
// console.log(developer.firstName + " " + developer.lastName);

class Person {

    constructor(firstName, lastName) {
        this.first = firstName
        this.last = lastName
    }
    introduceself() {
        console.log(this.first + " " + this.last);
    }
}

const developer = new Person("Karam", "Guliyev");
developer.introduceself()