//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var   


// const is used for values that should not change.

// let is used for values that may change.

// var is rarely used in modern code because it has scope-related issues.
 
for (var i = 0 ; i < 10 ; i++){//❌❌

}
console.log(i);
// به این دلیل از var  استفاده نمی کینم

// todo:arrow function

const arrowFunc = () => {}
//به دلیل خوانایی بیشتر
const sayHello = (name) => {
    return `Hello ${name}`;
  };
  console.log(sayHello("mmad"));


// todo:template string instead of "" and ''

//والا من چیه اینو توضیح بدم
// هم خواناییه بهتری داره و هم اینکه در متن های بلند تر خیلی کمک کننده هست کار رو راحت میکنه


const name1 = "Ali";
const greeting = `Hello ${name}!`;
console.log(greeting);




// todo:destructuring

// قبل از دیستراکچرینگ
const user = { name: "Ali", age: 25 };
const name2 = user.name;
const age = user.age;
console.log(name, age);

//بعد از 

const user2 = { name: "Ali", age: 25 };
const { name, age2 } = user;
console.log(name, age);


//خدا وکیلی حال میکنی

