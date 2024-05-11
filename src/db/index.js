const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connection successful!");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  connectDB,
};
