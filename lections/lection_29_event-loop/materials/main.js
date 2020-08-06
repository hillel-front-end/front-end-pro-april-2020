console.log('lection_29');



// debugger;

// f();

// function f() {
// 	f1();
// }

// function f1() {
// 	// console.log(a);
// 	// debugger;
// }

// setTimeout(function() {
// 	debugger;
// }, 3000);


// ----------------------------



// console.log('point 1');

// setTimeout(function() {
// 	// debugger;
// 	console.log('point 2');	
// }, 10000);

// document.body.addEventListener('click', () => {
// 	console.log('click');
// })
// console.log('point 3');


// for(let i = 0; i <= 10000; i++) {
// 	console.log('cycle');
// }

// debugger;

// setTimeout(function() {
// 	for(let i = 0; i <= 10000; i++) {
// 		console.log('cycle');
// 	}
// 	console.log('t1');
// }, 3000)
// setTimeout(function() {
// 	console.log('t2');
// }, 3000)


// setTimeout(() => {
// 	document.body.style.backgroundColor = 'red';
// }, 2000)


// function timer(a, b) {
// 	setTimeout(function innerT(){
// 		console.log(a, b);
// 		debugger;
// 	}, 3000)
// }


// timer(100, 60);


// ---------------------------------------------------


// var buttons = document.querySelectorAll('button');

// for(let i = 0; i < buttons.length; i++) {
// 	buttons[i].dataset.id=i;
// 	buttons[i].addEventListener('click', function() {
// 		console.log(i+1);
// 		console.log(+this.dataset.id+1);
// 	})
// }

// for(let j = 0; j <= 10000; j++) {
// 	console.log('cycle');
// }


// ---------------------------------------------------


// rest | spread operator


var args = [2, 6, 7, 8];
// console.log(mathFunc(...args));
// console.log(mathFunc(2, 6, 7, 8));


// console.log( [7, 8, 9, ...args, 10] );

list = [9,97,8,12,-78,87]
args = [...args, ...list]
// console.log(args)

function mathFunc(a, b, c, d){
	return a*b/c+d;
}

var data = {
	x: 1,
	y: 2,
	z: 3
}

var info = {
	...data,
	p: 4,
	l: 5,
	x: 1000
}

// Object.assign(info, data)

// console.log(info);


// var copy = list.slice();
var copy = [...list].filter(v => v > 0);
// console.log(copy);

// ---------------------------------------------

let res = concatAllArrays([1, 2], [3, 4], [5, 6]);

// console.log(res);

function concatAllArrays(...args){
	// let args = [...arguments]; // better to use rest operator
	// args.forEach(v => console.log(v));
	return args.reduce((prev, curr) => {
		return prev.concat(curr);
		return [...prev, ...curr];
	});
}


// ---------------------------------------------

// example('a1', 'b2', '6', 23,234,23,432,4);

// [].splice(1, 3, 6,7,4,74)

// function example(a, b, ...other) {
// 	console.log(a, b, other)
// }

let exampleData = {
	a: '1',
	b: '2',
	c: '3',
	v1: 1243,
	v2: 456,
	c1: false,
	c2: true
};

let {a, b, v1, ...fields} = exampleData;

console.log(a, b, v1, fields)



const DEFAULT_FETCH_INIT = {
	method: 'GET',
	'x-content-type': 'text/plain',
	body: {},
	referrer: ''
};

function request(path, opts = {}) {
    return fetch(MOCK_PATH + path, {
		...DEFAULT_FETCH_INIT,
		...opts
	}).then(resp => resp.json());
}


request('/data', {
	method: 'POST',
	body: {}
})

request('/data', {
	method: 'POST',
	headers: {
		'x-content-type': 'text/json'
	}
})