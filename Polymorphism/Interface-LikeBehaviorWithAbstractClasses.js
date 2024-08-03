// Define an abstract class named Animal
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new TypeError('Cannot construct Animal instances directly');
        }
        this.name = name;
    }

    // Abstract method to be overridden
    makeSound() {
        throw new Error('You have to implement the method makeSound!');
    }
}

// Define a subclass named Dog that extends Animal
class Dog extends Animal {
    // Implement the makeSound method
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

// Define another subclass named Cat that extends Animal
class Cat extends Animal {
    // Implement the makeSound method
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}

// Attempt to create an instance of the abstract class (will throw an error)
// const animal = new Animal('GenericAnimal'); // Error: Cannot construct Animal instances directly

// Create instances of the subclasses
const dog = new Dog('Rex');
const cat = new Cat('Whiskers');

// Call the makeSound method on each instance
dog.makeSound(); // Output: Rex barks.
cat.makeSound(); // Output: Whiskers meows.
