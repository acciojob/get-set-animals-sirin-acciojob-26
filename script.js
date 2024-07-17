//complete this code// Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat class extending Animal
class Cat extends Animal {
  // Method to purr
  purr() {
    console.log('purr');
  }
}

// Dog class extending Animal
class Dog extends Animal {
  // Method to bark
  bark() {
    console.log('woof');
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof
