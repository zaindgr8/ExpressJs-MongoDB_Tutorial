//created file > middleware.js

const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const route = express.Router();

route.use(reqFilter);

app.get("", (req, res) => {
  res.send("Welcome Page");
});

app.get("/users", (req, res) => {
  res.send("This is user page!");
});

route.get("/about", (req, res) => {
  res.send("This is about page!");
});

route.get("/contact", (req, res) => {
  res.send("This is Contact page!");
});

app.use("/", route);

app.listen(5005);
