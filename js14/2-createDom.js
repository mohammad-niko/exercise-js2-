//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

const firstP = document.querySelector("p");
const secondP = document.querySelector("#byId2");
const third = document.querySelector("#byId3");
const fourth = document.querySelector("#byId4");
const allPTags = document.querySelectorAll("p");

for (let i = 0; i < allPTags.length; i++) {
  console.log(allPTags[i].textContent);
}

fourth.textContent = "Set a text content to the fourth paragraph";

firstP.setAttribute("id", "setId1");
secondP.setAttribute("id", "setId2");
third.setAttribute("id", "setId3");
fourth.setAttribute("id", "setId4");

allPTags.forEach((p) => (p.className = "setClassName"));

// firstP.style.fontSize = "5rem";
// firstP.style.fontFamily = "Arial";

// secondP.style.color = "green";
// secondP.style.backgroundColor = "blue";

// third.style.fontSize = "5rem";
// third.style.fontFamily = "Arial";

// third.style.color = "green";
// third.style.backgroundColor = "blue";

// fourth.style.backgroundColor = "red";
// fourth.style.border = "10px solid black";


for (let i = 0; i < allImgs.length; i++) {
  if (i % 2 === 0) {
    allPTags[o].style.color = "red";
  } else {
    allPTags[e].style.color = "green";
  }
}
