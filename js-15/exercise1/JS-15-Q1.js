// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:

const body = document.querySelector("body");
const heroTag = document.querySelector(".hero");
const img = document.querySelector("#strangeFish");
const h1 = document.querySelector(".hero__title");
const h5 = document.querySelector(".hero__subtitle");

body.style.backgroundColor = "#0a122d";

img.style.margin = "4rem 0";

img.style.borderRadius = "1rem";


h1.style.top = "80px";
h1.style.left = "30px";
h1.style.fontSize = "25px";
h5.style.top = "110px";
h5.style.left = "30px";
h5.style.fontSize = "25px";






