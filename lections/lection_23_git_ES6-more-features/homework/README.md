# Изучить материал

* http://jsraccoon.ru/oop-descriptors
* https://learn.javascript.ru/getters-setters
* https://learn.javascript.ru/let-const
* http://es6-features.org/#ArrayMatching
* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

# Практика

1) Создать у объекта геттер, который возвращает коллизию значение obj.list_1 и obj.list_2 (оба свойства - массивы чисел). Коллизия - совпадение элементов по значению.

2) Добавить всем массивам геттер - render, который будет выводить одномерный массив в документ, в виде таблицы (номер ячейки и значение ячейки).

3) У объекта data создать свойство геттер, сеттер `model`. Которое обрабатывает данные после двух обращений.
При первом обращнении сохраняется строка. Например: `data.model = 'Hello, how, are you?'`

При втором обращении к сеттеру происходит нарезание строки по переданному символу и сохранение результата в свойство str. Например: `data.model = ","`

`console.log(data.str) -> ['Hello', ' how', ' are you?']`

----------------------

Геттер `data.model` возвращает символы, которые были удалены (при втором вызове сеттера) и их количество в виде объекта.

`console.log(data.model); -> { symbol: ',', count: 2 }`


4) Создать сеттер `model` (не связывать с задачей №3), который принимает объект и выполняет `update` всех существующих свойств в текущем объекте.
`obj = {x:10, y: 20, p: 15};`
`obj.model = { x: { value: 33, operation: '*' }, z: { value: 75, operation: '+' }, p: { value: 4, operation: '%' } }`

`console.log(obj); -> {x:330, y: 20, z: 75, p: 3}`