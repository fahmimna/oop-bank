const person = {
    name: 'Fahmi Malik',
    age: 30,

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
    },
};

person.greet(); // Memanggil metode greet