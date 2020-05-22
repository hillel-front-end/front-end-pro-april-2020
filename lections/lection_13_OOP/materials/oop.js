




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
function Person(p1, p2, p3) {
    // console.log('called');

    // console.log(this);

    this.name = p1;
    this.age = p2;
    this.weight = p3;  
    this.example = 'test';

    // console.log(this);
}

var person = new Person('Katya', 23, 52);
var human = new Person('Human', 65, 67);
// new - 1) создает пустой объект 2) вызывает функцию Person с перенаправленным this на объект(из п.1)

// console.log(sample);
console.log(person);
console.log(human);