const { Router } = require("express");
const userRouter = Router();

userRouter.post("/sighin", function (req, res) {});
userRouter.post("/sighup", function (req, res) {});
userRouter.post("/purchases", function (req, res) {});

module.exports = {
  userRouter: userRouter,
};
