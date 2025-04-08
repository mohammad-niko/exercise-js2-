//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
// todo2: and then after 5 seconds logs “ready?”
// todo3: and finally logs “🚀”  every one second
// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:

console.log("wait 5 sec");

const wait = setTimeout(() => {
    console.log("ready");//Iran : ready?           USA : Nooooooooo😥😥
    const everySecond  = setInterval(() => {
        console.log("🚀");//Iram : attack🔥🔥
    }, 1000);
 const cleanSet  = setTimeout(() => {
    clearInterval(everySecond)
 }, 10000); 
}, 5000);