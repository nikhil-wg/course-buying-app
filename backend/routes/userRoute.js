const { Router } = require("express");
const { userModel } = require("../db");
const bcrypt = require("bcrypt");
const userRouter = Router();

userRouter.post("/sighin", async function (req, res) {
  try {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 5);
    await userModel.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
    });
    res.json({
      message: "sigiup successful",
    });
  } catch (e) {
    res.status(500).json({
      message: "error while signup",
    });
  }
});
userRouter.post("/sighup", function (req, res) {});
userRouter.post("/purchases", function (req, res) {});

module.exports = {
  userRouter: userRouter,
};
