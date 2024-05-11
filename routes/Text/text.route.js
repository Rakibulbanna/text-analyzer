const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware/AuthMiddleware");
const { saveText } = require("../../controller/Text/text.controller");

//Saveing text

router.get("/save-text", auth, saveText);


module.exports = router;