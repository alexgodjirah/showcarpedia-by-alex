require("dotenv").config();

module.exports = {
    development: {
        username: process.env.db_username,
        password: process.env.db_password,
        database: process.env.db_name_dev,
        host: "127.0.0.1",
        dialect: "postgres",
    },
    // test: {
    //     username: process.env.db_username,
    //     password: process.env.db_password,
    //     database: process.env.db_name_test,
    //     host: "127.0.0.1",
    //     dialect: "postgres",
    // },
    // production: {
    //     username: process.env.db_username,
    //     password: process.env.db_password,
    //     database: process.env.db_name_prod,
    //     host: "127.0.0.1",
    //     dialect: "postgres",
    // },
};
