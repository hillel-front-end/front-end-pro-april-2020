console.log('Lection_7');

/*
    Тезисы:s
        xx-yy-zz - LE, scope
        xx-yy-zz - hoisting
        xx-yy-zz - closure
        xx-yy-zz - this
*/


function f(a, b, c) {
    return a + ', ' + b + ', ' + c;
}



// console.log(f(6, 'hello', false));
// console.log(f({x: 30}, 'hello', [7, 8, 9]));


// global

x = 50;
var y = 60;


var exampleValue = null;

function example() {
    var inner_y = 500; // local

    inner_x = 870;
    exampleValue = 'hello example';

    console.log(inner_y);
    test();
    console.log(inner_y);

    function test() {
        inner_y += 700;
    }
}


// example();

// console.log(window);


// --------------------------------------


var gl = 1200;

function f1(max, min) {
    var res = 0;
    var z = 70;
    /*
        f1.LexicalEnvironment = { max: 60, min: 20, res: 0, z: 70 };
        f1.scope = Global
    */

    res = max - min;

    f2();
    // console.dir(f2)
    function f2() {
        var gl_local = gl;
        /*
            f2.LexicalEnvironment = { gl_local: 1200 };
            f2.scope = f1.LexicalEnvironment
        */

        return z + gl_local;
    }


    return Math.abs(res);
}


f1(60, 20);


// f1(354, 20);
// f1(4, 20);
// f1(50, 20);


// -------------------------------------------------

function f2() {
    var value = 20;

    f3();
}



function f3(foo) {
    // LE = { foo: undefined }
    // scope = global
    console.log(value, foo); 
} 


value = 80;

// f2();


// ------------------------------------------------
// hoisting


// console.log(k);
// console.log(p);

k = 10;
var p = 20;

CITIES_TYPES = {
    BIG: 1000000,
    MEDIUM: 500000,
    SMALL: 0
};

// f5();
// console.log(f6)
// f6();

function f5() { console.log('f5') } // function declaration
var f6 = function() { console.log('f6') } // function expression

// f5();
// f6();


// f10();

function f10() {
    console.log(hello)
    var hello = 'hello';
    console.log(hello)
}


// ------------------------------------
// closure


function parent(x){
    var y = 0;
    var parentSome = 'some';

    return child(x+y);

    function child(x_local) {
        // debugger;
        var p = 10;

        return x + x_local + p + global_z + y + parentSome; 
        //     70 + 10 + 7000
    }
}

global_z = 7000;

// console.log(parent(70));


// ------------------------------------


function factory(z = 0) {
    return function(x, y) {
        return x + y + z;
    }
}


var fooBar = factory(100);
console.log(fooBar(7, 9));

// итератор

function iterator(list) {
    var counter = 0;
    

    return {
        next() {
            if (counter >= list.length) {
                return 'complete';
            }
            return list[counter++]
        },
        cancel() {
            counter = 0;
        },
        complete() {
            counter = list.length;
        }
    };
}

var step = iterator([7,8,9,5,4])

console.log(step.next());
console.log(step.next());
console.log(step.next());
// step.cancel();
// step.complete();
console.log(step.next());
console.log(step.next());
console.log(step.next());
console.log(step.next());
console.log(step.next());
console.log(step.next());
// step.cancel();
// step.complete();

//-------------------------------------


function getLogic(value) {
    if (value > 0) {
        return function(x){
            return value + x;
        }
    } else if (value == 0) {
        return function(x){
            return x*100;
        }
    } else {
        return function(x){
            return x + -value;
        }
    }
}

console.log(getLogic(0)(100));

// var sss = getLogic(-56);
// sss();