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
