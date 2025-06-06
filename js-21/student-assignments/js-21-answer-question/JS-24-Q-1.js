//? Question-3: Follow these steps:
//todo-1: Write a Factory function (function name must be: createPerson).
//todo-2: The createPerson factory function accepts three parameters: name, age, and profession
//todo-3: Define a method (method name must be: introduce) on the object. This method must return this structure: "Hi, my name is (name). I'm (age) years old and work as a (profession)."
//todo-4: Then display below outputs using the function createPerson with these parameters: (name: John Doe, age: 30, profession: Web Developer, or our personal information).
/**
 * Output: John Doe
 * Output: 30
 * Output: Web Developer
 * Output: Hi, my name is John Doe. I'm 30 years old and work as a Web Developer.
 *
 */

//!Answer:

function createPerson(name, age, profession) {
  return {
    name: name,
    age: age,
    profession: profession,

    introduce() {
      return `Hi,my name is ${name} I am ${age} years old and work as a ${profession}`;
    },
  };
}

const person1 = createPerson("John Doe", 30, "Web Developer");

console.log(person1.name);
console.log(person1.age);
console.log(person1.profession);
console.log(person1.introduce());

const names = [
  createPerson("mmad", 20, "front end"),
  createPerson("John Doe", 30, "Web Developer"),
];
