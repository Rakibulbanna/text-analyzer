const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerValidator = require("../../validator/registerValidator");
const loginValidator = require("../../validator/loginValidator");
const { serverError, resourceError } = require("../../utils/error");
const User = require("../../models/User/User");

// login controller
module.exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let validate = loginValidator({ email, password });

    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    }

    const u = await User.findOne({ email });
    // Use Populate for transaction

    if (!u) {
      return resourceError(res, "User Not Found");
    }
    bcrypt.compare(password, u.password, (err, result) => {
      if (err) {
        throw new Error(err?.message);
      }
      if (!result) {
        return resourceError(res, "Password Doesn't Match");
      }

      let token = jwt.sign(
        {
          _id: u._id,
          name: u.name,
          email: u.email,
        },
        process.env.SECRET,
        { expiresIn: "2h" }
      );

      res.status(200).json({
        message: "Login Successful",
        token: `Bearer ${token}`,
      });
    });
  } catch (err) {
    return serverError(res, err);
  }

  // Generate Token and Response Back
};
// Registration controller
module.exports.register = async (req, res) => {
  try {
    let { first_name, last_name, email, password, confirmPassword } = req.body;
    let validate = registerValidator({
      first_name,
      email,
      password,
      confirmPassword,
    });

    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    }

    const u = await User.findOne({ email });

    if (u) {
      return resourceError(res, "Email Already Exist");
    }

    bcrypt.hash(password, 11, async (err, hash) => {
      if (err) {
        console.log(err);
        return resourceError(res, "Server Error Occurred");
      }

      const newuser = new User({
        email,
        password: hash,
        first_name,
        last_name,
      });

      await newuser.save();
    });
  } catch (err) {
    return serverError(res, err);
  }
};
