// function filterLongWords(sentence, n) {
//    return sentence.split(" ").filter(chr=> chr.length ===( n + 1 ))
// }console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));
// ------------------------------------------------------------------------------------------------------------------------------------------

// function filterString(value) {
//     const  number = value.split("").filter(num => Number(num) ).join("");
//       return +number
//     }

// console.log(filterString("qp1b0qe6l"));
// ------------------------------------------------------------------------------------------------------------------------------------------
// function gooseFilter (birds) {
//   const  geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
// return birds.filter(chr => !geese.includes(chr));
// };console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
// ------------------------------------------------------------------------------------------------------------------------------------------
// function stray(numbers) {
//     if(numbers.length === 3 && !numbers.includes(0)){
//     if(numbers[0] !== numbers[1]){
// const numRed = numbers.reduce((num1 , num2) => num1 && num2);
// const numFil =  numbers.filter(num => num !== numRed);
// return  parseInt(numFil)
//     }else if(numbers[0] === numbers[1]){
//         return numbers[numbers.length - 1]
//     }}else if(numbers.includes(0)){
// const zero =numbers.filter(num => num !== numbers[0]);
// return +zero
//     }else{
//         const numRed = numbers.reduce((num1 , num2) => num1 && num2);
//         const numFil =  numbers.filter(num => num !== numRed);
//         return parseInt(numFil)
//     }
// }
// console.log(stray([1,2,1]));
// console.log(stray([2,1,1]));
// console.log(stray([1,1,2]));
// console.log(stray([17, 17, 0, 17, 17, 17, 17]));
// ------------------------------------------------------------------------------------------------------------------------------------------
// function solve(arr) {
//   let arrCopy = [...arr].sort((a, b) => a - b);
//   const arrLength =
//     arr.length % 2 === 0 ? arrCopy.length / 2 : Math.floor(arrCopy.length / 2);

//   let rezult = [];
//   for (let i = 0; i < arrLength; i++) {
//     rezult.push(arrCopy[arrCopy.length - 1]);
//     arrCopy.pop();
//     rezult.push(arrCopy[0]);
//     arrCopy.shift();
//   }
//   if (arrCopy.length % 2 === 1) {
//     rezult.push(arrCopy[0]);
//   }

//   return rezult;
// }

// console.log(solve([15, 11, 10, 7, 12]));
// console.log(solve([91, 75, 86, 14, 82]));
// console.log(solve([84, 79, 76, 61, 78]));
// console.log(solve([52, 77, 72, 44, 74, 76, 40]));
// console.log(solve([1, 6, 9, 4, 3, 7, 8, 2]));

// function solve(arr) {
//   let rezult = [];
//   arr.sort((a, b) => a - b);
//   for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
//     if (i !== j) {
//       rezult.push(arr[j]), rezult.push(arr[i]);
//     } else rezult.push(arr[i]);
//   }

//   return rezult;
// }
// ------------------------------------------------------------------------------------------------------------------------------------------
// const keysAndValues = (data) => {
//     const keys = Object.keys(data);
//     const values = Object.values(data);
//     return  keys,values
// };

// const keysAndValues = (data) => [Object.keys(data), Object.values(data)];
// console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
// ------------------------------------------------------------------------------------------------------------------------------------------

// const digitize = (nums) => [...String(nums)].reverse().map(num=>Number(num));
//   console.log(digitize(35231));
//   console.log(digitize(0));
// ------------------------------------------------------------------------------------------------------------------------------------------

// const animal = ({name,legs,color})=> `This ${color} ${name} has ${legs} legs`  ;
//   console.log(animal({ name: "dog", legs: 4, color: "white" }));

//   "This white dog has 4 legs."

// ------------------------------------------------------------------------------------------------------------------------------------------

// const arrayToObject = (arr) => {
//   let keys = arr.filter((chr, i) => arr.indexOf(chr) === i);
// // const mySet = [...new Set(arr)] like this
//   let values = keys.map((chr) => arr.filter((arrch) => chr === arrch).length);
//   return keys.reduce((obj, key, i) => {
//     obj[key] = values[i];
//     return obj;
//   }, {});
// };
// console.log(arrayToObject(["a", "a", "e", "e", "i", "o", "o", "o", "o"]));
// console.log(arrayToObject([1,1,1,2,2,3,4,4,4]));
// const objectToArray = (obj) => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);
// return keys.reduce((arr, key, i) => {
//     const repeated = Array(values[i]).fill(isNaN(key) ? key : Number(key));
//     return arr.concat(repeated);
//   }, []);
//    };
// console.log(objectToArray(arrayToObject(["a", "a", "e", "e", "i", "o", "o", "o", "o"])));
// console.log(objectToArray(arrayToObject([1,1,1,2,2,3,4,4,4])));

// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
//اینو حتما بگم به علی تا برسیش کنیم
// const arrayToObject = (arr) => {
//   return arr.reduce((obj, item) => {
//     obj[item] = (obj[item] || 0) + 1;
//     return obj;
//   }, {});
// };
//و این هم همین طور
// const objectToArray = (obj) => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);
// return keys.reduce((arr, key, i) => {
//     const repeated = Array(values[i]).fill(isNaN(key) ? key : Number(key));
//     return arr.concat(repeated);
//   }, []);
//    };
//و همچنین اینا
// const arrayToObject = a => a.reduce( (acc,v) => ( acc[v] = acc[v] + 1 || 1 , acc ) , {} ) ;
// const objectToArray = o => [].concat( ... Object.keys(o).map( i => Array.from( { length: o[i] }, () => Number(i) || i ) ) ) ;
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------

// const countPositivesSumNegatives = (input) => {
//   if (!input || input.length === 0) return [];
//   const integer = input.filter((x) => x > 0).length;
//   const harchi = input
//     .filter((x) => x < 0)
//     .reduce((acc, i) => acc + i, 0);
// return [integer,harchi]
// };
// console.log(
//   countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
// );
// ------------------------------------------------------------------------------------------------------------------------------------------
// function removeEveryOther(arr){
//   let result = [];
// for(let i = 0 ; i < arr.length ; i += 2){
// result.push(arr[i])
// }
// return result
// };
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
// ------------------------------------------------------------------------------------------------------------------------------------------

// const differenceInAges = (ages) => {
//   const min = Math.min(...ages);
//   const max = Math.max(...ages);
// return [min,max,(max-min)]
// };
// console.log(differenceInAges([57, 99, 14, 32]));
// ------------------------------------------------------------------------------------------------------------------------------------------

// const aliasGen = (first, last) => {
//   const firstChar = first[0].toUpperCase();
//   const lastChar = last[0].toUpperCase();
//   if (!/^[A-Z]$/.test(firstChar) || !/^[A-Z]$/.test(lastChar)) {
//     return "Your name must start with a letter from A - Z.";
//   };
//   return `${firstName[firstChar]} ${surname[lastChar]}`;
// };
// // console.log(aliasGen("Mike", "Millington"));
// // console.log(aliasGen("Mike", "25584878"));
// console.log(aliasGen("q71qm", "yghxi"));
// ------------------------------------------------------------------------------------------------------------------------------------------

//     const  combine =(...objOfArr) => {❌❌❌❌❌
//  const objEntries = objOfArr.map(obj =>{

// });
// return
// };
//     console.log(combine({ a: 10, b: 20, c: 30 },{ a: 3, c: 6, d: 3 },{ a: 5, d: 11, e: 8 }));
//     //  console.log(combine({ a: 10, b: 20, c: 30 },{ a: 3, c: 6, d: 3 }));

// ------------------------------------------------------------------------------------------------------------------------------------------

//  const ìsZeroBalanced = arr => {💔❌
//   if(arr.length === 0 ) return false ;
// for(let i = 0 ; i < arr.length ; i + 2 ){
//       console.log( arr[i] == (-1 * arr[i + 1]));
// }
//       return
//     };
//     console.log(ìsZeroBalanced([3 ,-3,-2,-1]));

// ------------------------------------------------------------------------------------------------------------------------------------------

// function createPhoneNumber(numbers) {
//   const str = numbers.join('');
//   return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6)}`;
// }
// ------------------------------------------------------------------------------------------------------------------------------------------
// function findOdd(A) {
//   const count = {};

//   for (let key of A) {
//     count[key] = (count[key] || 0) + 1;
//   }
//   for (let key in count) {
//     console.log(count[key]);
//     if (count[key] % 2 !== 1) {
//       return key;
//     }
//   }
// }

// console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
