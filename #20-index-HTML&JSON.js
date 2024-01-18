const { query } = require("express");
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send(`<h1>This is Home Page</h1>
    <a href="/about" >About Page</a>`);
});

app.get("/about", (req, res) => {
  res.send(`<input type="text" placeholder=${req.query.name} />
    <button>Click Me</button>`);
});

app.get("/help", (req, res) => {
  res.send([
    { name: "Champ", email: "super@gmail.com" },
    { name: "Gulli", email: "gulli@gmail.com" },
  ]);
});

app.listen(5005);
