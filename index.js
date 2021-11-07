// const express = require("express");
// const app = express();

// app.get("/", function (req, res) {
//   res.send("Hello World");
// });

// app.listen(3000);

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const HOST = "0.0.0.0";
app.use(express.urlencoded({ extended: false }));

console.log(__dirname);

app.use(express.static(path.join(__dirname, "public")));
app.post("/api/v1/quiz", (req, res) => {
  const answer = req.body.answer;
  if (answer === "2") {
    // res.send("<h1>success!!!</h1>");
    res.redirect("/correct.html");
  } else {
    // res.send("<h1>not success</h1>");
    res.redirect("/wrong.html");
  }
  res.send(answer);
});

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Top Page</h1>");
});
app.get("/about", (req, res) => res.send({ name: "Ryuta", age: "32" }));

app.listen(PORT, HOST, () => console.log("I am running !!!!"));
