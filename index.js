const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const usersRoute = require("./routes/v1/users.route")

app.use(cors());
app.use(express.json());

app.use("/api/v1/users", usersRoute)

app.get("/", (req, res) => {
  res.send("mvc backend is running");
})

app.listen("/", (req, res) => {
  console.log(`mvc backend is running on port ${port}`)
})