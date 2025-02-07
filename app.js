const express = require("express");
const app = express();
const port = 3000;


app.set("view engine", "ejs");
app.set("views", "./views");


app.get("/", (req, res) => {
  res.send("hello world!");
});


app.get("/test", (req, res) => {
  res.render("test");
});


app.get("/test2", (req, res) => {
  res.render("test2");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

