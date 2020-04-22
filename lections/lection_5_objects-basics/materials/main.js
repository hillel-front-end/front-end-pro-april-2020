/*
    Тезисы:
        xx-06-10 - object intro - creating
        xx-25-15 - properties - setting and getting (not get/set)
        xx-yy-zz - for..in, Object.keys, Object.values
        xx-yy-zz - method hasOwnProperty(), Object.getOwnPropertyNames()
        xx-yy-zz - Simple practice

        01-44-10 - Functions intro - creating
        xx-yy-zz - args, return
*/


// empty object
data = {};


data = {
    name: "Petya",
    age: 28,
    foo: [1, 2, 3],
    zz: false,
    address: { city: 'Kharkiv', country: 'Ukraine' }
}

// list = {
//     0: 5,
//     1: 28
// }

arr = [5, 28]


i = 0;
arr[0]

// console.log(data);

// 1
ageProperty = 'age';
// console.log( data['name'], data[ageProperty] );

// 2
// console.log( data.age, data.zz );


// -------------------------------------------------------

data = {};

// console.log(data);

data.example = 'foo bar value';
data['super'] = 'super value';

// console.log(data);

// removing
// delete data.super;
// data.super = undefined;

// console.log(data);

// -------------------------------------------------------

sharik = {
    name: 'Sharik',
    type: 'animal',
    // subType: 'Dog',
    color: 'black',
    breed: 'metis',
    age: 4,
    weight: 25,
    food: {
        meat: 2,
        water: 1,
        choco: 0.1
    },
    test: undefined,
    test2: undefined
};

// console.log(sharik);

str = '';

if (sharik.name) {
    str += 'Имя собаки - ' + sharik.name;
}

// console.log(sharik.subType); // undefined
if (sharik.subType) {
    str += '<br />И он - ' + sharik.subType;
}

document.write(str);

// ---------------------------------------------------

keys = [];
values = [];

for(key in sharik) {
    // console.log(key, sharik[key]);

    if (!sharik[key]) {
        // delete sharik[key]
    }
    keys.push(key);
    values.push(sharik[key]);
}

// console.log(sharik);

// ---------------------------------------------------


// console.log( Object.keys(sharik) );
// console.log( Object.values(sharik) );

// console.log(keys);
// console.log(values);

// ---------------------------------------------------



schools = {
    "#_1": {
        name: 'Super name #1',
        schoolers: [
            {
                name: 'Name 1',
                tel: '13251243',
                friends: ['Name 2', 'Name 1']
            },
            {
                name: 'Name 1',
                tel: '13251243'
            },
            {
                name: 'Name 1',
                tel: '13251243'
            },
            {
                name: 'Name 1',
                tel: '13251243',
                friends: ['Name 2', 'Name 1']
            }
        ]
    },
    "#_2": {
        name: 'Super name #2',
        schoolers: [
            {
                name: 'Name 12',
                tel: '13251243'
            },
            {
                name: 'Name 15',
                tel: '13251243'
            }
        ]
    }
};

// console.log(schools);


// ---------------------------------------------------


info = {
    x: 10,
    y: 20,
    z: 30
}

Object.prototype.k = 40;

// enumerable
console.log(info);

for(i in info) {
    // if (!info.hasOwnProperty(i)) {
    //     continue;
    // }
    console.log(i);

    res = info.hasOwnProperty(i)
    console.log('property - ' + i + ' is own ' + res);
}


keys = Object.getOwnPropertyNames(info);

console.log(keys);
// console.log(Object.keys(info));

for(i = 0; i < keys.length; i++) {
    console.log( info[keys[i]] );
}


// ---------------------------------------------------

// Practice