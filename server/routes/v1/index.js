const v1 = require("express").Router();

v1.get("/", (req, res) => res.send("this is v1 on the screen right now."));

module.exports = v1;
