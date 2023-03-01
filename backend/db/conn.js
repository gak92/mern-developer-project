const mongoose = require('mongoose');

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