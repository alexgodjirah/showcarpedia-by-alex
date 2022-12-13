require("dotenv").config();
const bcrypt = require("bcrypt");
const salt = process.env.SALT;

const hashPassword = async (password) => {
    return await bcrypt.hash(password, parseInt(salt));
};

const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

const password = "hello world";

hashPassword(password).then((p) => {
    console.log(p);
    verifyPassword("hello world", p).then((h) => console.log(h));
});

module.exports = {
    hashPassword,
    verifyPassword,
};
