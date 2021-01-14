// core modules
const path = require("path");

// third-party modules
const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, ".env") });

const app = express();

// middlewares

// routers
app.use("/", (req, res) => {
    res.send("Hello, world");
});

module.exports = app;
