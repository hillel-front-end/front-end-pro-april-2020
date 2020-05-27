# Изучить материал

* https://learn.javascript.ru/prototype
* https://learn.javascript.ru/new-prototype
* https://learn.javascript.ru/native-prototypes
* https://learn.javascript.ru/classes
* https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BD%D0%BE-%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5

# Практика

1) в обьекте `data` существует метод `addRecord`, который аргументами получает любой набор объектов. Метод `addRecord` добавляет все свойства переданных объектов в `data`.


        data = {
            addRecord: function(){},
            p: 600,
            str: 'hello',
            y: -50
        }
        data.addRecord({x: 10}, {y: 20}, {z: 30, x: 50});
        data.x // 50
        data.y // 20
        data.z // 30
        data.p // 600
        data.str // 'hello'

2)В метод `addRecord` добавляется последний необязательный аргумент `flag`, который указывает приоритет присвоения свойств с одинаковым названием.
Если `true` - берется свойство из первоначального объекта `this`, если `false` - берется свойство из `arguments`.  По умолчанию `flag = false;`

3) 

    3.1) Создать класс `new SuperArray(n, m, { min: 10, max: 55 })`, который создаст массив размерностью `n на m` и заполнит случайными числами в диапазоне `options.min - options.max`.
    Массив сохраняется в экземпляр класса `SuperArray`.

    3.2) Создать метод `render(separator)`, в прототипе. Который выведет двумерный массив в документ. С разделителем `separator`, под массивом.

    3.3) Создать метод `clear(direction, k)`, где `direction` может быть `"row"` или `"column"`, а `k` - номер строки или столбца, который нужно очистить. (поставить 0)

    3.4) Создать Метод `setMarker({ x: 6, y: 9 })`, который устанавливает маркер `"&"` в переданную точку.

    3.5) Создать метод `goTo({ x: 2, y: 4  })`, маркер передвигается в указанную точку.

    3.6) Создать метод `shift(direction)`, где `direction` может иметь значение `"left", "right", "top", "bottom"`, и маркер сдвинется в указанную сторону на 1 шаг.