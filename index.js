const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const usersRoute = require("./routes/v1/users.route");
const toolsRoute = require("./routes/v1/tools.routes");
const viewCount = require("./middleware/viewCount");
const { rateLimit } = require("express-rate-limit");


app.use(cors());
app.use(express.json());
// app.use(viewCount);



// Apply the rate limiting middleware to all requests
// app.use(limiter);

app.use("/api/v1/users", usersRoute);
app.use("/api/v1/tools", toolsRoute);

app.get("/", (req, res) => {
  res.send("mvc backend is running");
})

app.listen(port, (req, res) => {
  console.log(`mvc backend is running on port ${port}`)
})