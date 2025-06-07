//todo1 create a Pet class that accepts petName, weight, age, color
//todo2 create a Cat class that inherits it's properties from Pet
//todo3: in the Cat class, add another property called breed
//todo4: Add two methods to the Cat class:
//  - Create a method named "sound" that logs the cat's sound to the console.
//  - Implement a method called "game" that returns "[pet-name] is playing with a rubber ball."

// ! Answer =====================================================================

class Pet {
  constructor(petName, weight, age, color) {
    this.petName = petName;
    this.weight = weight;
    this.age = age;
    this.color = color;
  }
}

class Cat extends Pet {
  constructor(petName, weight, age, color, breed) {
    super(petName, weight, age, color);
    this.breed = breed;
  }
  sound() {
    console.log("majed");
  }
  game() {
    console.log(`${this.petName} is playing with a rubber ball`);
  }
}

const pet =new Pet("majed",50,1,"black");



const myCat = new Cat("Majed", 5, 2, "black", "Persian");

myCat.sound(); 
myCat.game(); 