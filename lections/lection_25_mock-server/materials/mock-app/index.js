let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let $data = require('./routes/data');
let port = 6000;
const path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/json'}));
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
app.use('/src', express.static('src'));

app.get('/', function (req, res) {
	return res.json({ message: 'Mock server is working!' });
});

// app.post('/registration', function (req, res) {
// 	$data.filereader(__dirname + `/api${req.url}/${req.method.toLowerCase()}.json`)
// 		.then(data => res.json(data))

// 	// if (!req.body.age || req.body.age < 0 || typeof req.body.age != 'number') {
// 	// 	return res.json({ error: 'Age is wrong!' });
// 	// }
// 	// return res.json({ message: 'Example test data!', age: req.body.age });
// });

// app.get('/', function (req, res) {
// 	console.log(__dirname);
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.route('/*')
	.all($data.universalMethod);

app.post('/price-check', function(req){

})

app.listen(port);
console.log('Mock server listening on port ' + port);

module.exports = { app };