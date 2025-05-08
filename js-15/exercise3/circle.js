/*
  todo 1: look at index.html and style.css
  todo 2: make a square with div#square and inside that div put a filled circle 🟠
  todo 3: make a button and use events when its clicked remove the circle
*/

// ! ========== Answers ==========

//create Elements
const parent = document.createElement("div");
parent.setAttribute("id", "square");
const child = document.createElement("div");
child.setAttribute("id", "circle");

//slect:
const body = document.querySelector("body");

//apped:
body.appendChild(parent);
parent.appendChild(child);

//parent style:
parent.style.width = "200px";
parent.style.height = "200px";
parent.style.border = "1px solid black";
parent.style.borderRadius = "14px";
parent.style.position = "relative";

// child style:
child.style.width = "100px";
child.style.height = "100px";
child.style.borderRadius = "50%";
child.style.backgroundColor = "midnightblue";
child.style.position = "absolute";
child.style.top = "50px";
child.style.left = "50px";

// create button Element:
const button = document.createElement("button");
body.appendChild(button);
button.innerText = "Remove Circle";

// envent:
button.addEventListener("click", () => {
  child.remove();
});
