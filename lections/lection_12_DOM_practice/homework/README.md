# Изучить материал
    * https://www.quirksmode.org/js/events_order.html
    * https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F
    * https://learn.javascript.ru/default-browser-action
# Практика

1. Реализовать контекстное (event = contextmenu) меню. Список хранить в памяти. // Почитать про event.preventDefault() в ссылке №3
2. Хранить в списке action - название функции которая будет выполнятся при нажатии на пункт меню из задания №1.
3. Применить меню к домашке с лекции №11 (персонаж). Создать actions: Jump, Remove, ChangeColor

Пример списка, который описывает контекстное меню:
```javascript
var list = [{title: 'Title 1', action: openTitleOne}, ...]
```

upd* Контекстное меню - это список, который открывается в том месте, где находится курсор мыши в данный момент. При нажатии на пункт меню или вне списка - он закрывается.