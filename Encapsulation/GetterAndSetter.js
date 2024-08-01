class Person {
    // Private field
    #age;

    constructor(name, age) {
        this.name = name; // Public field
        this.#age = age;  // Initialize private field
    }

    // Getter for the private field
    get age() {
        return this.#age;
    }

    // Setter for the private field
    set age(newAge) {
        if (newAge > 0 && newAge < 150) {
            this.#age = newAge;
        } else {
            console.error('Invalid age');
        }
    }

    // Public method
    describe() {
        console.log(`Name: ${this.name}, Age: ${this.#age}`);
    }
}

const person = new Person('John', 25);
person.describe(); // Output: Name: John, Age: 25

// Access private field via getter
console.log(person.age); // Output: 25

// Modify private field via setter
person.age = 30;
console.log(person.age); // Output: 30

// Attempt to set an invalid age
person.age = -5; // Output: Invalid age
