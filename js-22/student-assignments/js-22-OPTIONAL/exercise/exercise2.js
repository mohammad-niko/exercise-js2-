// create a constructor function named "Accumulator," taking "startingValue" as a parameter.

// The created object should:

// Keep the starting value in the "value" property.
// Include a "read()" method that uses the "prompt" function to get a number from the user and adds it to the starting value. Essentially, the "value" property represents the total of all user-input values, starting from "startingValue."
//////////Answer!!!!!!!///////////

function Accumulator(startingValue){
this.value=startingValue;
}


Accumulator.prototype.read=function(){
    const getUser = prompt("type a number");
    const number = Number(getUser)
    if (!isNaN(number)) {
    this.value += number;
  } else {
    alert("Invalid input. Please enter a number.");
  }
};

const num = new Accumulator(10);
   
    console.log( num.read());
    console.log( num.read());