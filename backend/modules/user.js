const express = require("express");
const { default: mongoose } = require("mongoose");

const userScheme = mongoose.Schema({
  name: { min: 3, type: String },
  lastName: { min: 3, type: String },
  age: { min: 1, type: Number },
  job: { min: 3, type: String },
});

const User = mongoose.model("User", userScheme);

module.exports.User = User;
