// The sum function has a high numbers of parameters. How can we improve the code in order to make it accept an unknown numbers to sum?

function sum(...vars) {
  return vars.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5));
