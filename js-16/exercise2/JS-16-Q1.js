const circle = document.querySelector(".circle");
const blocks = document.querySelectorAll(".block");

let positionX = 0;
let positionY = 0;

document.addEventListener("keydown", moveCircle);

function moveCircle(e) {
  // write code here
  switch (e.key) {
    case "ArrowUp":
      circle.style.top = `${(positionY -= 50)}px`;
      break;
    case "ArrowDown":
      circle.style.top = `${(positionY += 50)}px`;
      break;
    case "ArrowRight":
      circle.style.left = `${(positionX += 50)}px`;
      break;
    case "ArrowLeft":
      circle.style.left = `${(positionX -= 50)}px`;
      break;
    default:
      alert("you can just us of arrows");
  }
  // circle.style.left = //?
  // circle.style.top = //?

  blocks.forEach((block) => {
    if (checkCollision(circle, block)) {
      block.style.display = "none";
    }
  });
}

function checkCollision(element1, element2) {
  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();
  console.log(rect1 );
  console.log(rect2 );
  return (
rect1.left < rect2.right &&
rect1.right > rect2.left &&
rect1.bottom > rect2.top &&
rect1.top < rect2.bottom
  );
}