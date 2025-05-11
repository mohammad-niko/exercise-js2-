// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const body = document.querySelector("body");
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];

printPersons(persons);

function printPersons(mmad) {
  mmad.forEach(({ name, age }) => {
    const div = document.createElement("div");
    div.textContent = `name:${name}, age:${age}`;
    body.appendChild(div);
  });
}
