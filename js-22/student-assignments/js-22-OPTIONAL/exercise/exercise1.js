// Create a constructor function Calculator that creates objects with 2 methods:

// --sum() returns the sum of these properties.
// --mul() returns the multiplication product of these properties.
// For instance:

//////////////Answer!!!!///////////////

function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.sum = function () {
  return this.num1 + this.num2;
};
Calculator.prototype.mul = function () {
  return this.num1 * this.num2;
};
let calculator = new Calculator(4, 5);
console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());
