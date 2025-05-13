// imports
const express = require('express');
const path = require('path');

// rename return value
const app = express();

// static web server
app.use(express.static(path.join(__dirname, 'public')));

// simple get request
app.get('/v1/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/v1/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// running port
app.listen(8000, () => {
	console.log('Running in port 8000');
});
