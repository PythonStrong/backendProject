const express = require("express")

let apis = (app) => {
    app.use(express.json())
    app.use('/api/new-user', require('../routers/user'))
}

module.exports = apis