const { default: mongoose } = require("mongoose");
const Text = require("../../models/Text/Text.model");

const saveText = async (req, res) => {
  try {
    console.log("req.body__", req.body);
    const { text } = req.body;

    const newText = new Text({
      text: text,
    });
    await newText.save();

    res.status(200).json({
      message: "Text saved successfully",
    });
  } catch (error) {
    console.log("error__", error);
    res.status(400).json({ status: 400, error: error.message });
  }
};
const getTextList = async (req, res) => {
  try {
    const data = await Text.find();

    res.status(200).json({
      status: 200,
      data,
    });
  } catch (error) {
    res.status(400).json({ status: 400, error: error.message });
  }
};
const editText = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;

    await Text.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      {
        $set: {
          text: text,
        },
      },
      {
        new: true,
        useFindAndModify: false,
      }
    );

    res.status(200).json({
      message: "Text updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};
const deleteText = async (req, res) => {
  try {
    const { id } = req.params;

    await Text.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });

    res.status(200).json({
      status: 200,
      message: "Text deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      error: error.message,
    });
  }
};
module.exports = {
  saveText,
  getTextList,
  editText,
  deleteText,
};
