// let mmad;
// console.log("first");
// function orther() {
// console.log("berfor settime");
// setTimeout(() => {
//   mmad = "call goli"
// }, 2000);
// console.log("after settime");
// console.log(`mmad ${mmad}`);
// }
// orther()
// console.log("after function");

// let p = new Promise(function(resolve, reject) {
//    setTimeout(function() {
//       resolve();
//    }, 3000);
// });
// p.then((res)=>{
//   console.log(res);
// })

// let p = new Promise(function(resolve, reject) {
//    resolve('First');
// });

// p.then(function(data) {
//    console.log(data);
// });

// console.log('Second');

// let p = new Promise(function(resolve) {
//      resolve("OK");
// });

// let p2 = p.then(function(data) {
//     return data;
// });

// let p3 = p2.then(function(data) {
//     return data + " Bye";
// });

// p3.then((data)=>{
//   console.log(data);
// })

// let p = new Promise(function (resolve, reject) {
//   reject('Sorry');
// })
// .then((data) => console.log(data))
// .catch((err) =>{});
// console.log(p);

// let p = new Promise(function(resolve, reject) {
//     resolve("OK");
// });

// let p2 = p.then(function(data) {
//     return data;
// });

// let p3 = p.then(function(data) {
//     return data;
// });

// console.dir(p2 );
// console.dir(p3 )
// console.error(p2 === p3)

//  --------------------------------------------------------------------------------------
// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }

// const add = async (x) => {
//     try {
//         console.log("mmad");
// const fakeApi =await resolveAfter2Seconds(10);
// const apiFake =await resolveAfter2Seconds(1)
// return x+fakeApi+apiFake
//     } catch (error) {
//         console.log(error);
//     }

// }
// add(20).then((v)=>{
// console.log(v);
// })

// async function getWeather() {
//   try {
//     const data = await fetch(
//       "https://api.open-meteo.com/v1/forecast?latitude=35.6892&longitude=51.3890&current_weather=true",{
//         method:"GET",
//         headers:{
//            Accept: 'application/json'
//         }
//       }
//     );
//     console.log(data);
//     const toJava = await data.json();
//     const { current_weather: wat } = toJava;
//     const { temperature } = wat;
//     console.log(temperature);
//   } catch(err) {
//     console.log(`Error : ${err}`);
//   }
// }

// getWeather()

// console.log(Object.prototype);

// function getInfo(name, level) {
//   return {
//     name,
//     level,
//     introduce() {
//       console.log(`hello,I'm ${this.name} and my level is ${this.level}`);
//     },
//   };
// }
// const person1 = getInfo("mmad", "medlevel");
// // person1.introduce();
// const person2 = getInfo("ali", "basice");
// person2.introduce();

// function Person(name, level) {
//   (this.name = name), (this.level = level);
// }
// Person.prototype.introduce = function () {
//   console.log(`Hello,my name is ${this.name} my level is ${this.level}`);
// };
// const per = new Person("mmad", "00");
// // per.introduce();

// console.log(per instanceof Person );// با این میتونم برسی کنیم که کدام ابجکت مال کدام کانسترکت هست

// class Person {
//   constructor(name, level) {
//     (this.name = name), (this.level = level);
//   }

//   introduce() {
//     console.log(`Hello,my name is ${this.name} my level is ${this.level}`);
//   }
// }

// const per1 = new Person("mmad", "00");
// per1.introduce();

// class Student extends Person {
//   constructor(name, level, subject) {
//     super(name, level);
//     this.subject = subject;
//   }
//   study(){
//     console.log(`${this.name} is studying ${this.subject}`);
//   }
// }

// const studernt1 = new Student("Ali", "Intermediate", "Math");
// studernt1.study()

// class Animal  {
//   constructor(type,name){
//     this.type=type;
//     this.name=name;
//   }
//   speak(){
//     console.log(`I am a ${this.type} and my name is ${this.name}`);
//   }
// };

// class Dog extends Animal  {
//   constructor(type,name,breed){
//     super(type,name);
//     this.breed=breed
//   }

//   speak(){
//     console.log(`woof🐶 ,I am a ${this.name} , a ${this.breed} dog`);
//   }
// }

// ============================================================================================================================================

// class User {
//   #username;
//   #jobuser;
//   constructor(name, job) {
//     this.#username = name;
//     this.#jobuser = job;
//   }

//   introduce() {
//     return `Hi my name is ${this.#username} and I'm a ${this.#jobuser}`;
//   }

//   get username() {
//     return this.#username;
//   }
//   get jobuser() {
//     return this.#jobuser;
//   }
// }
// class Student extends User {
//   #usersubject;
//   constructor(name, job, subject) {
//     super(name, job);
//     this.#usersubject = subject;
//   }
//   study() {
//     console.log(
//       `${this.introduce()} nmidonam hala harchi ${this.#usersubject}`
//     );
//   }
// }

// class Teacher extends User {
//   #titleunit;
//   constructor(name, job, title) {
//     super(name, job);
//     this.#titleunit = title;
//   }

//   lesson() {
//     console.log(
//       `Hi my name is ${this.username} . i teach ${
//         this.#titleunit
//       } because  I'm a ${this.jobuser}`
//     );
//   }

//   get titleunit(){
//     return this.#titleunit
//   }

//   set titleunit(newTitle){
//     (newTitle.length > 3)? this.#titleunit = newTitle : "Name must be at least 3 characters long.";
//   }
// }
// const student1 = new Student("Ali", "Student", "Math");
// student1.study();

// const teacher1 = new Teacher("Mr. Smith", "Teacher", "Physics");
// teacher1.lesson();

// class Person {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     return this.#name;
//   }
// }

// const person = new Person("Ali");
// console.log(person.name);

// get: برای خواندن یا دریافت مقدار از یک ویژگی استفاده می‌شود.

// set: برای نوشتن یا تغییر مقدار یک ویژگی استفاده می‌شود.

// get مقدار را برمی‌گرداند و set مقدار را تنظیم می‌کند.



// ============================================================================================================================================


// function giveRaise(employee, percent) {
//   return {
//     ...employee,
//     salary: employee.salary + employee.salary * (percent / 100),
//   };
// }

// const emp2 = { name: "Sara", job: "Designer", salary: 1200 };
// const newEmp2 = giveRaise(emp2, 10);

// console.log(`${newEmp2.name} is a ${newEmp2.job} and earns $${newEmp2.salary}`);
// console.log(giveRaise(emp2, 10));






const events = {};  // این یک شیء خالی است که برای نگهداری لیست رویدادها و callbackها استفاده میشه

 const EventEmitter = {
  // on: برای ثبت کردن یک تابع callback برای رویدادی خاص
  on(eventName, callback) {
    if (!events[eventName]) events[eventName] = [];  // اگر رویداد وجود نداشت، یک آرایه برای آن بساز
    events[eventName].push(callback);  // تابع callback رو در آرایه مربوط به event اضافه کن
  },

  // emit: برای انتشار رویداد و اجرای تمام callbackهایی که برای آن ثبت شده‌اند
  emit(eventName, data) {
    if (events[eventName]) {  // اگر رویدادی برای این نام وجود داشته باشد
      events[eventName].forEach(cb => cb(data));  // برای هر callback، داده را ارسال کن
    }
  },
};


function submitForm(data) {
  console.log("Form submitted:", data);  // نمایش داده‌هایی که فرستاده شده
  EventEmitter.emit("formSubmitted", data);  // انتشار رویداد "formSubmitted" با داده‌ها
}

// ثبت callback برای زمانی که رویداد "formSubmitted" منتشر می‌شود
EventEmitter.on("formSubmitted", (data) => {
  console.log("✅ Registration Successful for", data.name);  // نمایش پیامی که داده ارسال شده را نشان می‌دهد
});


submitForm({ name: "Ali" });