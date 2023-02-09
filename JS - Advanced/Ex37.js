// Define a class called AreaCalculator. Inside it, create a static method that let you calculate the area of the geometric figure passed as parameter.
// The method will let you calculate the square, the rectangle and the circle area.

class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(prop) {
    if (prop instanceof Square) {
      return square.side ** 2;
    } else if (prop instanceof Rectangle) {
      return rectangle.height * rectangle.width;
    } else if (prop instanceof Circle) {
      return Math.PI * circle.radius ** 2;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));

// "Instead of comparing the variables to each other, use prop instanceof Square, so you check if the value you give the function is of the type Square, or Circle, etc."


