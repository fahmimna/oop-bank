class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} make a sound`)
    }
}

export class Bird extends Animal {
    speak() {
        console.log('${this.name} chirps.')
    }
}

export class Fish extends Animal {
    speak() {
        console.log('${this.name} swims.')
    }
}

export class Dog extends Animal {
    speak() {
        console.log('${this.name} barks.')
    }
}