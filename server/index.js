require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Router
const router = require("./routes");

// Server App + Port
const app = express();
const PORT = process.env.PORT || 8000;

// Cors
var corsOpt = {
    origin: "http:localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
};

// Utilities
const cookieParser = require("cookie-parser");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on port: http://localhost:${PORT}`);
});
