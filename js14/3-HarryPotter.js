//! ** You should not modify HTML codes.
//? The photos are duplicated and wrong. :((
// todo1: please go and find a picture for each character that mentioned in cards in HarryPotter.html .
// todo2: assign the picutre of each character to it's card.

/**WRITE CODE BELOW */
const characters = {
    "Hermione-Granger": {
      src: "https://upload.wikimedia.org/wikipedia/en/d/d3/Hermione_Granger_poster.jpg",
      alt: "Hermione Granger",
    },
    "Ron-Weasley": {
      src: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ron_Weasley_poster.jpg",
      alt: "Ron Weasley",
    },
    "Severus-Snape": {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4en6mCJxTpZAzqJgLtdttOnoNS2pzCul2fEKK07R5VP_sckDBX6QOSHSXvgRSLGyhMs&usqp=CAU",
      alt: "Severus Snape",
    },
    "Draco-Malfoy": {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr6u7pzy8b-nwqSy1zyGhb9Ncnd4ary4p_8Q&s",
      alt: "Draco Malfoy",
    },
    "Cedric-Diggory": {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2CdjeesdZpYEtlAs1y9QFvULq9VUzluobxA&s",
      alt: "Cedric Diggory",
    },
    "Lord-Voldemort": {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_1oW7o12fcGJSDdTf8kgQfQUbZARiMJ0JA&s",
      alt: "Lord Voldemort",
    },
    "Bellatrix-Lestrange": {
      src: "https://assets.mugglenet.com/wp-content/uploads/2018/02/Bellatrix-Reason-3.jpg",
      alt: "Bellatrix Lestrange",
    },
  };
  
  for (let id in characters) {
    const character = document.querySelector(`#${id}`);
    character.src = characters[id].src;
    character.alt = characters[id].alt;
     }


    //  Object.entries(characters).forEach(([id, { src, alt }]) => {
    //     const characterImg = document.querySelector(`#${id}`);
      
    //     if (characterImg) {
    //       characterImg.src = src;
    //       characterImg.alt = alt;
      
    //     
    //       characterImg.style.transition = "transform 0.3s ease";
    //       characterImg.addEventListener("mouseover", () => {
    //         characterImg.style.transform = "scale(1.1)";
    //       });
    //       characterImg.addEventListener("mouseout", () => {
    //         characterImg.style.transform = "scale(1)";
    //       });
    //     }
    //   });