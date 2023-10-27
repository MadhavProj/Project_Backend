const express = require("express");
const mongoose = require("mongoose");
const employeeroutes = require("./routes/employeeRoutes");
const cors = require("cors");
const app = express();

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://madithya003:12345@cluster0.nubukjj.mongodb.net/"
);
const db = mongoose.connection;
db.on("open", () => {
  console.log("Database connected");
});
db.on("error", (err) => {
  console.log("Error while connecting to database", err);
});
app.use(express.json());

app.use(cors());
// cross origin resource sharing
app.use("/employees", employeeroutes);

const port = 5030;
app.listen(port, () => {
  console.log("server started on " + port);
});
