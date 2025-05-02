//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops

const allImgs = document.querySelectorAll("img");

for (let i = 0; i < allImgs.length; i++) {
  if (i % 2 === 0) {
    allImgs[i].style.border = "10px solid dodgerblue";
  } else {
    allImgs[i].style.border = "11px dotted greenyellow";
  }
}
