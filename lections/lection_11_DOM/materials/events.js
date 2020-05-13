window.onload = function () {
    var block = document.querySelector('.block');
    var step = 20;


    console.dir(block);



    document.onkeydown = function(event){
        // console.log(event.keyCode);
        if (!inFieldCheck(block)){
            return;
        }

        // 37-40
        switch (event.keyCode) {
            case 37: 
                block.style.left = block.offsetLeft - step + 'px';
                break;
            case 38: 
                block.style.top = block.offsetTop - step + 'px';
                break;
            case 39: 
                block.style.left = block.offsetLeft +  step + 'px';
                break;
            case 40: 
                block.style.top = block.offsetTop + step + 'px';
                break;
        }
    }
}

function inFieldCheck(block) {
    var startPointX = 0,
        startPointY = 0,
        endPointX = window.innerWidth,
        endPointY = window.innerHeight,
        x = block.offsetLeft,
        y = block.offsetTop,
        w = block.offsetWidth,
        h = block.offsetHeight,
        buffer = 25;

    // if (x >= startPointX + buffer && x + w <= endPointX - buffer && y >= startPointY + buffer && y + h <= endPointY - buffer) {
    //     return true;
    // }
    
    // return false;

    var startLimit = x >= startPointX + buffer && y >= startPointY + buffer;
    var endLimit = x + w <= endPointX - buffer && y + h <= endPointY - buffer;

    if (startLimit && !endLimit) {

    }
    return startLimit && endLimit;
}


window.onload = function(){

    var block = document.querySelector('.block');

    block.onclick = function(event){
        console.log('old click 1');
    }

    // DOM Level 0
    function f1(){console.log(1);}
    function f2(){console.log(2);}
    function f3(){console.log(3);}

    // block.onclick = function(event){
    //     f1(event);
    //     f2(event);
    //     f3(event);
    // }


    // block.onclick = null;


    // DOM Level 2
    var type = 'click'; 

    function newF1(event){
        console.log('new click 1');
    }

    block.addEventListener('click', newF1);

    block.addEventListener(type, function(event){
        console.log('new click 2');
    });

    block.addEventListener(type, function(event){
        console.log('new click 3');
    });


    // block.removeEventListener('click', newF1);
}
