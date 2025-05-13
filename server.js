// import express
const express = require('express');

// rename return value
const app = express();

// simple get request
app.get('/', (req, res) => {
	res.send({ message: 'Hello World!...' });
});

app.get("/about", (req, res) => {
  res.send(`
    <ul>
      <li>apple</li>
      <li>mango</li>
      <li>banana</li>  
    </ul>
  `);
})

// running port
app.listen(8000, () => {
	console.log('Running in port 8000');
});
