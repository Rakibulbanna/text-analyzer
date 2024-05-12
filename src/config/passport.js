const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = require("../models/User/User");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (payload, done) => {
      User.findOne({ _id: payload._id })
        .select("-password")
        .then((user) => {
          if (!user) {
            return done(null, false);
          } else {
            return done(null, user);
          }
        })
        .catch((error) => {
          console.log(error);
          return done(error);
        });
    })
  );
};
