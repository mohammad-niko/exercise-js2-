/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer

async function placeHolder() {
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
    if (!fet.ok) throw new Error("HTTP error! status: " + response.status);

    const data = await fet.json();
    console.log(data);
  } catch (error) {
    console.log(`fatch error${error}`);
  }
}
placeHolder();
