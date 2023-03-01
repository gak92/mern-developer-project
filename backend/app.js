const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

// Connect to the database
const DB = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.guwlzpm.mongodb.net/${DB_HOST}?retryWrites=true&w=majority
`;
// console.log("DB Connection string: ", db);
mongoose.connect(DB, {
  useNewUrlParser:true,
  // useCreateIndex:true,
  useUnifiedTopology:true,
  // useFindAndModify:true,
}).then(() => {
  console.log("Connected to DB successfully.");
}).catch((err) => {
  console.log("Connection fail.");
});

// Middlware
const middleware = (req, res, next) => {
  console.log("Hello Middleware");
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello World from the server`);
});

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
