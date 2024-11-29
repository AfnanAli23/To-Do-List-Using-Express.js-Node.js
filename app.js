const express = require("express");
const bodyParser = require("body-parser");

const app = express();

newerItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  // const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // const today = new Date();
  // const dayIndex = today.getDay();
  // const dayName = days[dayIndex];
  // let day = "";
  // day = dayName;

  const dayy = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = dayy.toLocaleDateString("en-US", options);

  res.render("list", { checkDay: day, nextItem: newerItems });
});


app.post("/", function (req, res) {
  let newerItem = req.body.newItem;

  newerItems.push(newerItem);

  res.redirect("/");
});





app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
