const express = require("express");

const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(resolve(__dirname, "./public/index.html"));
  console.log(__dirname);
});

app.listen(5000, () => {
  console.log("server listening to port 500");
});
