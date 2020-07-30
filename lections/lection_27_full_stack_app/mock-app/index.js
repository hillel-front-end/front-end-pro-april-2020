let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let $data = require('./routes/data');
const fs = require('fs');
const e = require('express');
const { count } = require('console');
let port = 6000;

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

app.get('/', function (req, res) {
	return res.json({ message: 'Mock server is working!' });
});

const userFilePath = './users-store.json';

function writeUserToFile(usersStore){
	fs.writeFile(userFilePath, JSON.stringify(usersStore, null, "\t"), function (err) {
		if (err) throw err;
		console.log(`File - ${userFilePath} - is updated/created successfully.`);
	});
}



let usersStore = [];
let counter = 0;

if (fs.existsSync(userFilePath)){
	fs.readFile(userFilePath, 'utf8', function(err, contents) {
		if (err) throw err;
		usersStore = JSON.parse(contents);
		counter = usersStore.length;
	});
} else {
	writeUserToFile([]);
}

app.post('/init', (req, res) => {
	const userData = {
		success: true
	};
	const parsedBody = req.body
	const uniqueId = parsedBody.uniqueId;
	// Return existing user
	if (uniqueId) {
		let currentUser = usersStore.find(item => item.id == uniqueId);
		userData.user = currentUser;

		return res.json(userData);
	} 

	// Create guest user and return info about new user
	const newUser = {
		id: `ui-${counter}`,
		name: `name-${counter}`,
		viewed: []
	};
	
	usersStore.push(newUser)
	counter++;
	userData.user = newUser;
	writeUserToFile(usersStore);
	
	return res.json(userData);
});

app.post('/view-product', (req, res) => {
	const { userId, viewedProductId } = req.body;

	let currentUser = usersStore.find((item) => item.id == userId);
	if (currentUser && !currentUser.viewed.includes(viewedProductId)) {
		currentUser.viewed.push(viewedProductId);
	}
	writeUserToFile(usersStore);
	return res.json({
		success: true,
		currentUser
	});
});

app.get('/users', (req, res) => {
	res.json({
		success: true,
		users: usersStore
	});
})

app.route('/*')
	.all($data.universalMethod);


app.listen(port);
console.log('Mock server listening on port ' + port);

module.exports = { app };