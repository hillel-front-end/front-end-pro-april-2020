/*
    Тезисы:
        xx-10-00 - dom event
        xx-14-30 - mouse, form event 
        xx-yy-zz - keyboard - homework 
        xx-yy-zz - Capturing, Bubbling 

*/

window.onload = function() {
    var block = document.querySelector('.block');

    // DOM Level 0

    // Mouse
    // click

    block.onclick = handlerClick.bind({x: 10});
    // block.ondblclick = handlerClick;


    console.dir(block);

   

    
    // document

    // 1 - место декларирования
    // 2 - this
    // 3 - arguments

    // event - объект события
    function handlerClick(event) {
        console.log(event.type, event);


        console.log(event.target);
        // this.style.backgroundColor = 'brown'; // error
        event.target.style.backgroundColor = 'brown';
    }


    // DOM Level 2
}

