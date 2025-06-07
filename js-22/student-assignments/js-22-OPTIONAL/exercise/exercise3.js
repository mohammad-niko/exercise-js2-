// Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
// Include two methods to calculate rectangle area and perimeter.
// Create an instance of the 'Rectangle' class and calculate its area and perimeter.

/////////Answer!!!////////////////

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    console.log(this.width * this.height);
  }

  perimeter() {
    console.log((this.width + this.height) * 2);
  }
}

const rec = new Rectangle(5, 10);

rec.area();
rec.perimeter();
