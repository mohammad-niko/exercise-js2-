const div = document.querySelector("#content");

function highlightWords(paragraph, colours) {
  const select = document.createElement("select");
  div.appendChild(select);
  const p = document.createElement("p");
  div.appendChild(p);
  colours.forEach((color) => {
    const option = document.createElement("option");
    option.textContent = color;
    option.value = color;
    select.appendChild(option);
  });

  const arrayOfPar = paragraph.split(" ");
  arrayOfPar.forEach((str) => {
    const span = document.createElement("span");
    span.textContent = str + " ";
    p.appendChild(span);
  });

  p.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
      select.value === "none"
        ? (e.target.style.backgroundColor = "transparent")
        : (e.target.style.backgroundColor = select.value);
    }

    console.dir(e.target.tagName === "SPAN");
  });
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
