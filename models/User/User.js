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
    username: {
      type: String,
      required: false,
      default: null,
    },
    email: {
      type: String,
      required: false,
      default: null,
    },
    
    password: {
      type: String,
      required: false,
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
