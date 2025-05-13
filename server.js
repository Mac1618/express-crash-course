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
		return res.status(200).json(posts.slice(0, convertLimitToInt));
	}

	// show all posts
	res.status(200).json(posts);
});

// get single request
app.get('/api/v1/post/:postId', (req, res) => {
	const id = parseInt(req.params.postId);
	const post = posts.find((post) => post.id === id);

	if (!post) {
		return res.status(404).json({ errorMessage: `Post id of ${id} is not found!` });
	}

	res.status(200).json(posts.filter((post) => post.id === id));
});

app.get('/auth', (req, res) => {
  const { redirect_uri, client_id, response_type } = req.query;
  
  // Display a mock login page
  res.send(`
    <html>
      <body>
        <h1>Mock Singpass Login</h1>
        <form method="GET" action="/mock-login">
          <input type="hidden" name="redirect_uri" value="${redirect_uri}" />
          <button type="submit">Login with Mock Singpass</button>
        </form>
      </body>
    </html>
  `);
});


app.get('/mock-login', (req, res) => {
  const { redirect_uri } = req.query;
  // Simulate successful login by redirecting to your app with a mock code
  res.redirect(`${redirect_uri}?code=MOCK_AUTH_CODE_123`);
});

// running port
app.listen(port, () => {
	console.log(`Running in port ${port}`);
});
