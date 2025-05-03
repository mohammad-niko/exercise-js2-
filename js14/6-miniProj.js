//-Develop the following application, use the following HTML elements to get started with.

//? watch the html code inside miniProj.html
//? Apply all the styles and functionality using JavaScript only.

//todo1: color of the year text in h1 (2020) is changing every 1 second
//todo2: Completed challenge has background green
//todo3: Ongoing challenge has background yellow
//todo4: Coming challenges have background red

const h1 = document.querySelector("h1");

const h1Span = document.createElement("span");

h1Span.innerText = "2020";

h1.innerText = "Asabeneh Yetayeh challenges in ";
h1.appendChild(h1Span);

console.log(h1);

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

setInterval(() => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  h1Span.style.color = rndCol;
}, 1000);

const listItem = document.querySelectorAll("ul li");

listItem.forEach((li) => {
  if (li.innerText.includes("Done")) {
    li.style.backgroundColor = "green";
  } else if (li.innerText.includes("Ongoing")) {
    li.style.backgroundColor = "yellow";
  } else if (li.innerText.includes("Coming")) {
    li.style.backgroundColor = "red";
  }
});
