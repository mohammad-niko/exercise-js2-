/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:

function randomNum() {
  return Math.floor(Math.random() * 16);
}

let numArr = [randomNum(), randomNum()];
let [firstRandom,secendRandom] = numArr;
console.log(numArr);
let newArrayOfNumber = [firstRandom, secendRandom];
let whileNum = 0;
while (whileNum < 8) {
  const num =
    (newArrayOfNumber[newArrayOfNumber.length - 2] +
      newArrayOfNumber[newArrayOfNumber.length - 1]) *
    2;
  newArrayOfNumber.push(num);
  ++whileNum;
}
console.log(newArrayOfNumber);
