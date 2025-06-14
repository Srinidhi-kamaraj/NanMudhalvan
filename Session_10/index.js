const express = require("express");
const { default: mongoose } = require("mongoose");
const port = 6000;
const app = express();
const user = require("./Routes/User");
app.use(express.json());

app.listen(port, () => {
  console.log("Server is running");
});

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/user", user);

mongoose
  //   .connect("mongodb://localhost:27017/Session10")
  .connect(
    "mongodb+srv://deepikaperumal0405:deepika@cluster0.yi7bsdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Connection error: ", err);
  });
