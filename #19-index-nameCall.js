const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello! : " + req.query.name);
});

app.listen(5005);

//http://localhost:5005/?name=Zain
