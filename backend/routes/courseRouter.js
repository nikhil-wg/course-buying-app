const { Router } = require("express");
const courseRouter = Router();

courseRouter.post("/course", function (req, res) {});
courseRouter.post("/courseList", function (req, res) {});

module.exports = {
  courseRouter:courseRouter,
};
