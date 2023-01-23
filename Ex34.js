// Create a class called Developer. The Developer class is inherited from a class called Person that takes in two arguments in the constructor method: firstName and lastName. 
// The Developer class takes in another argument in the constructor method (role).

// class Person {
// constructor(firstName, lastName) {
// this.firstName = firstName;
// this.lastName = lastName;
// }
// }

class Person {

    constructor(firstName, lastName) {
        this.first = firstName
        this.last = lastName
    }
    introduceSelf() {
        return (`Hello my name is ${this.first} ${this.last}`)
    }
}

const developer = new Person("Karam", "Guliyev");
console.log(developer.introduceSelf());

class Developer extends Person {
    constructor(developer, role) {
        super(developer)
        this.positon = role;
    }
    introduceSelfDetailed() {
        console.log(`${developer.introduceSelf()} and my position is ${this.positon}` );
    }
}

const developerDetails = new Developer(developer.introduceself, "FSD")
developerDetails.introduceSelfDetailed()