var data = {
    x: 10,
    y: 20,
    list: [7,5,7,5],
    example: 60
};

// var x = data.x || 0;
// var y = data.y || null;

var {x = 0, list, y = null, example = -50} = data;

// console.log(data);
// console.log(x, y, list, example);

// -------------------------------

var someList = [56, false, 'Hello', null];

var [first='default', i2, i3] = someList;

// var first = someList[0];

// console.log(first, i2, i3);


// -------------------------------

function ajax(options) {
    // var url = options.url || '';
    // var method = options.method || 'GET';
    // var body = options.body;

    var {
        url = '', 
        method = 'GET', 
        body,
    } = options;

    return new Promise(function(res, rej) {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {

            if (xhr.readyState == 1) {

                var it = `
                <img class="spiner" src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="">
                        `;
                init.target.innerHTML += it;

            }
            if (xhr.readyState == 4) {

                if (xhr.status == 200)
                    res(JSON.parse(xhr.responseText))
                else if (xhr.status == 404)
                    rej("url fall")
            }
        }
        xhr.open(method, url, true)

        xhr.send(body);
    })
}

// ajax({
//     url: 'laptops.json', 
//     method: 'POST', 
//     body: {
//         x: 10
//     }
// });


// -------------------------------

// arrow functions


function f() {

}
f()

// item.onclick = function(event) {
//     return event.preventDefault();
// }

// item.onclick = (event) => {
//     return event.preventDefault();
// }

// item.onclick = event => event.preventDefault();


// [1, 2, 3].reduce(function(prev, next){ return prev + next; })
// [1, 2, 3].reduce((prev, next) => prev + next);


// students
//     .filter(stud => stud.name && stud.mark)
//     .map(stud => stud.name)
//     .map(name => name.toUpperCase())
//     .forEach(names => console.log(names))



// var exampleFunc = (value, some) => {
//     console.log('exampleFunc', value, this)
//     // arguments is not defined
//     // this

//     return value + some;
// };


// var res = exampleFunc(1, 2, [7, 8, 9])
// console.log(res)

// var data = {
//     name: 'Sharik',
//     run: speed => {
//         console.log(this)
//         console.log(`${this.name} is run with speed ${speed}`)
//     }
// };

// console.log(this);
// data.run(10);

// [1, 2,3].map(function(){})


// -------------------------------------------

// var, const, let


// function f() {
//     var x = 10; // local
//     const y = 10; // local
//     let z = 10; // local
// }

// console.log(x1, y1, z1); // undefined, temporary dead zone error
var x1 = 10;
const y1 = 10;
let z1 = 10;
// console.log(x1, y1, z1);

x1 = 40;
// y1 = 40;
z1 = 40;
// console.log(x1, y1, z1);

// ----------------------------------------


for(let i = 1; i <= 5; i++) {
    console.log(i);
}
// console.log('last', i);

if (true) {
    var test = 10;
    console.log(test)
}
console.log(test)