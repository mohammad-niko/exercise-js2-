const h6 = document.querySelector("h6");
const pTag = document.querySelector("p");
const btn = document.querySelector(".btnn");
const loadingIndicator = document.getElementById("loading");

async function getAdvice() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  loadingIndicator.style.display = "block";
  pTag.textContent = "";
  try {
    const get = await fetch("https://api.adviceslip.com/advice", config);
    if (!get.ok) throw new Error("HTTP error! status: " + get.status);
    const { slip } = await get.json();
    console.log(slip);
    const { id, advice } = slip;
    h6.textContent = `ADVICE #${id}`;
    pTag.textContent = `“${advice}”`;
  } catch (error) {
    console.log(error);
  } finally {
    loadingIndicator.style.display = "none";
  }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getAdvice();
});

document.addEventListener("DOMContentLoaded", getAdvice);


  
//  p tag animation:
pTag.classList.remove("fade-in");
void pTag.offsetWidth;
pTag.classList.add("fade-in");
