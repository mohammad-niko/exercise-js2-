// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...


const users = [
  {
    firstName: "Grattan",
    lastName: "Dalton",
  },
  {
    firstName: "William",
    lastName: "Dalton",
  },
  {
    firstName: "Robert",
    lastName: "Dalton",
  },
];

/** WRITE YOUR CODE BELOW DOWN */

async function sendRequest(obj) {
  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };

  try {
    const response = await fetch(
      "https://683967476561b8d882b04142.mockapi.io/api/v1/users",
      post
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    console.log(`result✅:`, data);
  } catch (error) {
    console.log(`ERROR FETCH: ❌${error}`);
  }
}

users.forEach((data) => sendRequest(data));

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

  sendRequest(obj);

  form.reset();
});
