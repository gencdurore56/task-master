/*
Filename: SophisticatedCode.js

Description: This code is a simulation of a virtual pet game. It features a complex setup with multiple classes and methods to create an interactive and entertaining experience for the user.

*/

class VirtualPet {
  constructor(name, species, age) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.hunger = 50;
    this.thirst = 50;
    this.energy = 100;
    this.happiness = 100;
    this.health = 100;
  }

  eat(food) {
    this.hunger -= food;
    this.happiness += food / 2;
    this.health += food / 2;

    if (this.hunger < 0) {
      this.hunger = 0;
    }
    if (this.happiness > 100) {
      this.happiness = 100;
    }
    if (this.health > 100) {
      this.health = 100;
    }
  }

  drink(water) {
    this.thirst -= water;
    this.happiness += water / 2;
    this.health += water / 2;

    if (this.thirst < 0) {
      this.thirst = 0;
    }
    if (this.happiness > 100) {
      this.happiness = 100;
    }
    if (this.health > 100) {
      this.health = 100;
    }
  }

  sleep(hours) {
    this.energy += hours * 10;

    if (this.energy > 100) {
      this.energy = 100;
    }
  }

  play(minutes) {
    this.happiness += minutes * 2;
    this.energy -= minutes / 2;

    if (this.happiness > 100) {
      this.happiness = 100;
    }
    if (this.energy < 0) {
      this.energy = 0;
    }
  }

  exercise() {
    this.energy -= 20;
    this.happiness += 10;
    this.health += 10;

    if (this.energy < 0) {
      this.energy = 0;
    }
    if (this.happiness > 100) {
      this.happiness = 100;
    }
    if (this.health > 100) {
      this.health = 100;
    }
  }

  checkStatus() {
    console.log(`Name: ${this.name}`);
    console.log(`Species: ${this.species}`);
    console.log(`Age: ${this.age}`);
    console.log(`Hunger: ${this.hunger}`);
    console.log(`Thirst: ${this.thirst}`);
    console.log(`Energy: ${this.energy}`);
    console.log(`Happiness: ${this.happiness}`);
    console.log(`Health: ${this.health}`);
  }
}

class VirtualPetGame {
  constructor() {
    this.pets = [];
  }

  addPet(name, species, age) {
    const pet = new VirtualPet(name, species, age);
    this.pets.push(pet);
  }

  removePet(name) {
    const index = this.pets.findIndex(pet => pet.name === name);
    if (index !== -1) {
      this.pets.splice(index, 1);
      console.log(`Removed pet: ${name}`);
    } else {
      console.log(`Pet not found: ${name}`);
    }
  }

  feedPet(name, food) {
    const pet = this.getPetByName(name);
    if (pet) {
      pet.eat(food);
      console.log(`${name} has been fed with ${food} units of food.`);
      pet.checkStatus();
    } else {
      console.log(`Pet not found: ${name}`);
    }
  }

  waterPet(name, water) {
    const pet = this.getPetByName(name);
    if (pet) {
      pet.drink(water);
      console.log(`${name} has been given ${water} units of water.`);
      pet.checkStatus();
    } else {
      console.log(`Pet not found: ${name}`);
    }
  }

  sleepPet(name, hours) {
    const pet = this.getPetByName(name);
    if (pet) {
      pet.sleep(hours);
      console.log(`${name} has slept for ${hours} hours.`);
      pet.checkStatus();
    } else {
      console.log(`Pet not found: ${name}`);
    }
  }

  playWithPet(name, minutes) {
    const pet = this.getPetByName(name);
    if (pet) {
      pet.play(minutes);
      console.log(`${name} has played for ${minutes} minutes.`);
      pet.checkStatus();
    } else {
      console.log(`Pet not found: ${name}`);
    }
  }

  exercisePet(name) {
    const pet = this.getPetByName(name);
    if (pet) {
      pet.exercise();
      console.log(`${name} has exercised.`);
      pet.checkStatus();
    } else {
      console.log(`Pet not found: ${name}`);
    }
  }

  getPetByName(name) {
    return this.pets.find(pet => pet.name === name);
  }

  displayAllPets() {
    if (this.pets.length === 0) {
      console.log("No pets available.");
    } else {
      console.log("Available pets:");
      this.pets.forEach(pet => console.log(pet.name));
    }
  }
}

// Usage example:

const game = new VirtualPetGame();

game.addPet("Fluffy", "Cat", 2);
game.addPet("Barky", "Dog", 3);

game.feedPet("Fluffy", 20);
game.waterPet("Fluffy", 15);
game.sleepPet("Fluffy", 5);
game.playWithPet("Fluffy", 10);
game.exercisePet("Fluffy");

game.removePet("Barky");

game.displayAllPets();