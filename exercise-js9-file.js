// const setTime = setTimeout(() => {
//     console.log("hello,2 seconde passd");
// }, 2000);

// const clear = setInterval(() => {
// console.log("hy rozgar");
// }, 2000);

// setTimeout(() => {
//     clearInterval(clear)
// }, 6000);

// let  count = 5 ;
// const reversew = setInterval(() => {
//     console.log(count);
//     --count;
//     if(count === 0){
//         console.log("finsht");
//         clearInterval(reversew)
//     }
// }, 1000);

// const time = setInterval(() => {
//     console.clear()
//     const now = new Date();
//     console.log(now.getHours(),now.getMinutes(),now.getSeconds());
// },1000);

// const time1 = setInterval(() => {
//     const date = new Date;
//     console.log(date.toLocaleTimeString());
// },1000);

// const timer = setInterval(() => {
//     console.clear()
//     const now = new Date();
//   const seconde = String(now.getSeconds()).padStart(2 ,"0")
//   const min = String(now.getMinutes()).padStart(2 ,"0")
//   const hours = String(now.getHours()).padStart(2 ,"0")
// console.log(`${hours}:${min}:${seconde}`);
// },1000);

// function time(seconds) {
//   let count = seconds;
//   const timer = setInterval(() => {
//       console.clear();
//       console.log(count);
//     count--;
//     if (count === 0) {
//       clearInterval(timer);
//       console.log("finesht");
//     }
//   }, 1000);

// }
// console.log(time(10));

// count = 10;
// const timer = setInterval(() => {
//   console.clear()
//   console.log(count);
//   count--;
//   if (count === 0) {
//     clearInterval(timer);
//     console.log("Tamam");
//   }
// }, 1000);

// let time = setTimeout(() => {
//   console.log("ok");
// }, 3000);
// ------------------------------------------------------------------
// let count = 0;
// let call = setInterval(() => {
//   count++;
//   const random = Math.floor(Math.random() * 100);
//   console.log(random);

//   if (random >= 90) {
//     console.log("✅ find it");
//     clearInterval(call);

//     if (count >= 1 && count <= 3) {
//       console.log("🍀 you are lucky");
//     } else if (count > 3 && count <= 7) {
//       console.log("🕰️ you are hay rozgar");
//     } else if (count > 7 && count < 10) {
//       console.log("🍐 you are golabii");
//     } else if (count === 10) {
//       console.log("💔 found it at the last chance!");
//     }
//   }

//   if (count === 10) {
//     console.log("❌ not find");
//   }
// }, 1000);

// setTimeout(() => {
//   clearInterval(call);
// }, 10000);
// ------------------------------------------------------------------

// const timer = setInterval(() => {
//   console.clear()
//   let now = new Date();
//   let seconde = String(now.getSeconds()).padStart(2,"0")
//   let min = String(now.getMinutes()).padStart(2,"0")
//   let hours = String(now.getHours()).padStart(2,"0")
//   console.log(`${hours};${min};${seconde}`);
// },1000);
// ------------------------------------------------------------------
// const numbers = [10, 21, 32, 43, 54, 65, 76];

// function even(arr) {
//     return arr.filter(num=>num % 2 ===0).reduce((num1,num2)=>  num1 + num2   ,0 )
// }
// console.log(even(numbers));
// // ------------------------------------------------------------------
// const words = ["apple", "banana", "strawberry", "kiwi", "mango"];

// let length=words.reduce((chr1,chr2)=> (chr2.length > chr1.length)?chr2 :chr1 , "")
// console.log(length);

// // ------------------------------------------------------------------
// const numberss = [1, 2, 3, 4, 5];

// const reversedArray = numberss.reduce((acc, num) => [num, ...acc], []);

// console.log(reversedArray);
// // ------------------------------------------------------------------

// function add(arr){
// let result =[];
// for(let i = 0 , j = arr.length -1 ; i <= j ; i++ , j--){
// if(i !== j){
//     result.push(arr[j] + arr[i])
// }else result.push(arr[i])
// }
// return result;
// };console.log(add([1, 2, 3, 4, 5]));
// // ------------------------------------------------------------------

function evenAdd(arr) {
  let result = [];
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (i !== j) {
      let plus = arr[j] + arr[i];
      if (plus % 2 === 0) result.push(plus);
    } else {
      if (arr[i] % 2 === 0) result.push(arr[i]);
    }
  }
  return result;
}
console.log(evenAdd([1, 2, 3, 4, 5]));
