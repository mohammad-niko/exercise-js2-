// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer

const stars = document.querySelectorAll(".fa-star");

stars.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("tog");
    if (i.classList.contains("tog")) {
      i.style.color = "rgba(255, 200, 0, 1)";
    } else {
      i.style.color = "#e6e6e6";
    }
  });
});
