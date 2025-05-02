/*
?We want to make a beautiful text.
todo1: receive a text from the user via a prompt.
todo2: each letter of the given text should pick a random color from the colors array.
todo3: finally display the text in the html file.
*/
const colors = ["red", "aqua", "orange", "purple", "lightgreen"];

const textDiv = document.querySelector("#word");
const user = prompt("writ a text please (❁´◡`❁)");

const random = () => Math.floor(Math.random() * colors.length);

for (let i = 0; i < user.length; i++) {
  const span = document.createElement("span");
  span.textContent = user[i];

  span.style.color = colors[random()];
  textDiv.appendChild(span);
}
textDiv.style.fontSize = "5rem";
