const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  contact: {
    type: Number,
  },
});

const UserModal = model("User", userSchema);

module.exports = UserModal;
