// Perform a code refactoring by using the Spread Operator.
// The output of the console.log must be the same.

function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));

// "You should spread the numbers variable when you call the sum() function in your last line."
