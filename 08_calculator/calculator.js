const add =  (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (arr) => arr.reduce(add, 0);

const multiply = (arr) => arr.reduce((acc, i) => acc * i, 1);

const power = (a, b) => multiply(Array(b).fill(a));

const factorial = (n) => multiply([...Array(n).keys()].map((n) => n + 1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
