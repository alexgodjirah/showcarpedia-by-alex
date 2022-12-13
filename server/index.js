const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000 || process.env.PORT;

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

app.listen(PORT, () => {
    console.log(`Listening on port: http://localhost:${PORT}`);
});
