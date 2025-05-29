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
