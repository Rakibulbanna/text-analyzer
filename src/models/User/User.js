const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: false,
      default: null,
    },
    last_name: {
      type: String,
      required: false,
      default: null,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      default: null,
    },

    created_by: {
      type: String,
      required: false,
      default: null,
    },
    update_by: {
      type: String,
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
