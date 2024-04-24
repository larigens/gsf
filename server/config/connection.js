const mongoose = require('mongoose'); // To connect to the MongoDB.
require("dotenv").config(); // To use environment variables.

mongoose.set('strictQuery', false);

// Wrap Mongoose around local connection to MongoDB.
mongoose.connect(process.env.MONGODB_URI).then(
  () => {
    console.log("Connected");
  },
  err => {
    console.log(err);
  }
);

// Export connection 
module.exports = mongoose.connection;
