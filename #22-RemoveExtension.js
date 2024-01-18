const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "public");
// app.use(express.static(publicPath))

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
