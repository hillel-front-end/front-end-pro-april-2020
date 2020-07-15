// SystemJS
// let http = require('http');

// ES6 Modules
// import http from 'http';


const dataModule = require('./data');
const person = require('./person');

console.log(dataModule);

const listOfObjects = [
    {x: 10},
    {values: [2, 3, 4]},
    {name: 'ExampleName'},
];

const decoratedList = dataModule.decorateObjects(listOfObjects)


person.run();