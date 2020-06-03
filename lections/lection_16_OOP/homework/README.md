# Изучить материал
* http://es6-features.org/#ClassDefinition
* http://es6-features.org/#ClassInheritance
* http://es6-features.org/#StaticMembers
* https://learn.javascript.ru/class-inheritance
* https://learn.javascript.ru/static-properties-methods
* https://learn.javascript.ru/private-protected-properties-methods

# Практика

1) Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции. Класс должен работать следующим образом:

        var elem = new Elem('селектор');

        elem.html('!'); //запишет в текст элемента '!'
        elem.append('!'); //запишет в конец элемента '!'
        elem.prepend('!'); //запишет в начало элемента '!'
        elem.attr('class', 'www'); //запишет в атрибут class значение www

        //Должны работать цепочки методов:
        elem.html('hello').append('!').prepend('!');
        elem.attr('class', 'www').attr('title', 'hello');