// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:

const heart = document.querySelector(".cards__card__img__icon i");
const number = document.querySelector("#counter");

heart.addEventListener("click", () => {
  heart.classList.toggle("active");
  if (heart.classList.contains("active")) {
    heart.style.color = "red";
    number.textContent = "101";
  } else {
    heart.style.color = "white";
    number.textContent = "100";
  }
});

let nnumber = 100;
heart.addEventListener("click", () => {
  heart.style.color = "red";

  number.textContent = `${++nnumber}`;
});
