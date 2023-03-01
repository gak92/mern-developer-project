const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT;

// Connect to the database
require('./db/conn');

app.use(express.json());

// Link Router file
app.use(require('./routes/auth'));

// Middlware
const middleware = (req, res, next) => {
  console.log("Hello Middleware");
  next();
};

// app.get("/", (req, res) => {
//   res.send(`Hello World from the app.js`);
// });

app.get("/about", middleware, (req, res) => {
  console.log("Hello my About page");
  res.send(`About Us page`);
});

app.get("/contact", (req, res) => {
  res.send(`Contact Us page`);
});

app.get("/signin", (req, res) => {
  res.send(`Log In  page`);
});

app.get("/signup", (req, res) => {
  res.send(`Registration page`);
});

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost/${PORT}`);
});
