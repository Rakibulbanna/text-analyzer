const express = require("express");
require("dotenv").config();
const text = require("./routes/Text/text.route");
const { connectDB } = require("./db");
const { limiter, corsOptions } = require("./constants");

const app = express();

// Rate limiter to all requests
app.use(limiter);

app.use("/uploads", express.static("uploads"));
app.use(express.json());

connectDB();

app.use(corsOptions);

// Routes
app.use("/api/text", text);

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
