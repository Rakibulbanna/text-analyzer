const { default: mongoose } = require("mongoose");
const Text = require("../../models/Text/Text.model");

const saveText = async (req, res) => {
  try {
    const { text } = req.body;

    const newText = new Text({
      text,
    });
    await newText.save();

    res.status(200).json({
      message: "Text saved successfully",
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {
  saveText,
  
};
