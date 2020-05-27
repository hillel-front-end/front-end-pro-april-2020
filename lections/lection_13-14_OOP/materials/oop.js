




// POP
var sample = {
    name: 'Katya',
    age: 23,
    weight: 52
};

// OOP

// Классы на прототипах

// class
// class Person {
//     name: string;
//     age: number;
//     weight: number;
//     constructor(p1, p2, p3) {
//         // this -> person
//         this.name = p1;
//         this.age = p2;
//         this.weight = p3;
//     }
// }

// new object 
// var person = new Person('Katya', 23, 52);

// ------------------------------------


// Person - функция-конструктор
// function Person(p1, p2, p3) {
//     // console.log('called');

//     // console.log(this);

//     this.name = p1;
//     this.age = p2;
//     this.weight = p3;  

//     // this.run = function () {
//     //     console.log(this.name + ' is run');
//     // };
// }

// Person.prototype.run = function () {
//     console.log(this.name + ' is run');
// };
// Person.prototype.eat = function () {
//     console.log(this.name + ' is eat');
// };

// Person.prototype.FOO = 'EXAMPLE';

// var person = new Person('Katya', 23, 52);
// var human = new Person('Human', 65, 67);
// // new - 1) создает пустой объект 2) вызывает функцию Person с перенаправленным this на объект(из п.1)

// // console.log(sample);
// console.log(person);
// console.log(human);
// var user_1 = new Person('Katya', 28, 52);
// var user_2 = new Person('Petya', 67, 70);

// console.log(user_1, user_2);
// // console.log(user_1.run == user_2.run);

// user_1.eat();
// user_2.eat();




// ES6 Class

class Person {
    constructor(p1, p2, p3) {
        this.name = p1;
        this.age = p2;
        this.weight = p3;  
    }

    run() {
        console.log(this.name + ' is run');
    }

    eat() {
        console.log(this.name + ' is eat');
    }
}


var user_1 = new Person('Katya', 28, 52);
var user_2 = new Person('Petya', 67, 70);

console.log(user_1, user_2);
user_1.eat();
user_2.eat();