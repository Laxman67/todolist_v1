const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Global Variable

let items = ["Buy Food", "Cook food", "Eat Food"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))





// Send File
app.get("/welcome", function (req, res) {
  res.sendFile(__dirname + "/welcome.html");
});



app.get("/", function (req, res) {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kinOfdDay: day,
    newListItems: items,
  });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen("3000", function (req, res) {
  console.log("Running on Port 3000");
});
