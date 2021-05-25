const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ result: "success" });
});

app.post("/", (req, res) => {
  console.log(req.body);
  return res.json({ response: "ok" });
});

app.listen(3000, () => {
  console.log("listening");
});
