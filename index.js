const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
  res.render("index");
});


app.get("/partials/:page", (req, res) => {
  const page = req.params.page;
  res.render(`partials/${page}`);
});

app.listen(3000, () => console.log("SPA running on http://localhost:3000"));
