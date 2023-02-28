const express = require('express');
const app = express();

const PORT = 3000;


app.get('/', (req, res) => {
  res.send(`Hello World from the server`);
});

app.get('/about', (req, res) => {
  res.send(`About Us page`);
});

app.get('/contact', (req, res) => {
  res.send(`Contact Us page`);
});

app.get('/signin', (req, res) => {
  res.send(`Log In  page`);
});

app.get('/signup', (req, res) => {
  res.send(`Registration page`);
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost/${PORT}`);
})