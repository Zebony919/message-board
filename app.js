const express = require("express");
const app = express();
const path = require("node:path");

const PORT = 3000;

const indexRouter = require("./routes/indexRouter.js");
const newRouter = require("./routes/newRouter.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`Express listening at port ${PORT}`);
});
