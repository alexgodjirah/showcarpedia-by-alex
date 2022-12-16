// V1
const v1 = require("express").Router();

// Routes
const entryRoute = require("./entryRoutes");

v1.get("/", (req, res) => res.send("this is v1 on the screen right now."));

// Use Methods
v1.use("/entry", entryRoute);

module.exports = v1;
