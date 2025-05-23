const mongoose = require("mongoose");

const studentCredential = new mongoose.Schema({
  loginid: {
    type: String, // Changed from Number to String to be more flexible
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("Student Credential", studentCredential);
