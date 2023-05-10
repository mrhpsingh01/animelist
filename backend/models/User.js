const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    phone: {
      type: String,
    },
    country: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { collection: "users-anime" }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
