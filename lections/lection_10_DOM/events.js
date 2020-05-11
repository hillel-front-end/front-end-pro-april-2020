window.onload = function() {
    var block = document.querySelector('.block');



    // Mouse

    block.onclick = handler;
    // block.ondblclick = handler; // составное событие
    
    // block.onmousemove = handler;
    // block.onmouseover = handler; // :hover from css 
    // block.onmouseout = handler;

    block.onmousedown = handler; // примитивное событие
    block.onmouseup = handler;  // примитивное событие

    block.oncontextmenu = handler; // mousedown(e.which == 3) + mouseup (e.which == 3)

    // mouseenter
    // mouseleave

    // block.onmouseenter = handler;
    // block.onmouseleave = handler;

    // document.querySelector('.list').onmouseenter = function(event){
    //     event.target.classList.add('active');
    // }





    function handler(e){
        console.log(e.type, e);
    }


    // Practice

    // block.onmouseover = onBlockActiveToggle;
    // block.onmouseout = onBlockActiveToggle;
    // block.onmousemove = onActiveMove;

    function onBlockActiveToggle(event) {
        event.target.classList.toggle('active');
    }

    function onActiveMove(event) {
        // console.log(event);
        this.innerHTML = 'X: ' + event.offsetX + ', Y: ' + event.offsetY;
        // this.innerText = 'Example<br /> world!';
    }


    // -----------------------------------------------------------------------------

    // Form event

    var text = document.querySelector('#my-text');

    // text.onmouseover = function(event) {
    //     console.log(event);
    // }

    // text.oninput = function(event) {
    //     // console.log(event.type, event);

    //     // if (event.data == '!') {
    //     //     var str = event.target.value;

    //     //     event.target.value = str.substr(0, str.length-1);
    //     // }
    // }


    // text.onfocus = function(event) {
    //     console.log(event.type, event);
    // }

    // text.onblur = function(event) {
    //     console.log(event.type, event);
    // }

    // text.onchange = function(event) {
    //     console.log(event.type, event);
    // }

    var controlRange = document.querySelector('.range-control');
    var controlNumber = document.querySelector('.number-control');
    var rangeBlock = document.querySelector('.range-block');
    // var max = control.getAttribute('max');
    var max = controlRange.max;
    var lowLimit = +max/3;
    var mediumlimit = 2*(+max)/3;

    // 0-33.33% - low
    // 33.33-66.6% - medium
    // 66.6%-100% - high

    controlRange.oninput = function(event){
        controlNumber.value = event.target.value;
        controlChange(event.target.value);
    }

    controlNumber.oninput = function(event) {
        controlRange.value = event.target.value;
        controlChange(event.target.value);
    }

    function controlChange(value) {
        rangeBlock.style.width = value + 'px';

        stateReset(rangeBlock);
        if (value >= mediumlimit){
            rangeBlock.classList.add('high');
        } else if (value >= lowLimit) {
            rangeBlock.classList.add('medium');
        } else {
            rangeBlock.classList.add('low');
        }
    }

    function stateReset(range){
        range.classList.remove('high', 'medium', 'low');
    }
}