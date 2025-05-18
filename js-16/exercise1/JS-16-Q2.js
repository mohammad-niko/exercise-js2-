//? Question-2:Write a code that, upon clicking a button labeled "Place Bid" changes its text to "Added to Cart" and disables the button (you can modify the style if necessary).
// hint: watch help.mp4
//!Answer:

const button = document.querySelector(".cards__card__footer__btn button");
const p = document.querySelector(".cards__card__footer__btn button p");
const i = document.querySelector(".cards__card__footer__btn button i");

button.addEventListener("click", () => {
  p.textContent = "Added to Cart";
  // i.remove();

button.disabled = true

});
