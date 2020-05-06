/*
    Тезисы:
        xx-yy-zz - Window, Document, Navigator, Location
        xx-31-00 - query for elements
        xx-yy-zz - html element, html collection
        xx-yy-zz - classList, className
*/

window.onload = function() {
    // old
    // var block = document.getElementById('special');
    // var myItems = document.getElementsByClassName('my-item');

    // real world
    // var block = document.querySelector('#special'); // dom element
    // var myItems = document.querySelectorAll('.my-item'); // dom element
    // console.log(myItems);



    // document.querySelector('#special').style.color = 'red';
    // -----------------------------------------------------------
    // var special = document.querySelector('#special')
    // special.style.color = 'red';

    var text = document.querySelector('.form-text');
    var checkbox = document.querySelector('.form-checkbox');
    var textarea = document.querySelector('.form-textarea');

    // console.dir(checkbox);

    setInterval(function(){
        document.querySelector('.results').innerHTML = 'Text: ' + text.value + ', Checkbox: ' + checkbox.checked + ', Textarea: ' + textarea.value;
    }, 1000)
}
