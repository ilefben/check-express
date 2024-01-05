const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/home", (req, res) => {
  res.render("home");
});
app.get("/service", (req, res) => {
  res.render("service");
});

app.get("/Contact", (req, res) => {
  res.render("Contact");
});

const port = 3000;
app.listen(port, function () {
  console.log("The server is running");
});
