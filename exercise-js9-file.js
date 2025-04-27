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
// const arr1 = [1,2,3];
// const arr2 =  [4,5,6];

// console.log([...arr1,...arr2]);
// function mmad(a,b,c){
// console.log(a , b ,c );
// }
// mmad(...arr2)
// console.log(Math.max(...arr1));
// // ------------------------------------------------------------------
// const frontEnd = ['HTML', 'CSS', 'JavaScript'];
// const backEnd = ['Node.js', 'Express'];

// const fullStak = [...frontEnd,...backEnd];
// console.log(fullStak);

// function evenNumbers(...nums){
//     return nums.filter(num => num % 2 === 0)
// }
// console.log(evenNumbers(1,354654,364,34,6,4,6,135,16,784,654,34));

// const harchi = ['hamed','ali','asgar'];

// const copy = [...harchi];

// console.log(copy);

// const numbers = [100, 200, 300, 400, 500];

// const [first , ...others] = numbers

// console.log(first);

// function multiply(a, b, c) {
//     return a * b * c;
//   }

//   const args = [2, 3, 4];

//   console.log(multiply(...args));
//   console.log(args);

//   function trimArray(num){

//     const [one , two , three , fore, five] = num
//     return [two , three , fore]
//   }

//   console.log(trimArray([1, 2, 3, 4, 5]));

//   function trimArray(num){

//     const [_ , ...others] = num;
//     others.pop()
//     console.log(others);
//     return [others]
//   }

//   console.log(trimArray([1, 2, 3, 4, 5]));

// // ------------------------------------------------------------------

// const person = {
//     name: "Ali",
//     age: 25
//   };

//   const { name, age } = person;
//   console.log(name); // "Ali"
//   console.log(age);  // 25

// ------------------------------------------------------------------

// const user = {
//   name:"mmad",
//   lastName:"nik",
//   age:50,
//   email:"mmad@email.com",
//   city:"LA"
// };

//    این جا چند تا متود خفت واسه ابجکت ها داریم به به✅😂
// console.log(Object.assign(user,{eyes:"balck"}));
// console.log(Object.freeze(user));
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(Object.hasOwn(user,"age"));

// const haarchi = Object.entries(user);

// const [[name,nameValue]] = haarchi;
// console.log(name,nameValue);

// ------------------------------------------------------------------
// const user = {
//     firstNamee : "mmad",
//     lastName : "nik",
//     age : 55,
//     addres : {
// city : "tab"
//     },
//     family : undefined
// };

// const {firstNamee :name , lastName,age,addres:{city}, family = 'yes'} = user

// console.log(family);

// function showUser({ name, age , city }) {
//     console.log(`${name} is ${age}${city} years old.`);
//   }

//   showUser({ name: "Hamed", age: 30 ,city : 'tab'});

//   function getDate() {
//     return [1,2,3];
//   };

//   const [z,x,m,j] = getDate();

//   console.log(z ,x,m,j);

//   const person = {
//     name: "Nima",
//     age: 30,
//     job: "Developer",
//     city: "Tehran"
//   };

//   const {name , age } = person ;

//   console.log(`${name} is ${age} yers old`);

//   const numbers = [10, 20, 30, 40];
//   const [first , _ , third] = numbers;

//   console.log(first + third);

//   const data = {
//     user: {
//       name: "Sara",
//       contact: {
//         email: "sara@mail.com",
//         phone: "123"
//       }
//     }
//   };

//   const { user:{contact:{email ,phone}} } = data;

//   console.log(email);

//   const user = {
//     name: "Ali"
//   };

//   const {name , job = "freelancer"}=user;

//   console.log(  `${name} is ${job}`);

// const user = {
//     name: "Saba",
//     age: 28,
//     job: "Designer"
//   };

//   function userData({name , age}){
//     console.log(name,age);
//     return  `${name} is ${age}`
//   }
//   console.log(userData(user));

// const userInfo = {
//     username: "reza123",
//     email: "reza@mail.com",
//     age: 27,
//     password: "secret"
//   }

//   const {password , ...others} = userInfo;
//   console.log(others);

// function calculate(a, b) {
//     const add = a + b;
//     const subtract = a - b;
//     const multiply = a * b;
//     const divide = a / b;

//     return [add, subtract, multiply, divide];
//   }

//   const [add, subtract, multiply, divide] = calculate(4, 7);

// console.log(divide);

// const fields = ["name", "email", "phone"];
// const values = ["Ali", "ali@mail.com", "12345"];

// const obj = {};

// fields.forEach((mmad, i) => {
//   obj[mmad] = values[i];
// });

// console.log(obj);
// ------------------------------------------------------------------
// ------------------------------------------------------------------

//خیلی مهمه🔥🔥🔥
// const fieleds = ['name','email','phona'];
// const values = ['ali','ali@email.com','0654865'];
// const obj={};

// fieleds.forEach((fieled , i)=>obj[fieled]=values[i])
// console.log(obj);

// ------------------------------------------------------------------
// ------------------------------------------------------------------

// const keys = ['title', 'author', 'year'];
// const values = ['Clean Code', 'Robert C. Martin', 2008];

// function createBookObject(par1,par2){
// const obj = {};
//     par1.forEach((key,i) => obj[key]=par2[i]);
// return obj
// };
// console.log(createBookObject(keys,values));

// const user = {
//     name: "Ali",
//     age: 25,
//     password: "secret123",
//     email: "ali@mail.com"
//   };

//   const {name,email, ...others} =user;

// console.log(name ,email,others);

// function evenNubers(...num){
//    return num.filter(num => num % 2 === 0).length
// }
// console.log(evenNubers(1,2,3,4,5,65552,85,658,4,25,8,2,58,4,1,21,588,4));

// const movie = {
//     title: "Inception",
//     director: "Nolan",
//     year: 2010,
//     rating: 8.8
//   };

//   function harchi({title,year}) {
//     return `${title} : ${year}`
//   }console.log(harchi(movie));

// ----------------------------------------------------------------------------------------------------------------
// // ? یک تابع بنویس که آرایه‌ای از رنگ‌ها بگیره
// // todo: خروجی باید آبجکتی باشه با:
// firstColor, secondColor, otherColors
// Hint: از destructuring و shorthand استفاده کن

// const getColors = (firstColor , secondColor , ...otherColors) => ({firstColor,secondColor,otherColors});

//   console.log(getColors(...["red", "blue", "green", "yellow"]));
// Output => { firstColor: 'red', secondColor: 'blue', otherColors: ['green', 'yellow'] }

// ----------------------------------------------------------------------------------------------------------------

// ? یک تابع بنویس که آبجکت user بگیره
// todo: ازش name و age رو جدا کن، username و country اگر نبودن مقدار پیش‌فرض داشته باشن

// const greetUser = ({ name, age, username = "guest", country = "unknown" }) => ` Hello ${name} (${age}), your username is ${username} from ${country}`;

//   console.log(greetUser({ name: "Ali", age: 24 }));
//   // Output => Hello Ali (24), your username is guest from unknown.

// ----------------------------------------------------------------------------------------------------------------

// ? یک تابع که آرایه‌ای از اطلاعات یک دوره بگیره
// todo: ورودی مثل اینه: ['JavaScript', 'Ali', 20, 8]
// todo: خروجی آبجکتی باشه مثل:
// { course: 'JavaScript', teacher: 'Ali', sessions: 20, duration: 8 }

// const courseInfo = ([course, teacher, sessions, duration]) => ({course,teacher,sessions,duration});

//   console.log(courseInfo(['JavaScript', 'Ali', 20, 8]));

// ----------------------------------------------------------------------------------------------------------------

//   // ? دو تا آبجکت کاربر بگیر، و اطلاعاتشون رو توی یک آبجکت ترکیب کن
// // Hint: از spread استفاده کن

// const combineUsers = (user1, user2) => ({...user1,...user2});

//   console.log(combineUsers({ name: "Ali", age: 25 }, { email: "ali@mail.com", isAdmin: false }));
// Output => { name: 'Ali', age: 25, email: 'ali@mail.com', isAdmin: false }

// ----------------------------------------------------------------------------------------------------------------
// ? تابعی بنویس که یک آبجکت کتاب بگیره و خلاصه‌ای ازش بسازه
// Input: { title: 'Clean Code', author: 'Robert C. Martin', year: 2008 }
// Output: 'Clean Code (2008) by Robert C. Martin'

// const getBookSummary = ({title , author , year}) => `${title} ${(year)} by ${author}`;

// console.log(getBookSummary({ title: 'Clean Code', author: 'Robert C. Martin', year: 2008 }));

// ----------------------------------------------------------------------------------------------------------------

// function greet(name) {
//   console.log("hello "+ name);
// };

// function getUser(callBack) {
//   let Username = "ali";
//   callBack(name)
// };
// getUser(greet)

// function multiplier(factor) {
// return (num)=> num * factor;
// };
// const harchi = multiplier(10);

// console.log(harchi(2));

// const  creatCounter = () => {
//   let count = 0;

//   return () => ++count
// }

// const count = creatCounter();
// console.log(count());

// function secret() {
//   let  password = 12234 ;

//   return{
//     getPassword : ()=> password  ,
//     setPassword : (newPassWord)=> password = newPassWord
//   }
// }

// const secrets = secret();

// console.log(secrets.getPassword());
// secrets.setPassword("mmad")
// console.log(secrets.getPassword());

// function once(one) {
//   let nmedonam = false;
//   return ()=>{
//     if(!nmedonam){
// nmedonam = true;
// return one()
//     }else{
//       return " you can call this function once "
//     }
//   }
// };
// function sayMmad() {
//   return "mmad"
// };

// const namesss = once(sayMmad);

// function creatToDoList() {
//   let list = ["javescript"];
//   return {
//     add: (toDo) => {
//       list.push(toDo);
//     },
//     get: () => {
//       if (list.length === 0) return "empty";
//       return list;
//     },
//     remove: (rem) => {
//       if(!list.includes(rem)) return "invalid value"
//       let removoe = list.splice(list.indexOf(rem), 1);
//       return list;
//     },
//   };
// }
// const toDoList = creatToDoList();
// console.log(toDoList.get());
// toDoList.add("run");
// console.log(toDoList.get());
// console.log(toDoList.remove("javescript"));

// function creatTimeWatch() {
//   let count = 0;
//   let countTime = null;
//   let harchi = false;
//   return {
//     start(){
//       if(!harchi){
//         harchi = true;
//       if (countTime === null) {
//         countTime = setInterval(() => {
//           ++count;
//           console.log("count" + count);
//         }, 1000);
//       }
//     }},
//     pausez(){
//       if(harchi){
//         clearInterval(countTime);
//         countTime = null;
//         harchi = false;
//     }},
//     getTime(){return count},
//     reset(){
//       clearInterval(countTime);
//        count = 0;
//       harchi =false;
//       },
//   };
// }
// const time = creatTimeWatch();

// time.start(); // شروع می‌کنه

// setTimeout(() => {
//   time.pausez(); // بعد از 3 ثانیه متوقف میشه
//   console.log("paused at:", time.getTime());

//   setTimeout(() => {
//     time.start(); // دوباره ادامه میده
//     console.log("resumed");

//     setTimeout(() => {
//       time.pausez();
//       console.log("final pause at:", time.getTime());
//     }, 3000);
//   }, 2000);
// }, 3000);

// let hhh = [1,2,3]

// Array.prototype.mmad =function(func){❤️❤️❤️❤️
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     const el = this[i];
//     result.push(func(el))
//   };
// return result
// };
// console.log(hhh.mmad((n)=> n * 2));

// let name = "Global Name";

// function outer() {
//   let name = "Outer Name";

//   function inner() {
//     console.log(this.name);
//   }

//   inner();
// }

// outer();

// ----------------------------------------------------------------------------------------------------------------

// console.dir(document);

// const heading = document.querySelector("h1");
// heading.innerText = "oh is change";

// const byId = document.getElementById("with-id");

// console.log(byId);

// const allH1Tags = document.getElementsByTagName("h1");

// console.log(allH1Tags);

// const hading = document.getElementsByClassName("lalala")

// console.log(hading);
// console.dir(hading)

// const firstBtn = document.querySelector(".btn");

// console.log(firstBtn);

// firstBtn.style.backgroundColor = "lightblue";

// const allBtn = document.querySelectorAll(".btn");

// allBtn.forEach(btn => btn.style.backgroundColor="lightgreen")

// console.log(allBtn);

// const specialBtn = document.querySelector('.special');
// specialBtn.style.backgroundColor = 'gold';
// specialBtn.style.color = 'black';

// console.dir(specialBtn);

// const showH1= document.querySelector(".lalala");
// // showH1.innerText = "aga mmad"
// console.log(showH1.innerText);

// const container = document.querySelector("#container");

// container.innerHTML ="<p>hi <strong>good frind</strong></p>";


const mmad = document.querySelector("h1");
// // mmad.classList.add("aahh");
// // mmad.classList.remove("aahh");
// // mmad.classList.toggle("lalalalalh");
// // mmad.classList.contains("SDFGSDFH")

// mmad.style.color = "black";
// mmad.style.backgroundColor = "red";
// mmad.style.fontSize = "50px";
// mmad.style.display = "none"
// console.log(mmad.getAttribute("class"));


// const img = document.querySelector(".la");
// img.setAttribute("src" , "https://images.squarespace-cdn.com/content/v1/609cd635381d020cf289d7c2/6f6a16f8-e3c6-429f-bcbd-3565da2f7bfc/mmad-tag.jpg")
// img.setAttribute("alt" , "mmad imgs")
// img.setAttribute("alt","mmad is buty");

// console.log(window.getComputedStyle(mmad).font);


// const google = document.querySelector("#googleLink");
// google.href='https://openai.com'
// console.log(google.getAttribute("href"));




// const child = document.querySelector("#child");
// console.log(child.parentElement); // <div id="parent">...</div>



const parent = document.querySelector("p");
console.log(parent.nextSibling); 