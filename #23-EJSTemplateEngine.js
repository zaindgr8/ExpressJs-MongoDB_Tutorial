const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath))

//EJS Part Start
//Created Folder @Views>profile.ejs
app.set("view engine", "ejs");

//ejs page
app.get("/profile", (req, res) => {
  const user = {
    name: "Zaina Jeh!, ",
    email: "hey@test.com, ",
    city: "pindih!, ",
  };
  res.render("profile", { user });
});
//EJS Part Ends

//root page
app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

//about page on diff extension
app.get("about1", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

//will direct here /help url
app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

//will direct here for any url
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/noPage.html`);
});

app.listen(5005);

//created nopage.html
