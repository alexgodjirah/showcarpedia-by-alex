const router = require("express").Router();
const v1 = require("./v1");

router.get("/", (req, res) => res.send("hello from router directory"));

router.use("/v1", v1);

module.exports = router;
