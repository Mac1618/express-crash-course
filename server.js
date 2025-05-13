// imports
const express = require('express');
const path = require('path');

// rename return value
const app = express();

// static web server
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
	{ id: 1, title: 'Apple' },
	{ id: 2, title: 'Banana' },
	{ id: 3, title: 'Orange' },
];

// simple get request
app.get('/api/v1/', (req, res) => {
	res.json(posts);
});

// running port
app.listen(8000, () => {
	console.log('Running in port 8000');
});
