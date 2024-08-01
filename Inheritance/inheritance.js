// Define a superclass named Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method in the superclass
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

// Define a subclass named Dog that extends Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the constructor of the superclass
        this.breed = breed;
    }

    // Override the speak method
    speak() {
        console.log(`${this.name} barks.`);
    }
}

// Create an instance of the Dog class
const dog = new Dog('Rex', 'German Shepherd');

// Call the speak method
dog.speak(); // Output: Rex barks.
