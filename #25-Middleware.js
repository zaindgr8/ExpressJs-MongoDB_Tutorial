const express = require("express");
const app = express();

//adding middleware
const reqFilter = (req, res, next) => {
  // console.log("reqFilter")
  if (!req.query.age) {
    res.send("Enter Your Age!");
  } else if (req.query.age < 18) {
    res.send("You can not access!");
  } else {
    next();
  }
};

app.use(reqFilter);
//middleware end

app.get("", (req, res) => {
  res.send("Welcome Page");
});

app.get("/users", (req, res) => {
  res.send("This is user page!");
});

app.listen(5005);
