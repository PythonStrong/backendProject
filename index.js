const express = require("express")
const app = express()

require('./server/db')()


const port = process.env.PORT || 5050
app.listen(port, (res, req) => {
    console.log(`working on ${port} port`);
})