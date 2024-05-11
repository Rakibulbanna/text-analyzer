const { default: mongoose } = require("mongoose");
const Text = require("../../models/Text/Text.model");
const {
  calculateWordCount,
  calculateCharacterCount,
  calculateSentenceCount,
  calculateParagraphCount,
  calculateLongestWords,
} = require("../../services/Text/textAnalyze.services");

const getWordCount = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Text.findById(id);

    const wordCount = calculateWordCount(data.text);

    res.status(200).json({ wordCount });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getCharacterCount = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Text.findById(id);

    const characterCount = calculateCharacterCount(data.text);

    res.status(200).json({ characterCount });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getSentenceCount = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Text.findById(id);

    const sentenceCount = calculateSentenceCount(data.text);

    res.status(200).json({ sentenceCount });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getParagraphCount = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Text.findById(id);

    const paragraphCount = calculateParagraphCount(data.text);

    res.status(200).json({ paragraphCount });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getLongestWord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Text.findById(id);

    const longestWord = calculateLongestWords(data.text);

    res.status(200).json({ longestWord });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getLongestWord,
};
