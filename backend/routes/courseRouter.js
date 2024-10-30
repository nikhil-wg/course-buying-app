const { Router } = require("express");
const courseRouter = Router();

userRouter.post("/course", function (req, res) {});
userRouter.post("/courseList", function (req, res) {});

module.exports = {
  courseRouter:courseRouter,
};
