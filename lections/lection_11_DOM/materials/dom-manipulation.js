

window.onload = function(){
    // editing
    var block = document.querySelector('.block');
    document.addEventListener('keydown', function(event){
        console.log(event);
    })

    block.classList.add('test');

    block.setAttribute('test-example', '100');
    console.log(block.getAttribute('title'));
    block.removeAttribute('title');


    // removing
    // block.remove();


    // cloning
    // var clonedBlock = block.cloneNode();
    var clonedBlock = block.cloneNode(true);
    console.log(block, clonedBlock);


    // creating
    var element = document.createElement('h3');
    console.dir(element);
    element.innerHTML = 'Hello world!';
    element.classList.add('h-3');

    // insertion

    // parent.appendChild(child);
    setTimeout(function() {
        // document.querySelector('body').appendChild(element);
        // element.innerHTML += '!!!!'
    }, 3000);

    // -----------------------

    var names = [
        'Petya', 
        'Katya', 
        'Vasya', 
        'Mariya'
    ];

    var ul = document.createElement('ul');
   
    var li;
    for(var i = 0; i < names.length; i++){
        li = document.createElement('li');
        li.innerHTML = names[i];
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}
