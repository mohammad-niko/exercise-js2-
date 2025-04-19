// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/

const obj = { number: 6043, age: 21, pt: 96 };
// 1:
const method = Object.values(obj);
console.log(method);




// 2:
const { number, age, pt } = obj;
const array = [number, age, pt];
console.log(array);
