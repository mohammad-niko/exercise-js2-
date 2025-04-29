//? You have an object with a string property. Implement a method named counterString for the object that performs the following tasks:
//todo1: Convert the received string into an array based on spaces.
//todo2: Calculate the length of each element in the array.
//todo3: Return a new array containing the lengths of the elements.

const obj = {
  string: "Hello world how are you?",
  counterString(str) {
    return str.split(" ").map((word) => word.length);
  },
};

console.log(obj.counterString(obj.string));

// note: obj.counterString("Hello world how are you?")==>[ 5, 5, 3, 3, 4 ]

// !Answer:
//  میتونیم این کارم بکنیم که کلا به یهه متود واقعی تبدیل شه البته این کار درسته از لحاض فت مجازه ولی کار درستی نیست انجام دادنش

const { string } = obj;


Array.prototype.counterString =function(str){
  return this.map((x) => x.length);
};


const toArr = string.split(" ")
 console.log(toArr.counterString());