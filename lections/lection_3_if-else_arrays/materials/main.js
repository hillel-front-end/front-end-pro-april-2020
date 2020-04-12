console.log('lection 2');

/*
    Тезисы:
        xx-13-28 - array intro
        xx-28-00 - cycles + arrays
        xx-41-00 - sum, find
        01-11-00 - push, pop, splice, slice, "copy"

    Практика:
        - Задачи из раздела Лекция
*/

a = 45;
a = 'str';

// динамические и не строго типизированные массивы
A = [1, 4, 5, 6, 7, false, [2,6,7,8]];
B = ['Hello', 'world', ' _!'];

A[0] = A[0] + 'hi!';

// A.length = 2;

// console.log(A);
// console.log(B);

// --------------------------

// console.log((A[1] + A[2])/A[3]);

// ---------------------------

// 1 - через блок инициализации

A = [1, 2, 3];

A.length; // 3

// 2 - через ?конструктор?

B = new Array(1, 2, 3);

A.length; // 3

// console.log(A, B);


// -----------------------------------

A = [];
A.length = 50;

// --------------------

B = new Array(50); // RangeError

// console.log(A, B);


// -----------------------------------


A = [];
A.length = 20;

for(i = 0; i < A.length; i++) {
    A[i] = 2*i + 5;
}




// ----------------------------------

// console.log(Math.floor(Math.random()*10));

// rand(10) -> 0 - 9
// Math.random() -> 0 - 1

for(i = 0; i < A.length; i++) {
    A[i] = Math.floor(Math.random()*101 - 50);
}

// console.log(A);



// Math.random()*100 -> 0..99
// Math.random()*101 - 50 -> -50..50



// ------------------------------------

// find max
// find min


max = A[0]; // гипотеза
min = A[0]; // гипотеза

for(i = 0; i < A.length; i++){
    if(A[i] > max){
        max = A[i];
    }

    if(A[i] < min){
        min = A[i];
    }
}

// console.log('max=', max);
// console.log('min=', min);


// ------------------------------------

// sum, mul

sum = 0;
mul = 1;
for(i = 0; i < A.length; i++){
    // sum = sum + A[i];
    sum += A[i];
    mul *= A[i];


    // sum elems > 0
    // if(A[i] > 0){
    //     sum += A[i];
    // }
}

// console.log('sum=', sum);
// console.log('mul=', mul);


// ------------------------------------


A = [5, 12, 28, 7, 24, 27, 4, 5];

// console.log('initial', A)
// push()

res = A.push(100);
// console.log(A, ' | ', res);


// pop()
res = A.pop();
// console.log(A, ' | ', res);


// slice()
res = A.slice(1, 5);

// console.log('sliced two args - ', res);

console.log('----------------------------');
res = A.slice(3);
// console.log('sliced one args - ', res);

res = A.slice(-2);
// console.log('sliced one args - ', res);

console.log('----------------------------');

// console.log('A = ', A);

// ------------------------------------

// splice()

// res = A.splice(4, 2);
// console.log('splice - ', res);

console.log('----------------------------');

res = A.splice(4, 0, 999,8,9,5,'asd',64,7,false,58,56,111);
// console.log('splice - ', res);

// console.log('A = ', A);


console.log('----------------------------');


// ----------------------------------------


A = [1, 2, 3];
// A.length = 20;

// A[25] = 'example';

A[A.length] = 'example';
A.push('example');

console.log(A);