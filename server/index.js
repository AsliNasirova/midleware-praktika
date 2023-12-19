const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;
app.use(express.static('public'))

const checkAuthorized = function (req, res, next) {
  const password = req.body.password;
  if (password === "1234") {
    next();
  } else {
    res.status(404).send("ugursuz giris yapma");
  }
};

app.post("/login", checkAuthorized, (req, res) => {
  console.log("login is not working");
  res.send("welcome to your ");
});

const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

app.get("/", myLogger, (req, res) => {
  res.send("bye bye World!");
});

app.listen(3000, () => {
  console.log(`Example app not listening on port ${port}`);
});
