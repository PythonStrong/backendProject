const express = require("express");
const apis = require("./server/apis");
const app = express();

require("./server/db")();
apis(app);

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log(`working on ${port} port`);
});
