/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

const article = document.querySelector("article");
article.classList.add("container");
article.classList.add("row");
// ! Answer

async function getData() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  try {
    const fet = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      config
    );
    const data = await fet.json();
    data.forEach((data) =>createElement(data) );
  } catch (error) {
    console.log(error);
  }
}
getData();

function createElement(obj) {
  const { name, company } = obj;

  //  create Element and add class list
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  divCard.classList.add("col-3");
  divCard.classList.add("m-4");
  article.appendChild(divCard);

  const divCardBody = document.createElement("div");
  divCardBody.classList.add("card-body");
  divCard.appendChild(divCardBody);

  const firstH4 = document.createElement("h4");
  firstH4.classList.add("card-title");
  firstH4.textContent=name
  divCardBody.appendChild(firstH4);

  const secondH5 = document.createElement("h5");
  secondH5.classList.add("card-subtitle");
  secondH5.textContent=`company name: ${company.name}`
  divCardBody.appendChild(secondH5);

  const link = document.createElement("a");
  link.classList.add("btn");
  link.classList.add("btn-primary");
  link.textContent = "View Profile";
  link.setAttribute("href", "#");
  divCardBody.appendChild(link)
}
