const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.get("/about", (req, res) => {
  res.send("Hello There !!");
});

app.post("/contact", (req, res) => {
  const userData = req.body;
  console.log("Received Data : ", userData);
});

app.listen(port, function () {
  console.log(`Server started at port number : ${port}`);
});
