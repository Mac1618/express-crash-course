// imports
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;

// rename return value
const app = express();

// static web server
app.use(express.static(path.join(__dirname, 'public')));

let posts = [
	{ id: 1, title: 'Apple' },
	{ id: 2, title: 'Banana' },
	{ id: 3, title: 'Orange' },
];

// get all request
app.get('/api/v1/posts', (req, res) => {
	const { limit, sort } = req.query;
	const convertLimitToInt = parseInt(limit);
	console.log(req.query, limit, sort);

	// should be "number" and "not negative"
	if (!isNaN(convertLimitToInt) && convertLimitToInt > 0) {
		res.send(posts.slice(0, convertLimitToInt));
    
		// show all posts
	} else {
		res.json(posts);
  }
});

// get single request
app.get('/api/v1/post/:postId', (req, res) => {
	const id = parseInt(req.params.postId);

	res.json(posts.filter((post) => post.id === id));
});

// running port
app.listen(port, () => {
	console.log(`Running in port ${port}`);
});
