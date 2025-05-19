let randomNumber = Math.floor(Math.random() * 100 + 1);
const output = document.querySelector(".final-output");
const triesOt = document.querySelector(".Tries-output");
const input = document.querySelector(".inputs-Values");
console.log(randomNumber);

let guessTrak = 7;
triesOt.textContent = `Number of Tries :${guessTrak} `;

let gameOver = false;

function guessNumber(e) {
  if (gameOver) return;
  let guess = document.querySelector(".inputs-Values").value;

  if (!guess || guess <= 0 || guess > 100) {
    output.textContent = "Please enter a number between 1 and 100";
    return;
  }

  guessTrak--;
  triesOt.textContent = `Number of Tries : ${guessTrak}`;
  if (guessTrak < 1) {
    output.style.display = "none";
    triesOt.textContent = `You Lose, the number was ${randomNumber}`;
    gameOver = true;
    return;
  }

  if (+guess === randomNumber) {
    triesOt.textContent = `It took you ${Math.abs(guessTrak - 7)} tries`;
    output.textContent = "Guess is correct. You win!";
    gameOver = true;
    return;
  }

  output.textContent =
    guess > randomNumber
      ? "Number is too high, try again"
      : "Number is too low, try again";
}

function newGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  input.value = "";
  output.textContent = "Guess a number between 1 and 100";
  output.style.display = "block";
  guessTrak = 7;
  triesOt.textContent = `Number of Tries :${guessTrak} `;
  gameOver = false;
}
document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
