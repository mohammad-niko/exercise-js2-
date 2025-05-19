// ? Display the following array on the page
// ? First, watch the video in the help folder.
// todo-1: In the next step, review the HTML and CSS files.
// todo-2: Iterate over the "data" array and create a card for each array index.
// todo-3: Append the created card to the element with the class "cards".
// todo-4: Each card should have a button; when clicked, the card title should be displayed on the element with the class "cardSelected".
const body =document.querySelector("body");
const wrapper = document.querySelector(".cards");
const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

// !Answer:

  const h1TopOfThePage = document.createElement("h1");
  body.insertAdjacentElement("afterbegin", h1TopOfThePage);

data.forEach(({ id, title, src, account, accountImage }) => {
  const sectionCard = document.createElement("section");
  sectionCard.classList.add("cards__card");
  wrapper.appendChild(sectionCard);

  //img section
  const sectionCardImg = document.createElement("section");
  sectionCardImg.classList.add("cards__card__img");
  sectionCard.appendChild(sectionCardImg);
  //img
  const cardImg = document.createElement("img");
  cardImg.setAttribute("src", src);
  cardImg.setAttribute("alt", "img-card");
  sectionCardImg.appendChild(cardImg);
  //img icon section;
  const cardsCardIconSection = document.createElement("section");
  cardsCardIconSection.classList.add("cards__card__img__icon");
  sectionCardImg.appendChild(cardsCardIconSection);

  //img icon
  const iconHart = document.createElement("i");
  iconHart.classList.add("ri-heart-3-line");
  cardsCardIconSection.appendChild(iconHart);
  //p of icon
  const parHartIcon = document.createElement("p");
  parHartIcon.classList.add("cards__card__img__icon__text");
  parHartIcon.textContent = 100;
  cardsCardIconSection.appendChild(parHartIcon);
  // this section img done

  // section of cards body  ;
  const sectionOfBodyImg = document.createElement("section");
  sectionOfBodyImg.classList.add("cards__card__body");
  sectionCard.appendChild(sectionOfBodyImg);

  //section card body title;
  const sectionCardBodyTitle = document.createElement("section");
  sectionCardBodyTitle.classList.add("cards__card__body__title");
  sectionOfBodyImg.appendChild(sectionCardBodyTitle);

  //h2 of section card body title

  const h2OfCardBodyTiltle = document.createElement("h2");
  h2OfCardBodyTiltle.textContent = title;
  sectionCardBodyTitle.appendChild(h2OfCardBodyTiltle);

  // span of section card body title;

  const spanOfCardBodyTiltle = document.createElement("span");
  spanOfCardBodyTiltle.textContent = "BSC";
  sectionCardBodyTitle.appendChild(spanOfCardBodyTiltle);

  // this section done;

  //part cards footer:
  const sectionOfFooter = document.createElement("section");
  sectionOfFooter.classList.add("cards__card__footer");
  sectionCard.appendChild(sectionOfFooter);

  // section cards footer acoount :
  const cardsFooterAccount = document.createElement("section");
  cardsFooterAccount.classList.add("cards__card__footer__account");
  sectionOfFooter.appendChild(cardsFooterAccount);

  //img of cards footer:
  const imgOfFooter = document.createElement("img");
  imgOfFooter.setAttribute("src", accountImage);
  imgOfFooter.setAttribute("alt", "footer img");
  cardsFooterAccount.appendChild(imgOfFooter);

  //h4 of footer acount title:
  const h4OfAcountTitle = document.createElement("h4");
  h4OfAcountTitle.textContent = account;
  cardsFooterAccount.appendChild(h4OfAcountTitle);
  //in this line footer card acount done;

  // section cards foter btn :
  const cardsfooterSctionBtn = document.createElement("section");
  cardsfooterSctionBtn.classList.add("cards__card__footer__btn");
  sectionOfFooter.appendChild(cardsfooterSctionBtn);

  // button footer :
  const button = document.createElement("button");
  cardsfooterSctionBtn.appendChild(button);

  //icon of button :
  const iconOfButton = document.createElement("i");
  iconOfButton.classList.add("ri-handbag-line");
  button.appendChild(iconOfButton);

  // p of button:
  const pOfButton = document.createElement("p");
  pOfButton.textContent = "Plase Bid";
  button.appendChild(pOfButton);

  //add event for button ;


  button.addEventListener("click", () => {
    h1TopOfThePage.textContent = `you celected card #${id}`;
h1TopOfThePage.style.color="pink"
  });
});
