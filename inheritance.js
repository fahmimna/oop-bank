class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make a sound`)
    }
}

class Bird extends Animal {}

const tweety = new Bird('Tweety')
tweety.speak()