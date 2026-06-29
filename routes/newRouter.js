const express = require("express");
const newRouter = express();

newRouter.get("/", (req, res) => {
  res.render("form");
});

module.exports = newRouter;
