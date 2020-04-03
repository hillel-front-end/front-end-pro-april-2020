console.log('lection 1');

/*
 Тезисы:
    xx:yy - Вступление
    37:20 - запуск кода
    xx:yy - подключение файла <script src />
    xx:yy - базовые команды вывода
    46:43 - математические операции
    55:00 - создание и использование переменных
    01:10:00 - операции со строками и числами
    01:27:32 - типы данных Number, String
    01:27:32 - конкатенация и числа
    xx:yy - унарные операторы, оператор остаток от деления
    01:52:47 - parseInt, prompt, confirm
    01:56:30 - smart операторы, инкримент, декремент
*/

// alert('Hello Home!');

// console.log('Hello, ');
// console.log('World!');


// ---------------------

// console.log(10 + 23);
// console.log(10 - 23);
// console.log(10 * 23);
// console.log(10 / 23);
// console.log(-23/0);


// переменные

a = 10;
b = 50;
// a = b + 65;
a = a + b;
// a = a - 56;
// console.log(a);

// ----------------------

a = 100;
b = 50;
c = 200;

result = a + b - c*5;
result = (a + b - c)*5;

// console.log(result)


// ----------------------

example = 560;
strExample = "Hello Front-end Pro 2020 April";
// console.log(strExample)

// ----------------------

hello = 'Hello'+'World';
// console.log(hello)

// ----------------------

x = 10; // Number
// x = 'hello';
y = '20'; // String

// Преобразование типа
// res = x - y; // '20' -> 20
// console.log('x-y=', res);
// res = x * y; // '20' -> 20
// console.log('x*y=', res);
// res = x / y; // '20' -> 20
// console.log('x/y=', res);
// console.log('-------------------------');

// Преобразование типа
// Оператор + одновременно является оператором математического суммирования
// и оператором склеивания строк - Конкатенация

// Строка всегда приоритет
res = x + y; // 10 -> '10'
// res = '10' + '20';
// console.log('x+y=', res);

console.log('-------------------------');
// NaN


x = 10;
y = '25j';

// console.log('x + y =', x + y);

// Преобразование в число не удалось - NaN 
// '25j' -> ??? NaN - Not a Number
// console.log('x - y =', x - y);
// console.log('x - y =', x * y);
// console.log('x - y =', x / y);
// console.log('1023op' - 1);

// fix

// parseInt(str)

x = 10;
y = 'sjgbnl';

res = x + parseInt(y);
// console.log(res);

y = '2!5djhfbk';
res = x + parseInt(y);
// console.log(res);


// --------------------------------

// Унарный оператор -, +

x = -60;
y = '710';
// console.log(+x);

res = x + +y; // -60 -> '-60'
// console.log(res);

// --------------------------------

// exampleA = +prompt('ExampleA');
// exampleB = parseInt(prompt());

// res = exampleA + exampleB

// console.log(res)

// ----------------------------------
//  smart операторы, инкримент, декремент

a = 1;

a = a + 5;
a += 5;

a = a * 2;
a *= 2;

a = a / 2;
a /= 2;

a = a - 2;
a -= 2;

// инкримент ++

k = 40;
console.log(k);
// k = k + 1;
// k += 1;
k++; // постфиксный инкримент
console.log(k);
++k; // префиксный инкримент


console.log('---------------------------');
k = 40;
console.log(k);
res = 10 + ((k++)*5);
console.log(res);

k = 40;
console.log(k);
res = 10 + ((++k)*5);
console.log(res);


console.log('---------------------------');

k = 10;

console.log(k);
console.log(++k);
console.log(k);

console.log('---------------------------');

k = 10;

// k = k - 1;
// k -= 1;
k--;
--k;