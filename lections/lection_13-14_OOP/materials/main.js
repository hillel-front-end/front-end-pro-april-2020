console.log('Lection 13');


/*
    Тезисы:
        xx-yy-zz - Prototype - intro
        xx-47-00 - Object.create
        xx-yy-zz - Embedded Prototypes
        xx-yy-zz - OOP Intro
        xx-yy-zz - Class, object
        xx-yy-zz - Inheritance
        xx-yy-zz - Incapsulation
        xx-yy-zz - Polymorphism - 
*/


var parent = {
    a: [1, 2, 3],
    flag: false,
    "-1": "test"
}

var example = {};


parent.__proto__.FOO = 'BAR';

// console.log(parent);
// console.log(example);
// console.log(parent.__proto__ == example.__proto__);

// console.log(parent.FOO, example.FOO);
// console.log(typeof parent.__proto__);

// var list = [1, 2, 3];
// list.__proto__.getFirst = function(){
//     return this[0];
// }

// console.log(list);

// console.log(list.FOO)
// console.log(list.slice(0, 2))

var str = 'link hello world';

// console.log(str);
// console.log( str.substr(0, 3) );
// console.log( str.indexOf('nk') );
// console.log( str.__proto__ );

function f() {
    var flag = new Boolean();

    flag.__proto__.example = 'EXAMPLE';

    console.log(flag);
}

// f(6, 7, 3);

// ------------------------------

var PBlock = {z: 20, h: 60, FOO: 'PBFoo'};


// var Block = {x: 10, y: 20};
// var Block = Object.create(PBlock); // {}
var Block = Object.assign(Object.create(PBlock), {x: 10, y: 20});

console.log(PBlock);
console.log(Block);
console.log(Block.FOO);