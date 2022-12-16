const entryRoute = require("express").Router();

// Controller
const RegisterController = require("../../controllers/registerController");
const LoginController = require("../../controllers/loginController");

// Routes
entryRoute.post("/register", RegisterController.register, (req, res) => {
    console.log(req.body);
    return res.json({ body: req.body });
});

entryRoute.post("/login", LoginController.login);

module.exports = entryRoute;
