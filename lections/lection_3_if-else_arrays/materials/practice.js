/*
 Создать массив размерностью `n`,
  где `n` вводится с клавиатуры.

 Заполнить случайными числами в 
 диапазоне `-220 ... 435`.

 Вывести в документ числа, которые состоят
из двух цифр.
*/

A = [];
// A.length = +prompt('n');
A.length = 25;

// 1, 2, 3  *  *  *
// 0  1  2  3  4  5

B = [];
for(i = 0; i < A.length; i++){
    A[i] = Math.floor(Math.random()*656 - 220);

    if(Math.abs(A[i]) >= 10 && Math.abs(A[i]) <= 99) {
        B.push(A[i]);
        // document.write(A[i] + ' ');
    }

    // if (String(Math.abs(A[i])).length == 2){
    //     B.push(A[i]);
    // }
}

// console.log(A);
// document.write(B);





/*
    Заполнить массив случайными числам. 
    Найти все простые числа.
    Сохранить их в новый массив.
*/

A = [];
A.length = 20;
primeArray = [];

for(i = 0; i < A.length; i++){
    A[i] = Math.floor(Math.random()*25);

    // isPrime

    // 5 -> 1 2 3 4 5
    // 6 -> 1 2 3 4 5 6

    if (A[i] == 0 || A[i] == 1) {
        continue;
    }
    value = A[i];
    isPrime = true;
    // ???????
    for(j = 2; j <= value - 1; j++){
        if(value % j == 0){
            isPrime = false;
            break;
        }
    }

    if(isPrime){
        primeArray.push(value);
    }
}

console.log(A);
console.log(primeArray);
