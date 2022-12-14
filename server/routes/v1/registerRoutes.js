const registerRouter = require("express").Router();

// Controller
const RegisterController = require("../../controllers/registerController");

// Routes
registerRouter.post("/", RegisterController.register, (req, res) => {
    console.log(req.body);
});

module.exports = registerRouter;
