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

// Define a subclass named Mammal that extends Animal
class Mammal extends Animal {
    constructor(name, hasFur) {
        super(name); // Call the constructor of the superclass
        this.hasFur = hasFur;
    }
}

// Define a subclass named Dog that extends Mammal
class Dog extends Mammal {
    constructor(name, breed) {
        super(name, true); // Call the constructor of the Mammal class
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
console.log(dog.hasFur); // Output: true
