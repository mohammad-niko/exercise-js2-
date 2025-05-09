// ?Question-3:follow these steps:
// todo-1:select "ul" element with "navbar" class.
// todo-2:add the items of the navbarItem array to the "ul" element by appending them as <li> elements.
// todo-3:Add the class "item" to each <li> element.
// todo-4:Edit the <li> tags according to the image.(You can check the help folder or use the following style for each <li> element)
/**
  {
    margin: 0 1rem;
    cursor: pointer;
  }
*/
// !Answer:
const navbarItem = ["Home", "Products", "Blog", "Contact us"];

const ulTag = document.querySelector(".navbar");

for (let li of navbarItem) {
  const liTag = document.createElement("li");

  liTag.innerText = `${li}`;

  ulTag.appendChild(liTag);
  liTag.setAttribute("class", "liTags");
}

const liTags = document.querySelectorAll(".liTags");

liTags.forEach((li) => {
  li.style.margin = "0 1rem";
  li.style.cursor = "pointer"
  li.style.fontSize = "25px";
});
