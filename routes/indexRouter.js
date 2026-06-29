const express = require("express");
const indexRouter = express();

const messages = [
  {
    text: "Hello World",
    user: "Zebony",
    added: new Date(),
  },
  {
    text: "Coding Universe",
    user: "Bob Vance",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

indexRouter.post("/", (req, res) => {
  messages.push({
    text: req.body.textContent,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect("/");
});

indexRouter.get("/open/:messageId", (req, res) => {
  const { messageId } = req.params;
  const index = Number(messageId);

  const message = messages[index];

  if (!message) {
    return res.status(404).send("Message not found!");
  }

  res.render("open", { message: message });
});

module.exports = indexRouter;
