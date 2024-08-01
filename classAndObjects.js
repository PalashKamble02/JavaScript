class Person {
   constructor(name , age) {
      this.name = name;
      this.age = age;
   }
   greet(){
      console.log(`hello , my name is ${this.name} and i am ${this.age} years old`);
   }
   static species(){
      console.log("humans");
   }
}

const person1 = new Person('Palash', 25)
person1.greet();
Person.species();