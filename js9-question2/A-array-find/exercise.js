/* 
  You are given an array of names.
  Write a function called "findLongNameThatStartsWithA" using the .find() method. This function should find the first name in names array that starts with the letter 'A' and is longer than seven letters.
*/

// write your code here

let names = [
  "Vajihe",
  "Alireza",
  "AmirMostafa",
  "AmirMehdi",
  "Alie",
  "Sarah",
  "MohammadHosein",
  "Fatemeh",
  "Mahjan",
];

const  findLongNameThatStartsWithA = names.find(chr => chr[0] === "A");// create the function


let longNameThatStartsWithA = names.find(chr => chr[0] === "A" && chr.length > 7) // call the function

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "AmirMostafa"
