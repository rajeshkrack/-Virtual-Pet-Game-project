// Encapsulation: Properties are defined within the constructor and accessed via getters and setters
class Pet {
    constructor(name, species, age) {
        this._name = name;
        this._species = species;
        this._age = age;
        this._hunger = 50;
        this._happiness = 50;
        this._health = 100;
    }

    // Getter and Setter for name
    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    // Getter and Setter for species
    getSpecies() {
        return this._species;
    }

    setSpecies(species) {
        this._species = species;
    }

    // Getter and Setter for age
    getAge() {
        return this._age;
    }

    setAge(age) {
        this._age = age;
    }

    // Methods to perform actions on the pet
    feed() {
        this._hunger -= 10;
        this._happiness += 5;
        this._health += 3;
    }

    play() {
        this._hunger += 5;
        this._happiness += 10;
        this._health += 2;
    }

    groom() {
        this._happiness += 3;
        this._health += 1;
    }

    takeToVet() {
        this._health += 10;
    }

    // Display status of the pet
    displayStatus() {
        return `
            Name: ${this._name}<br>
            Species: ${this._species}<br>
            Age: ${this._age}<br>
            Hunger: ${this._hunger}<br>
            Happiness: ${this._happiness}<br>
            Health: ${this._health}<br>
        `;
    }

    // Placeholder for polymorphism (will be overridden in subclasses)
    speak() {
        return "";
    }
}

// Inheritance: Dog and Cat classes inherit from Pet class
class Dog extends Pet {
    constructor(name, age) {
        super(name, "Dog", age); // Call parent class constructor
    }

    // Polymorphism: Overriding the speak method
    speak() {
        return "Woof!";
    }
}

class Cat extends Pet {
    constructor(name, age) {
        super(name, "Cat", age); // Call parent class constructor
    }

    // Polymorphism: Overriding the speak method
    speak() {
        return "Meow!";
    }
}

// Abstraction: Abstracting the creation of pet objects into a function
function createPet(type, name, age) {
    switch (type) {
        case "Dog":
            return new Dog(name, age);
        case "Cat":
            return new Cat(name, age);
        default:
            throw new Error("Unknown pet type");
    }
}

// Create an instance of a pet
const myPet = createPet("Dog", "Buddy", 3);

// Function to update the status display
function updateStatus() {
    document.getElementById("status").innerHTML = myPet.displayStatus();
}

// Functions to perform actions on the pet
function playWithPet() {
    myPet.play();
    updateStatus();
}

function feedPet() {
    myPet.feed();
    updateStatus();
}

function groomPet() {
    myPet.groom();
    updateStatus();
}

function takePetToVet() {
    myPet.takeToVet();
    updateStatus();
}

// Initial status update
updateStatus();
