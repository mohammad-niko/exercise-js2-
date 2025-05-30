//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */

//*End of story :)💔

async function deleteId(id) {
  try {
    const response = await axios.delete(
      `https://683967476561b8d882b04142.mockapi.io/api/v1/users/${id}`,
      {
        headers: {
          Authorization: "Bearer your_token_here",
        },
      }
    );
    console.log("Deleted successfully", response.data);
  } catch (error) {
    console.log(`Error deleting ID ${id}: ${error}`);
  }
}
// deleteId();give it an id

async function deleteEvenIds() {
  try {
    const response = await axios.get(
      `https://683967476561b8d882b04142.mockapi.io/api/v1/users`
    );
    const { data } = response;
    const filterEvenNumber = data.filter((data) => data.id % 2 === 0);
   for(let user of filterEvenNumber){
    await deleteId(user.id)
   }
  } catch (error) {
    console.log(`ERORR: ${error}`);
  }
}
deleteEvenIds();
