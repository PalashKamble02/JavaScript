// Define a superclass named Shape
class Shape {
    constructor(color) {
        this.color = color;
    }

    // Method in the superclass
    describe() {
        console.log(`This is a ${this.color} shape.`);
    }
}

// Define a subclass named Circle that extends Shape
class Circle extends Shape {
    constructor(color, radius) {
        super(color); // Call the constructor of the superclass
        this.radius = radius;
    }

    // Override the describe method
    describe() {
        console.log(`This is a ${this.color} circle with a radius of ${this.radius}.`);
    }
}

// Create an instance of the Circle class
const circle = new Circle('red', 5);

// Call the describe method
circle.describe(); // Output: This is a red circle with a radius of 5.
