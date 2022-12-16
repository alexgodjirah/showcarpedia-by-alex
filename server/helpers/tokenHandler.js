require("dotenv").config();
const jwt = require("jsonwebtoken");
const secret_key = process.env.secret_key || "hello world";

const generateToken = async (payload) => {
    return jwt.sign(payload, secret_key);
};

const verifyToken = async (token) => {
    return jwt.verify(token, secret_key);
};

module.exports = {
    generateToken,
    verifyToken,
};
