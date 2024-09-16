const express = require("express")
const { default: mongoose } = require("mongoose")

const userScheme = mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    job: String
})

const User = mongoose.model('User', userScheme)

module.exports.User = User