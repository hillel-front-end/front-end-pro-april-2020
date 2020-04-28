console.log('Lection_6');

/*
    Тезисы:
        xx-18-30 - args, return
        xx-39-10 - optional args, return any
        xx-48-20 - simple scopes
        xx-yy-zz - arguments
*/

// // Pure
// function sum(a, b) {
//     return a + b;
// }


// sum(6); // a = 6, b = undefined


// мутация - mutation
// res = undefined;

// res = sum(6, 'hello');

// res = sum(6, 2) - sum(12, 67); 

// res = Math.pow(2, 8) - sum(67, Math.pow(2, 3));

// console.log(res);
// console.log( sum(2, 19) );


// ---------------------

function getMax(list) {
    console.log(list);

    max = list[0];
    for(i = 0; i < list.length; i++){
        if (max < list[i]) {
            max = list[i];
        }
    }

    // console.log(max);

    if (max > 0) {
        return max;
    }

    return 0;
    // return undefined; // by default
}



// console.log('Max:', getMax([-1, -7, -8, -5, 4, -12, -6]));


// -------------------------

// формальные и фактические

// function f(a, b, c) {
//     return a*b - c;
// }

// f(2, 8, 9); // формальные параметры присавивают в себя фактические
// a = 2; b = 8; c = 9;


// default arguments

// function f(a = 0, b, c = 100) {
//     // if (a == undefined) {
//     //     a = 0;
//     // }
//     // if (b == undefined) {
//     //     b = -5;
//     // }
//     // if (c == undefined) {
//     //     c = 100
//     // }
//     console.log(a, b, c);
//     return a*b - c;
// }

// f(2);

// -----------------------------------------------


// function f() {
//     var x = 10;
//     // console.log('f - ', x);
//     // console.log('global window - ', window.x);
// }


// x = 'global x';

// console.log('before f - ', x);
// f();
// console.log('after f - ', x);




// list = [1, 2, 3];
// console.log(list, window.list)

// console.log(window); // global scope

//--------------------------------------------



function f() {
    console.log('f', arguments); // псевдо-массив
    // console.log(arguments[0] + arguments[1])
    var argsF = arguments;
    var x = 10;
    var y = 700;

    f1();
    f2(12);

    function f1() {
        console.log('f1', argsF);
        var y = 20;
        console.log('f1', x, y, z);
        // x - из замыкания с f scope
        // z - из global scope
    }

    function f2(y_local) {
        console.log('f2', x, y_local, y);
    }
}

var z = 50; // global

// f(2, 6, 7, 8, 3, false, true, 2);

// [2, 7, 8, 5, 4, 3, 2].splice(2, 3, 6, 7, 8, 8, 6, 5, 4, 3);




// myPush

var list = [1, 2, 3];
list.push(4, 5, 6);
// console.log(list);

// list = list.concat([2,3,4])

function myPush() {
    for(var i = 0; i < arguments.length; i++) {
        this.push(arguments[i]);
    }

    return this.length;
}


Array.prototype.myPush = myPush;

list = [1, 2, 3];
console.log('new length: ', list.myPush(4, 5, 6));
console.log(list);



// -------------------------

// this

// function sumTwoVals(a, b) {
//     // this -> context
//     console.log(this);
//     return a + b + this.x;
// }

// var data = {
//     x: 10,
//     y: 20,
//     sum: sumTwoVals
// }

// // console.log( data.sum(2, 12) );

// console.log( sumTwoVals(23, 78) );
// // console.log( window.sumTwoVals(23, 78) );

// console.log();
// alert();

