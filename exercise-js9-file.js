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

// function evenAdd(arr) {
//   let result = [];
//   for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
//     if (i !== j) {
//       let plus = arr[j] + arr[i];
//       if (plus % 2 === 0) result.push(plus);
//     } else {
//       if (arr[i] % 2 === 0) result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(evenAdd([1, 2, 3, 4, 5]));
// // ------------------------------------------------------------------
// // ------------------------------------------------------------------
// // ------------------------------------------------------------------js-10------------------------------------------------------------------
// // ------------------------------------------------------------------
// // ------------------------------------------------------------------
// const key = "name";
// const value = "mmad";
// const person = {
//   age: {
//     "last year": 20,
//     "This year": 21,
//   },
//   city: "Tabriz",
// };
// person[key] = value
// console.log(person);
// console.log(person[key]);
// // ------------------------------------------------------------------




// const fieldName = prompt("Enter the field name:");
// const fieldValue = prompt("Enter the field value:");

// const person = {};
// person[fieldName] = fieldValue;;

// console.log(person);



// const keys = ["name" , "age" , "city"];
// const person = {};

// for(let i = 0 ; i<keys.length ; i++){
//   person[keys[i]]= "unknown"
// };
// console.log(person);
// // ------------------------------------------------------------------

// const person = {
//   name : "Ali",
//   age: {
//     "last year": 20,
//     "This year": 21,
//   },
//   city: "Tabriz",
//   setName (newName){
//      this.name = newName
//     }
// };

// // ------------------------------------------------------------------

// person.setName("mmad");

// console.log(person);

// const user = {
//   name: "Reza",
//   age: 30,
//   setName(newName) {
//     this.name = newName;
//   },
//   growOlder() {
//     this.age += 1;
//   },
//   printInfo() { 
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// };user.setName("mmad");
//   user.setName("ali");
//   console.log(user);
//   console.log(user);
// // ------------------------------------------------------------------
// const key ="name" ;
// const person = {}


// person[key] =["mmad","ali","reza"]

// console.log(person["name"]);
// const students = {
//   student1: {
//     name: "Ali",
//     grades: {
//       math: 18,
//       english: 17,
//       science: 19
//     }
//   },
//   student2: {
//     name: "Sara",
//     grades: {
//       math: 20,
//       english: 19,
//       science: 18
//     }
//   }
// };
// let avreage1 = 0;
// let avreage2 = 0;
// let limietd = 0;
// let avreages = [avreage1 , avreage2]
// for (let key in students){
//   limietd++;
// for(let per in students[key].grades){
//    console.log(students.student1.grades[per]);
//    if(limietd > 2){
//      avreage1 = avreage1 += students.student1.grades[per] 
//    }else if(limietd === 2){
//       avreage2 =avreage2 += students.student1.grades[per] 
//    };
// }
// for(let i = 0 ; i < avreages.length ; i++){

//   console.log(`${key}'s average grade is ${avreages[(i / 3)]}`);
// }
// }
// console.log(avreage1 / 3);
// console.log(person.name);
// // ------------------------------------------------------------------
// const person = {
//     name : "mmad",
//     age : 21,
//     lastName: "mmady"
// };

// console.log(person.name);
// console.log(person["age"]);
// delete person.lastName;
// console.log(person);
// // ------------------------------------------------------------------

// const book = {
//     title : "whatever",
//     author : "whoever",
//     "year published" : 1900 ,
//     isRead : "false",
// };

// console.log(`title: ${book.title} , author: ${book.author}`);
//  book.isRead = "true";
//  book.rating = 10 ;
// console.log(book);


// console.log(book[2]);

// // ------------------------------------------------------------------
// const allFruits = [...fruits +'orange',' mango'];//چرا این این طوری میشه دلیلیشو از چتبی بی تی بپرسم حتام
// // ------------------------------------------------------------------

// const numbers = [1,2,3,];

// const newNumber = [...numbers ,4,5];
// console.log(newNumber);
// console.log(...numbers);
// // ------------------------------------------------------------------

// const fruits = ['apple','banana'];

// const allFruits = [...fruits ,'orange','mango'];
// console.log(allFruits);
// // ------------------------------------------------------------------
