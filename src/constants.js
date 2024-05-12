const rateLimit = require("express-rate-limit");
const cors = require("cors");

const origins = ["http://localhost:3000"];

const corsOptions = cors({
  origin: origins,
  credentials: true,
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later",
});

module.exports = {
  origins,
  corsOptions,
  limiter,
};
