require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const validateRoute = require("./routes/validateRoute.js");
const http = require("http");

const app = express();

app.use(cors("*"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/validate", validateRoute);


// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = err;
    res.status(err.status || 500);
});

module.exports = app;
