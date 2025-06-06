//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////

const destination = document.querySelector("#destination");
destination.style.cursor = "pointer";
const h3 = document.querySelector("h3");
let index = 0;
async function getDataAtUrl() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch(
      "https://handlers.education.launchcode.org/static/planets.json",
      config
    );
    const data = await response.json();
    //{name , distance}
    if (index >= data.length) index = 0;
    h3.textContent = `${data[index].name}  : ${data[index].distance}`;

    ++index;
  } catch (error) {
    alert(error);
  }
}

destination.addEventListener("click", () => {
  getDataAtUrl();
});
