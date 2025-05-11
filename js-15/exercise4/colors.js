/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

*/
const colors = [
  "rgba(31, 127, 102, 1)",
  "rgba(255, 200, 0, 1)",
  "rgba(255, 123, 0, 1)",
  "rgba(216, 1, 1, 1)",
  "rgba(223, 4, 70, 1)",
  "rgba(127, 31, 85, 1)",
  "rgba(93, 18, 199, 1)",
];
const allCircles = document.querySelectorAll(".circles-divs");
const allRectangles = document.querySelectorAll(".rectangles");

allCircles.forEach((div, i) => {
  div.addEventListener("click", () => {
    const isActive = div.classList.contains("tog");
    allCircles.forEach((div, index) => {
      div.classList.remove("tog");
      div.style.transform = "scale(1)";
      div.style.backgroundColor = `${colors[index]}`;
      if (div.firstChild) {
        div.firstElementChild.remove();
      }
    });

    if (!isActive) {
      div.classList.add("tog");
      div.style.backgroundColor = "white";
      div.style.transform = "scale(1.2)";
      const mmad = document.createElement("div");
      div.insertAdjacentElement("afterbegin", mmad);
      mmad.style.backgroundColor = `${colors[i]}`;
      mmad.classList.add("child-circle");
    }
  });
});

const colorss = [
  "rgba(31, 127, 102,",
  "rgba(255, 200, 0,",
  "rgba(255, 123, 0,",
  "rgba(216, 1, 1,",
  "rgba(223, 4, 70,",
  "rgba(127, 31, 85,",
  "rgba(93, 18, 199,",
];

const opacity = [1, 0.8, 0.6, 0.4, 0.2];

allCircles.forEach((clr, i) => {
  clr.addEventListener("click", () => {
    const isActiveRec = clr.classList.contains("active-circle");
    allCircles.forEach((clr) => clr.classList.remove("active-circle"));
    allRectangles.forEach((rec) => {
      rec.style.border = " 1.5px solid #e1d5e3";
      rec.style.backgroundColor = "white";
    });
    if (!isActiveRec) {
      allRectangles.forEach((rec, index) => {
        clr.classList.add("active-circle");
        rec.style.backgroundColor = `${colorss[i]}${opacity[index]})`;
        rec.style.border = `1.5px solid ${colorss[i]}${opacity[index]})`;
      });
    }
  });
});
