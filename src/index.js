const express = require("express");
require("dotenv").config();
const userHandler = require("./routes/User/user.route");
const textHandler = require("./routes/Text/text.route");
const { connectDB } = require("./db");
const { limiter, corsOptions } = require("./constants");
const passport = require("passport");
const app = express();

// Rate limiter to all requests
app.use(limiter);

app.use("/uploads", express.static("uploads"));
app.use(express.json());

connectDB();

app.use(corsOptions);

// passport initialization
app.use(passport.initialize());
require("./config/passport")(passport);

// Routes
app.use("/api/user", userHandler);
app.use("/api/text", textHandler);

// Central error handler
app.use((err, req, res, next) => {
  res.status(404).json({
    error: {
      message: err.message,
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT} port`);
});
