require("dotenv").config();
const bcrypt = require("bcrypt");
const salt = process.env.SALT;

const hashPassword = (password) => {
    return bcrypt.hashSync(password, parseInt(salt));
};

const verifyPassword = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

module.exports = {
    hashPassword,
    verifyPassword,
};
