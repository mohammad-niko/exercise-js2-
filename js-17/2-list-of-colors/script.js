function listOfColours(colours) {
  // Write your code here...
  const div = document.querySelector("#content");
  const select = document.createElement("select");
  const textSelect = document.createElement("option");
  textSelect.textContent = "select a colour";
  textSelect.selected = true;
  textSelect.disabled = true;
  select.appendChild(textSelect);
  div.appendChild(select);

  colours.forEach((coler) => {
    const option = document.createElement("option");
    option.textContent = coler;
    option.value = coler;
    select.appendChild(option);
  });
  const p = document.createElement("p");
  div.appendChild(p);
  select.addEventListener("change", (e) => {
    p.textContent = `You have selected: ${e.target.value}`;
    p.style.color = e.target.value;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
