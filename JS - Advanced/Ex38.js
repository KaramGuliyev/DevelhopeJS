let arr = [10, 20]
let [num1, num2] = arr;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
[num1, num2] = [num2, num1]
console.log('After swap: ', num1, num2); // After swap: 20 10

