/*
    Тезисы:
        xx-yy-zz - Window, Document, Navigator, Location
        xx-31-00 - query for elements
        xx-yy-zz - html element, html collection
        xx-yy-zz - classList, className
*/

// BOM - Browser Object Model
// Window
// Navigator
// console.log(navigator);

// location
// console.log(location)



// Document

// console.log(document);
// console.dir(document);


// DOM - Document Object Model

// -----------------------------------------------

// DOM Element
var block = document.getElementById("special");

setTimeout(function(){
    // block.style.color = 'blue';
    // block.style.fontSize = '48px';
    // block.style.backgroundColor = 'rgba(245, 122, 23, 0.4)';
}, 3000)


setInterval(function(){
    block.style.backgroundColor = 'rgb('+ getRand(256) +', 124, 12)';
    block.style.height = getRand(400) + 'px';
}, 10000)

console.dir(block);

function getRand(max) {
    return Math.floor(Math.random()*(max));
}


// setTimeout(function(){
//     var popup = document.getElementById("popup");
//     window.popup = popup;
//     // popup.className += ' open';
//     // console.log(popup.className);

//     console.log(popup.classList);
//     popup.classList.add('open');
//     // popup.classList.remove('open');
//     // popup.classList.toggle('open')
// }, 3000);