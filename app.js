const express = require("express");
const bodyParser = require("body-parser");
const getDate = require("./date");
const date = require(__dirname + "/date");



const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//Global Variable

let items = ["Buy Food", "Cook food", "Eat Food"];
let workItems = ["ok"];

// Send File
app.get("/welcome", function (req, res) {

  res.sendFile(__dirname + "/welcome.html");

});

app.get("/", function (req, res) {

  let day = date.getDate();
  res.render("list", {
    ListTitle: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push[item];
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

//  Work List

app.get("/work", function (req, res) {
  res.render("list", {
    ListTitle: "Work",
    newListItems: workItems,
  });
});

app.post("/work", function (req, res) {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", function (req, res) {
  res.render("about");
});
app.listen("3000", function (req, res) {
  console.log("Running on Port 3000");
});
