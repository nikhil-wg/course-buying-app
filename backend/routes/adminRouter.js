const { Router } = require("express");
const adminRouter = Router();
const {adminModel}= require("../db")

adminRouter.post("/sighin", function (req, res) {});
adminRouter.post("/sighup", function (req, res) {});
adminRouter.get("/courses", function (req, res) {});
adminRouter.put("/course", function (req, res) {});
adminRouter.get("/courses/bulk", function (req, res) {});

module.exports = {
  adminRouter: adminRouter,
};
