// подпрограмма
function name() {
    console.log('1');
    console.log('2');
    console.log('3');
}

function render(list) {
    for(i = 0; i < list.length; i++) {
        document.write(list[i] + ' ')
    }
    document.write('<br />')
}



A = [1, 2, 3, 4, 5];
B = [67,87,96,9776,9];

render(A); // list = A
render(B); // list = B

render([8,4,3,3,45,33,87654,3,3,3,3,3,3,3,3,]); // list = [8,4,3,3,45,33,87654,3,3,3,3,3,3,3,3,]

A.splice(1, 2);

render(A);

name();