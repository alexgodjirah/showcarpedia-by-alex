const { User, Profile } = require("../models");
const { hashPassword } = require("../helpers/passwordHandler");

class RegisterController {
    static register = async (req, res) => {
        const { username, email, password } = req.body;

        try {
            // Email Checker
            const checkEmail = await User.findOne({
                where: { email: email },
            });
            if (checkEmail) {
                return res
                    .status(400)
                    .json({ message: "Email is already taken" });
            }

            // Username Checker
            const checkUsername = await User.findOne({
                where: { username: username },
            });
            if (checkUsername) {
                return res
                    .status(400)
                    .json({ message: "Username is already taken" });
            }

            // User Creation
            const userPayload = {
                username: username,
                email: email,
                password: hashPassword(password),
                role: "user",
                delete: false,
            };
            const userCreation = await User.create(userPayload);
            if (userCreation) {
                // Profile Creation
                const profilePayload = {
                    UserId: userCreation.id,
                    delete: false,
                };
                const profileCreation = await Profile.create(profilePayload);
                if (profileCreation) {
                    return res.status(201).json({
                        username: userCreation.username,
                        email: userCreation.email,
                        role: userCreation.role,
                        profile: profileCreation,
                    });
                } else {
                    return res.status(400).json({ message: "Bad Request" });
                }
            } else {
                res.status(400).json({
                    message: "Bad Request",
                });
            }
        } catch (error) {
            console.log(error);
        }
    };
}

module.exports = RegisterController;
