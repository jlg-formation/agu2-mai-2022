const express = require("express");

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("req: ", req.url);
  res.status(258);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
