const express = require("express");
const { courseRouter } = require("./routes/courseRouter");
const { adminRouter } = require("./routes/adminRouter");
const { userRouter } = require("./routes/userRoute");
const mongoose = require("mongoose");

const app = express();

app.use("api/v1/users", userRouter);
app.use("api/v1/admin", adminRouter);
app.use("api/v1/courses", courseRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://nikhilwagh:5WSn0TnVuKNfMPci@cluster0.i8ue7.mongodb.net/courses-app"
  );
  app.listen(3000);
  console.log("3000 port is running")
}
