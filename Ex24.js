// Create a constructor function called Smartphone that takes in 3 parameters: brand,name, price. 
// To create an object from a constructor function, we use the new keyword. Create two different objects.

function smartphone (brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
}

let phone1 = new smartphone("Iphone", "14 Pro Max", "2000")
let phone2 = new smartphone("Samsung", "A23", "20")

console.log(phone1, phone2);