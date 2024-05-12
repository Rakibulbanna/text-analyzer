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

    res.status(200).json({ status: 200, wordCount });
  } catch (error) {
    res.status(404).json({ status: 404, error: error.message });
  }
};

const getCharacterCount = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Text.findById(id);

    const characterCount = calculateCharacterCount(data.text);

    res.status(200).json({ status: 200, characterCount });
  } catch (error) {
    res.status(404).json({ status: 404, error: error.message });
  }
};

const getSentenceCount = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Text.findById(id);

    const sentenceCount = calculateSentenceCount(data.text);

    res.status(200).json({ status: 200, sentenceCount });
  } catch (error) {
    res.status(404).json({ status: 404, error: error.message });
  }
};
const getParagraphCount = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Text.findById(id);

    const paragraphCount = calculateParagraphCount(data.text);

    res.status(200).json({ status: 200, paragraphCount });
  } catch (error) {
    res.status(404).json({ status: 404, error: error.message });
  }
};
const getLongestWord = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Text.findById(id);

    const longestWord = calculateLongestWords(data.text);

    res.status(200).json({ status: 200, longestWord });
  } catch (error) {
    res.status(404).json({ status: 404, error: error.message });
  }
};
module.exports = {
  getWordCount,
  getCharacterCount,
  getSentenceCount,
  getParagraphCount,
  getLongestWord,
};
