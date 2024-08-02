class Pet {
    constructor(name, species, age) {
        this._name = name;
        this._species = species;
        this._age = age;
        this._hunger = 50;
        this._happiness = 50;
        this._health = 100;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    getSpecies() {
        return this._species;
    }

    setSpecies(species) {
        this._species = species;
    }

    getAge() {
        return this._age;
    }

    setAge(age) {
        this._age = age;
    }

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

    speak() {
        return "";
    }
}

class Dog extends Pet {
    constructor(name, age) {
        super(name, "Dog", age);
    }

    speak() {
        return "Woof!";
    }
}

class Cat extends Pet {
    constructor(name, age) {
        super(name, "Cat", age);
    }

    speak() {
        return "Meow!";
    }
}

const myPet = new Dog("Buddy", 3);

function updateStatus() {
    document.getElementById("status").innerHTML = myPet.displayStatus();
}

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
