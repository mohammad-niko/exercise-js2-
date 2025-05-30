//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...

async function replaceData(obj) {
  const hed = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.put(
      "https://683967476561b8d882b04142.mockapi.io/api/v1/users/4",
      obj,
      hed
    );
    const { data } = response;
    alert("replace Data <3 ✅❤️");
    console.log(data);
  } catch (error) {
    console.log(`ERORR FATCH: ${error}`);
  }
}

const data = {
  firstName: "Luffy",
  lastName: "Monkey D.",
  phoneNumber: "(945) 635-3854",
};
// replaceData(data);



const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const first = form.elements["First"].value.trim();
  const last = form.elements["Last"].value.trim();
  const num = form.elements["num"].value.trim();

  if (!first || !last || !num) {
    return alert("Invalid value");
  }

  const obj = {
    firstName: first,
    lastName: last,
    number: num,
  };

// replaceData(obj);

  form.reset();
});

