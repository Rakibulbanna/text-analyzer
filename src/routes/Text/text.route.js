const express = require("express");
const router = express.Router();
const { auth } = require("../../middleware/AuthMiddleware");
const { saveText, getTextList, editText, deleteText } = require("../../controller/Text/text.controller");
const { getWordCount, getCharacterCount, getSentenceCount, getParagraphCount, getLongestWord } = require("../../controller/Text/text.analyzer.controller");

//Text CRUD

router.post("/save-text", saveText);
router.get("/list-text", getTextList);
router.patch("/edit-text/:id", editText);
router.delete("/delete-text/:id", deleteText);



// text analyzer portion
router.get('/word-count/:id', getWordCount);
router.get('/characters-count/:id', getCharacterCount);
router.get('/sentences-count/:id', getSentenceCount);
router.get('/paragraphs-count/:id', getParagraphCount);
router.get('/longest-words/:id', getLongestWord);

module.exports = router;