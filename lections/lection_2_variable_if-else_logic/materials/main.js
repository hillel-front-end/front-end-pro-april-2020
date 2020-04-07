console.log('lection 2');

/*
 Тезисы:
    xx-yy-zz - Вступление
    xx-12-25 - создание переменных var
    xx-18-00 - оператор %, Math.pow, Math.random, Math.floor, Math.round, Math.ceil
    xx-33-15 - boolean
    xx-yy-zz - logic &&, ||, !
    xx-57-45 - if else
    01-23-50 - cycles do...while, while
    01-39-40 - cycles for

Практика:
    Возведение числа в степень a^n, без Math.pow
*/


// console.log(y);
// undefined -> #3

x = 10; // global -> function, object
var y = 10; // local -> function

// console.log(x, y);

// -----------------------------------------

// Math.pow
a = 12;
b = 6;
res = Math.pow(a, b); // 2^8


// console.log(res);

// Math.floor, ceil, round 

// console.log( Math.floor(2.9999) );
// console.log( Math.ceil(2.1) );
// console.log( Math.round(2.4) );
// console.log( Math.round(2.5) );
// console.log( Math.trunc(12.45645) ); // 12


// ----------------------------------------


// % <-> mod

// console.log( 19 % 2 ); // 1
// console.log( 113 % 24); // 17 



// ----------------------------------------

// тип данных boolean

a = true; // 1
b = false; // 0

res = a + b;
res = 1 + 0;

// Таблица истинности

// логическое И - AND - &&

// console.log( 'true && true && true ->', true && true && true );

a1 = true;
b1 = false;
c1 = false;

// console.log(a1 && b1 && c1);


// логическое ИЛИ - OR - ||


// console.log(a1 || b1 || c1);


// console.log(a1 && b1 || c1); // false
// console.log(true && false || c1);
// console.log(false || c1);
// console.log(false || false);
// console.log(false || false);

// логическое отрицание - !
a = true;

// console.log(!a); // false
// console.log( !(a1 || c1) );
// console.log( !(true || false) );
// console.log( !(true) );
// console.log( false );


// ------------------------------------

// if...else

/*
    if (условие) {
        блок кода
    }
*/

// a = 10;

// if (a > 0 && a != 7) {
//     console.log('IF code');
// }

// b = +prompt();

// if (b != 0) {
//     b *= 25;
// }

// console.log(b);



/*
    if (условие) {
        блок кода
    } else {
        блок кода 
    }
*/

// if (b !=0 ) {
//     b *= 25;
// } else {
//     b = -100;
// }

// console.log(b);


/*
    if (условие) {
        блок кода 1
    } else if(условие) {
        блок кода 2
    } else {
        блок кода 3
    }

    if (условие) {
        блок кода 1
    } else if(условие) {
        блок кода 2
    }
*/




// console.log(a > 0);
// console.log(a != 23);
// console.log(a <= 23 && a != 0);

/*
 >
 <
 >=
 <=
 !=
 ==
*/


// --------------------------------------

// cycles

// Предусловие

/* 
    while(условие) {
        блок кода
    }
*/

// counter = 0; // start
// while(counter <= 5) {
//     console.log(counter);  
//     counter++; 
// }
// console.log('after cycle', counter);

// Постусловие

/* 
    do {
        блок кода
    } while(условие)
*/

// counter = 0; // start
// do {
//     console.log(counter);  
//     counter++; 
// } while(counter <= 5);
// console.log('after cycle', counter);

// ---------------------------------------

// Цикл со счётчиком for

// 1..10
// for(1;2;3){
//     4
// }
// 1 - зона начальных условий
// 2 - условие выполнения цикла
// 3 - действие между итерациями
// 4 - блок кода

// Последовательность
// 1 -> [2]if(2) { 4 -> 3 -> [2] } else { exit; }

// i, j, k 
// for(i = 0; i <= 5; i++) {
//     console.log(i); 
// }

// for(i = 0; i <= 5; i++) {
//     console.log(i); 
// }

// --------------------------------------

// for(i = 0, j = 120; i <= 5 && j <= 1000; i++, j*=2) {
//     console.log(i, j); 
// }

// for(i = 0; i <= 100; i++) {
//     if( i % 2 == 0 ){
//         console.log(i*i);
//     }
// }

// ---------------------------------------


a = 2;
n = 5;

for(i = 1, res = 1; i <= n; i++) {
    res *= a;
    // res = res * a;
}

console.log('a^n', res);

console.log('a^n', Math.pow(a, n));

