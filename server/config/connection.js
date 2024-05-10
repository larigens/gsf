const mongoose = require('mongoose');
require("dotenv").config(); // Ensure dotenv is correctly configured to load environment variables

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI).then(
  () => {
    console.log("Connected");
  },
  err => {
    console.log(err);
  }
);

module.exports = mongoose.connection;
