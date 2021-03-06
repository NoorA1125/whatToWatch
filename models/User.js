const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  firstname: String,
  lastname: String,
  favorites: [Number],
});

userSchema.pre("save", function (next) {
  const userO = this;

  // only hash the password if it has been modified (or is new)
  if (!userO.isModified("password")) return next();

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(userO.password, salt, function (err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      userO.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

const User = mongoose.model("user", userSchema);
// module.exports.User = User
module.exports = User;
