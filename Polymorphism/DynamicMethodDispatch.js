// Define a superclass named Shape
class Shape {
    constructor(name) {
        this.name = name;
    }

    // Method to be overridden
    calculateArea() {
        console.log('Area is not defined for generic shape.');
    }
}

// Define a subclass named Circle that extends Shape
class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    // Override the calculateArea method
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Define another subclass named Rectangle that extends Shape
class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }

    // Override the calculateArea method
    calculateArea() {
        return this.width * this.height;
    }
}

// Create instances of the subclasses
const shapes = [
    new Circle(5),
    new Rectangle(4, 6),
    new Shape('GenericShape')
];

// Call the calculateArea method on each instance
shapes.forEach(shape => {
    console.log(`${shape.name} area: ${shape.calculateArea()}`);
});

// Output:
// Circle area: 78.53981633974483
// Rectangle area: 24
// GenericShape area: Area is not defined for generic shape.
