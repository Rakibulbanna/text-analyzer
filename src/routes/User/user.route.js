const mongoose = require("mongoose");
const express = require("express");
const { register, login } = require("../../controller/Auth/AuthController");
const router = express.Router();

// const authenticate = require('../config/Authenticate')

router.post("/register", register);

router.post("/login", login);

module.exports = router;
