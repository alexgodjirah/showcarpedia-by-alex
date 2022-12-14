const { User } = require("../models");
const { verifyPassword } = require("../helpers/passwordHandler");
const { generateToken } = require("../helpers/tokenHandler");

class LoginController {
    static login = async (req, res) => {
        const { username, password } = req.body;

        try {
            // Search User
            const loginUser = await User.findOne({
                where: { username: username },
            });
            if (!loginUser) {
                return res.status(404).json({ message: "User is not found" });
            }

            // Password Checker
            const checkPassword = await verifyPassword(
                password,
                loginUser.password
            );
            if (!checkPassword) {
                return res.status(400).json({
                    message: "Wrong Password! Please enter the correct one!",
                });
            }

            // Access Token
            const access_token = await generateToken({
                id: loginUser.id,
                email: loginUser.email,
                role: loginUser.role,
            });
            res.cookie("access_token", access_token, {
                httpOnly: true,
            });

            return res.status(200).json({
                id: loginUser.id,
                role: loginUser.role,
                access_token: access_token,
                message: "Success",
            });
        } catch (error) {
            console.log(error);
        }
    };
}

module.exports = LoginController;
