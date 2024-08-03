// Define a superclass named Animal
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Method to be overridden
    makeSound() {
        console.log(`${this.name} makes a generic sound.`);
    }
}

// Define a subclass named Dog that extends Animal
class Dog extends Animal {
    // Override the makeSound method
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

// Define another subclass named Cat that extends Animal
class Cat extends Animal {
    // Override the makeSound method
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}

// Create instances of the subclasses
const animals = [
    new Dog('Rex'),
    new Cat('Whiskers'),
    new Animal('GenericAnimal')
];

// Call the makeSound method on each instance
animals.forEach(animal => {
    animal.makeSound();
});

// Output:
// Rex barks.
// Whiskers meows.
// GenericAnimal makes a generic sound.
