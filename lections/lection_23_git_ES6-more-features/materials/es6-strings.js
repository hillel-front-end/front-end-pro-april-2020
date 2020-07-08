// ES6 Strings
var x = 600;
var str = "<ul>" +
            "<li>"+x+"</li>" +
            "<li></li>" +
          "</ul>";



x = 600;
buffer = x + 67;
example = {x: 10, y: 200};
var strNew = `
    <ul>
        <li>${x + 67}</li>
        <li>${buffer}</li>
        <li>${example.x}</li>
        <li>${foobar(example)}</li>
    </ul>
`;

function foobar({x, y}) {
    // return x + ' | ' + y;
    return `${x > 0 ? x : x * 10} | ${y}`
}

// console.log(strNew);


// window.onload = function() {
//     document.body.innerHTML += strNew;
// }

// ----------------------------------------



let list = [
    "Vaysa",
    "Karya",
    "Kuzya",
    "Boni",
];

let template = `
    <ul>
        <li>${list.join('</li><li>')}</li>
        <li>new approach</li>
        ${
            list
                .map(function(value){
                    return `<li>${value}</li>`;
                })
                .join('\n')
        }
    </ul>
`;


window.onload = function() {
    document.body.innerHTML += template;
}