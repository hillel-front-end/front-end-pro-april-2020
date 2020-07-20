var x = 10;



class Human {
    run() {
        console.log(`${this.name} is running`,)
    }
}

class Person extends Human {
    constructor(name = 'Example') {
        super();
        this.name = name;
    }
}

// let vasya = new Person();
// console.log(vasya)
module.exports = new Person();