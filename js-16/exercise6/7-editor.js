/*
Look at editor.png, you should create a text editor similar to that.

- The first button removes the last letter when clicked.
- The second button deletes the entire text when clicked.
- The third button bolds the text when clicked.
- The fourth button italicizes the text when clicked.
*/
const parentOfButtoms = document.querySelector(".circles-par");
const textTarea = document.querySelector("#texttarea");
parentOfButtoms.addEventListener("click", (e) => {
  if (e.target.classList.contains("first-cir")) {
    textTarea.value = textTarea.value.slice(0, -1);
  }
  if (e.target.classList.contains("second-cir")) {
    textTarea.value = "";
  }

  if (e.target.classList.contains("third-cir")) {
    console.log(e.target.classList.toggle("active"));
    console.log(e.target.classList);
    if (e.target.classList.contains("active")) {
      textTarea.style.fontWeight = "bold";
    } else {
      textTarea.style.fontWeight = "normal";
    }
  }

  if (e.target.classList.contains("fourth-cir")) {
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      textTarea.style.fontStyle = "italic";
    } else {
      textTarea.style.fontStyle = "normal";
    }
  }
});