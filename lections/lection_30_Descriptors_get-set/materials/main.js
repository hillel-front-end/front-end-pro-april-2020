// 'use strict'
console.log('lection_30');



// let data = {};

// data.x = 10;

// console.log(data);

// // isExtensible
// console.log(Object.isExtensible(data));

// // isSealed
// console.log(Object.isSealed(data));

// // isFrozen
// console.log(Object.isFrozen(data));



// ------------------------------------

// defineProperty

let info = {
	a: 10,
	b: 'hello',
	c: [1, 7, 8]
};

// for(let key in info) {
// 	console.log(key)
// }

// info.example = 10;
Object.defineProperty(info, 'example', {
	value: 10,
	enumerable: false,
	writable: false,
	configurable: false
});

// console.log(info);

// info.example = 100;
// delete info.example;

// Object.defineProperty(info, 'example', {
// 	value: 100,
// 	enumerable: true,
// 	writable: true
// });

// console.log(info);

// for(let key in info) {
// 	console.log(key)
// }

// ----------------------------------------------------------

let exampleInfo = {
	age: 23,
	name: 'TestName',
	address: {
		city: 'Test'
	},
	t: test,
	link: document.querySelector('.link')
};

var test = {
	x: exampleInfo
}


// Object.preventExtensions(exampleInfo);
// exampleInfo.__proto__ = Array.prototype;
// exampleInfo.__proto__.FOO = 'BAR';

// Object.defineProperty(exampleInfo, 'age', {
// 	value: 100,
// 	enumerable: true,
// 	writable: true
// });

// Object.seal(exampleInfo);
// Object.defineProperty(exampleInfo, 'age', {
// 	get() {}
// });


// Object.freeze(exampleInfo);

// exampleInfo.surname = 'Surname';
// delete exampleInfo.name;
// exampleInfo.age = 500;
// Object.defineProperty(exampleInfo, 'age', {
// 	value: 100,
// 	enumerable: true,
// 	writable: true
// });
exampleInfo.address.city = 'Super City';

// isExtensible
// console.log(Object.isExtensible(exampleInfo));

// // isSealed
// console.log(Object.isSealed(exampleInfo));

// // isFrozen
// console.log(Object.isFrozen(exampleInfo));

// console.log(exampleInfo)


// ------------------------------------------------


const defaultConfig = {
	host: '',
	port: '',
	protocol: ''
}
Object.freeze(defaultConfig);


// console.log(Object.isFrozen(defaultConfig))


// Freeze <=> Seal + configurable false

// ------------------------------------------------------------------

// get/set -> getter and setter -> [[Get]] [[Put]]



let special = {
	name: 'User name',
	id: 'id-78',
	x: 50
};

// [[Get]]

// console.log( special.name )
let res = special.name.toUpperCase();
// console.log(res);

// [[Put]]

special.name = 'Update';
// special.name += 'Update';
// i = 10;
// i++;
// i = i + 1;


// writable = false -> [[Put]] deactivate 
// const variable = 10; vatiabe [[Get]] only

// -----------------------------------------------------

// defineProperty with get/set

let someVal = 700;

special.ageOriginal = 9999;
Object.defineProperty(special, 'age', {
	get: function() {
		// console.log('GET AGE', arguments, this);

		// return 9999/this.x;
		return this._age + someVal;
	},
	set(value) {
		// this._age = value;
		// Object.defineProperty(this, '_age',{
		// 	value: value,
		// 	configurable: true,
		// 	writable: true
		// });
	}
})



// console.log(special.ageOriginal, special.age);

// console.log(special.age.toFixed(1))

// special.age = 'TESTASDFASF'
// special.age = 878
// special.age = []
// special.age = () => {console.log(this)}

// -----------------------------------------------------

let person = {
	name: 'Katya',
	surname: 'Shevtsova',
	_counter: 0,
	get fullName() {
		return this.name + ' ' + this.surname;
	},
	set fullName(value){
		if (!/[a-zA-Z]{1,15}\s[a-zA-Z]{1,20}/.test(value)){
			return console.warn('Name is wrong', value);
		}
		console.log('New name - ' + value)
		const [ name, surname ] = value.split(' ');
		this.name = name;
		this.surname = surname
		this._counter++;
	}
};


// console.log(person.fullName)

// person.fullName = 'Ivan Miranchuk'

// console.log(person.fullName)


// Features

// Map

let config = {
	x: 10,
	a: 78
};

console.log(config);

let configMap = new Map();

let stringKey = 'example-test';
let listKey = [1,657,567,56,7];
let objKey = {x: 10, y: 30};
let funcKey = () => {};


configMap.set(stringKey, 'value1');
configMap.set(listKey, 'value2');
configMap.set(objKey, 'value3');
configMap.set(funcKey, 'value4');
configMap.set(78, 124355);

console.log(configMap)

console.log( configMap.get(objKey) );
console.log( configMap.get(stringKey) );

console.log( configMap.has(78) );


// ------------------------------------

let personList = [
	"Name 1",
	"Name 2",
	"Name 2",
	"Name 3",
	"Name 1",
	"Name 2",
	"Name 3",
	"Name 2"
];

let personMap = new Map();

personList.forEach(person => {
	if (personMap.has(person)) {
		let newCount = personMap.get(person) + 1;
		personMap.set(person, newCount);
		
		return
	}
	personMap.set(person, 1);
});

console.log(personMap, personMap.size);

personMap.forEach((item, key) => {
	console.log(item, key);
})

// -----------------------------------------------------

