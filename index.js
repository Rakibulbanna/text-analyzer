const express = require("express");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const text = require("./routes/Text/text.route");
const { connectDB } = require("./db");
const { origins } = require("./constants");

const app = express();

app.use("/uploads", express.static("uploads"));

connectDB();

app.use(
  cors({
    origin: origins,
    credentials: true,
  })
);

// Routes
app.use("/api/texts", text);

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
